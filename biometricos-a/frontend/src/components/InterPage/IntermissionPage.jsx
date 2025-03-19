import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './InterStyles.css'

const Intermission = () => {
  const [selectedExit, setSelectedExit] = useState(null);
  const navigate = useNavigate();

  const handleSelection = (method) => {
    setSelectedExit(method);
  };

  useEffect(() => {
    if (selectedExit === "facial") {
      navigate("/salidaFace");
    }
  }, [selectedExit, navigate]);

  return (
    <div className="container-inter">
      <div className="app-container-intermission">
        <h2 className="title-inter">Sistema de Control de Acceso</h2>
      </div>
      <div className="main-inter">
        <h2 className="subtitle-inter">¿Estás seguro que quieres salir?</h2>

        <div className="button-container-inter">
          <button className="learn-more" onClick={() => handleSelection("facial")}>
          <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
          </span>
          <span className="button-text">Salir</span>
          </button>
        </div>
      </div>
      </div>
  );
};

export default Intermission;