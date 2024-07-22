import "./Dashboard.scss";
import Navbar from "../components/Navbar";
import SearchBar from "../components/Searchbar";
import MainContent from "../components/MainContent";
import Playbar from "../components/Playbar";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-nav">
        <Navbar></Navbar>
      </div>
      <div className="dashboard-content">
        <SearchBar className="dashboard-search"></SearchBar>
        <MainContent className="dashboard-api"></MainContent>
        <Playbar className="dashboard-playbar"></Playbar>
      </div>
    </div>
  );
}

export default Dashboard;
