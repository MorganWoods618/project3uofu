import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import DashboardPage from "./pages/dashboard";
import AboutUsPage from "./pages/aboutus";
import CommunityBoardsPage from "./pages/communityboards";
import DestinationPage from "./pages/destinations";

function App() {
  return (
    <Layout>
     <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/destinations" element={<DestinationPage />} />
        <Route path="/communityboards" element={<CommunityBoardsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
