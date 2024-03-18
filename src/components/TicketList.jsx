import { useEffect, useState } from "react";
import { httpClient } from "../Utils/httpClient";
import { Ticket } from "./Ticket.jsx";
import style from "./TicketList.module.css";
import "animate.css";

export const TicketList = () => {
  const [tickets, setTickets] = useState([]);

  const getAll = async () => {
    const data = await httpClient("/Comprobantes");
    setTickets(data);
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      <header
        className={`${style.Header} animate__animated animate__fadeInLeft`}
      >
        <h1>Listado de Comprobantes</h1>
      </header>
      <div className={`${style.container} animate__animated animate__fadeIn`}>
        <ul>
          {tickets.map((ticket) => (
            <Ticket key={ticket.id} ticket={ticket} />
          ))}
        </ul>
      </div>
    </>
  );
};
