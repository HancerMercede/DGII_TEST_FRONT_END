import { ContributorList } from "../components/ContributorList.jsx";
import { TicketList } from "../components/TicketList.jsx";

export const LandingPage = () => {
  return (
    <>
      <div className="buttonWrapper">
        <button>Contribuidores</button>
        <button>Comprobantes</button>
      </div>
      <ContributorList />
      <TicketList />
    </>
  );
};
