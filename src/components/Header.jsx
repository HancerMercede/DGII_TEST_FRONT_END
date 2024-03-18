import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="buttonWrapper">
      <Link to="/">Contribuidores</Link>
      <Link to={"/Tickets"}>Comprobantes</Link>
    </div>
  );
};
