import "./App.scss";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Playlists from "./pages/Playlists";
import Podcasts from "./pages/Podcasts";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login></Login>}></Route>
          <Route
            exact
            path="dashboard"
            element={<Dashboard></Dashboard>}
          ></Route>
          <Route
            exact
            path="playlists"
            element={<Playlists></Playlists>}
          ></Route>
          <Route exact path="podcasts" element={<Podcasts></Podcasts>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
