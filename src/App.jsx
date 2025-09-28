import { Routes, Route } from "react-router-dom";
import BirthUserForm from "../components/BirthUserForm/BirthUserForm.jsx";
import HoroscopoInfo from "../components/HoroscopoInfo/HoroscopoInfo.jsx";

import PWABadge from "./PWABadge.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BirthUserForm />} />

        <Route path="/horoscopo" element={<HoroscopoInfo />} />
      </Routes>
      <PWABadge />
    </>
  );
}

export default App;
