import { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./Navbar.jsx";
import LandingPage from "./Landing-Page.jsx";

function App() {
  const [count, setCount] = useState(0);

  return <LandingPage />;
}

export default App;
