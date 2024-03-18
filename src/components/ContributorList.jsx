import { useEffect, useState } from "react";
import { httpClient } from "../Utils/httpClient";
import { ContributorCard } from "./ContributorCard";
import styles from "./ContributorList.module.css";
import "animate.css";

export const ContributorList = () => {
  const [contributors, setContributors] = useState([]);

  const getAll = async () => {
    const data = await httpClient("/contributor");
    setContributors(data);
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      <header
        className={`${styles.Header} animate__animated animate__fadeInLeft`}
      >
        <h1>Listado de Contribuidores</h1>
      </header>

      <div className={`${styles.container} animate__animated animate__fadeIn`}>
        <ul>
          {contributors.map((c) => (
            <ContributorCard key={c.contributorId} contributor={c} />
          ))}
        </ul>
      </div>
    </>
  );
};
