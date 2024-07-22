import "./App.scss";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Playlists from "./pages/Playlists";
import Error from "./pages/Error";

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
          <Route
            exact
            path="error"
            element={<Error></Error>}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
