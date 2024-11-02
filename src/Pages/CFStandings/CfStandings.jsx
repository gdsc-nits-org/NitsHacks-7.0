import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Navbar } from "../../Components";
const crypto = require('crypto');

const nowTime = Math.floor(Date.now() / 1000);

const hash = crypto.createHash('sha512');
const code = `123456/contest.standings?apiKey=aa3c8e778b5419005e77427a61de408186595396&contestId=499481&time=${nowTime}#fe85672451f7e8fc3992ef6165c5bb624dc2b09c`
hash.update(code);
const hexHash = hash.digest('hex');

console.log(code);


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

  
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(
        `${import.meta.env.VITE_CF_API_URL}/contest.standings?contestId=496831&apiKey=aa3c8e778b5419005e77427a61de408186595396&time=${nowTime}&apiSig=123456<${hexHash}>`
      ).then((res) => res.json()),
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
  console.log(data);
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerCont}>
        <h1 className={styles.header}>current standings</h1>
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
            <th>Successfull Hacks</th>
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
              <td>{item.successfulHackCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CfStandings;
