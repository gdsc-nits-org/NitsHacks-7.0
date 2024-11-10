import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Navbar } from "../../Components";
import styles from "./CfStandings.module.scss";
const queryClient = new QueryClient();

async function pullData(message, time) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-512", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  const res = await fetch(
    `https://codeforces.com/api/contest.standings?contestId=564294&apiKey=${key}&time=${time}&apiSig=123456<${hashHex}>`
  );
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
}

const key = import.meta.env.VITE_CF_API_KEY;
const secret = import.meta.env.VITE_CF_API_SECRET;

const CfStandings = () => {
  const [comingsoon] = useState(false);
  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.mainCont}>
        <Navbar />
        {!comingsoon ? (
          <Wrapper />
        ) : (
          <div className={styles.comingsoon}>
            Standings will appear once the contest starts
          </div>
        )}
      </div>
      <ToastContainer />
    </QueryClientProvider>
  );
};

const Wrapper = () => {
  const nowTime = Math.floor(Date.now() / 1000);
  const code = `123456/contest.standings?apiKey=${key}&contestId=564294&time=${nowTime}#${secret}`;
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => pullData(code, nowTime),
  });

  if (isLoading) return "Loading...";

  if (error) return `An error has occurred: ${error.message}`;

  const findUser = () => {
    const offset = 210;
    const searchbar = document.getElementById("searchbar");
    try {
      const userToFind = document.getElementById(searchbar.value.toLowerCase().trim());
      const userPosition = userToFind.getBoundingClientRect().top;
      const offsetPosition = userPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } catch (err) {
      toast("User not found!! Please check for typos", {
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerCont}>
        <h1 className={styles.header}>finals standings</h1>
      </div>
      <div className={styles.inputCont}>
        <input
          type="text"
          className={styles.userbox}
          id="searchbar"
          placeholder="Search By Username"
        />
        <button onClick={findUser}>Go</button>
      </div>
      <table className={styles.innerCont} cellSpacing={10}>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Teams/Individuals</th>
            <th>Points</th>
            <th>Penalty</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {data.result.rows.map((item, id) => (
            <tr
              className={`${styles.row} ${id % 2 === 0 ? styles.evenRow : styles.oddRow}`}
              key={item.id}
            >
              <td>{id + 1}</td>
              <td className={styles.members}>
                {item.party.members.map((member) => (
                  <div
                    className={styles.member}
                    id={member.handle.toLowerCase()}
                    key={member.id}
                  >
                    <a
                      href={`https://codeforces.com/profile/${member.handle}`}
                      target="_blank"
                    >
                      {member.handle}
                    </a>
                  </div>
                ))}
              </td>
              <td>{item.points}</td>
              <td>{item.penalty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CfStandings;
