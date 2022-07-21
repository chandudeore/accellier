import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import DisplayData from "./components/DisplayData";
import Event from "./components/Event";
import Edit from "./components/Edit";

function App() {
  return (
    <div className="App">
      <div className="link">
        <Link to="/" className="link2">
          Home
        </Link>
        <Link to="/add-event" className="link2">
          Add-Event
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<DisplayData />}></Route>
        <Route path="/add-event" element={<Event />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
      </Routes>
    </div>
  );
}

export default App;
