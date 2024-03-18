import PropTypes from "prop-types";
import styles from "./Ticket.module.css";

export const Ticket = ({ ticket }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className={styles.container}>
      <li>Cedula</li>
      <li>{ticket.rncCedula}</li>
      <li>Comprobante</li>
      <li>{ticket.ncf}</li>
      <li>Monto</li>
      <li>{formatter.format(ticket.monto)}</li>
      <li>Itebis</li>
      <li>{formatter.format(ticket.itebis)}</li>
      <li>
        <b>Total</b>
      </li>
      <li>{formatter.format(ticket.total)}</li>
    </div>
  );
};

Ticket.propTypes = {
  ticket: PropTypes.object.isRequired,
};
