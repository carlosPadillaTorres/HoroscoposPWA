import { Routes, Route } from "react-router-dom";
import BirthUserForm from "../components/BirthUserForm/BirthUserForm.jsx";
import HoroscopoInfo from "../components/HoroscopoInfo/HoroscopoInfo.jsx";
import Swal from "sweetalert2";
import PWABadge from "./PWABadge.jsx";
import "./App.css";

function App() {
  const alertWarning = () => {
    Swal.fire({
      icon: "warning",
      title: "Espera!",
      text: "Si instalarás la aplicación en tu dispositivo, recuerda no usar Firefox ni Opera",
    });
  };
  alertWarning();
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
