import "./Dashboard.scss";
import Navbar from "../components/Navbar";
import SearchBar from "../components/Searchbar";
import MainContent from "../components/MainContent";
import Playbar from "../components/Playbar";

function Dashboard() {
  return (
    <div className="dashboard-grid">
      <div className="dashboard">
        <div className="dashboard-nav">
          <Navbar></Navbar>
        </div>
        <div className="dashboard-content">
          <SearchBar className="item1"></SearchBar>
          <MainContent className="item2"></MainContent>
          <Playbar className="item3"></Playbar>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
