import style from "./ContributorCard.module.css";
import { PropTypes } from "prop-types";

export const ContributorCard = ({ contributor }) => {
  return (
    <div className={style.container}>
      <li>Nombre</li>
      <li>{contributor.name}</li>
      <li>Cedula</li>
      <li>{contributor.rncCedula}</li>
      <li>Tipo</li>
      <li>{contributor.type}</li>
      <li>Estado</li>
      <li>{contributor.status == 1 ? "Activo" : "Inactivo"}</li>
    </div>
  );
};

ContributorCard.propTypes = {
  contributor: PropTypes.object.isRequired,
};
