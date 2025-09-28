import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BirthUserForm.css";
import Swal from "sweetalert2";

const BirthUserForm = () => {
  const alertWarning = () => {
    Swal.fire({
      icon: "warning",
      title: "Espera!",
      text: "Si instalarás la aplicación en tu dispositivo, recuerda no usar Firefox ni Opera",
    });
  };
  alertWarning();

  const [userName, setUserName] = useState("");
  const [birthDate, setBirthDate] = useState("2025-09-24");

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!userName || !birthDate) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se recibieron valores del formulario!",
      });
      return;
    }
    navigate("/horoscopo", {
      state: { userName, birthDate },
    });
  };

  return (
    <div>
      <h1 className="title">Horóscopos</h1>
      <p className="msg">Ingrese su nombre y fecha de nacimiento</p>
      <div className="form">
        <div className="field">
          <label className="label">Nombre</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Ingrese su nombre"
              value={userName}
              onChange={(newUserName) => setUserName(newUserName.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Fecha de Nacimiento</label>
          <div className="control">
            <input
              className="input"
              type="date"
              value={birthDate}
              onChange={(newBirthDate) =>
                setBirthDate(newBirthDate.target.value)
              }
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button
              className="btnSubmit button is-link"
              onClick={() => handleSubmit(userName, birthDate)}
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthUserForm;
