import "./App.scss";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route exact path="/" element={<Login></Login>}></Route>
        <Route
          exact
          path="/dashboard"
          element={<Dashboard></Dashboard>}
        ></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
