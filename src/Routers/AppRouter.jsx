import { Route, Routes } from "react-router-dom";
import { ContributorList } from "../components/ContributorList";
import { TicketList } from "../components/TicketList";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" exact element={<ContributorList />} />
      <Route path="/Tickets" element={<TicketList />} />
    </Routes>
  );
};
