import { Link, Routes, Route } from "react-router-dom";
import Blue from "./components/Blue/blue";
import Red from "./components/red/Red";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <div id="container">
        <h1>Hello React Router!</h1>
        <div id="navbar">
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link>
          <Link to="/Home">Home</Link>
        </div>

        <div id="main-section">
          <Routes>
            <Route path="/blue" element={<Blue />}></Route>
            <Route path="/red" element={<Red />}></Route>
            <Route path="/home" element={<Home />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
