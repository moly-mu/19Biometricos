import { useState } from "react";
import {useNavigate} from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import './FormComponent.CSS'

const FormComponent = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    documento: "",
  });

  const [qrUrl, setQrUrl] = useState(null); // URL del QR generado
  const [error, setError] = useState(null); // Manejo de errores

  // Manejador de cambios para los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Generar código QR
  const handleGenerarQR = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/generar-qr/", formData);

      if (response.status === 201) {
        setQrUrl(response.data.qr_code_base64); // Establece la URL del QR
        setError(null); // Limpia errores previos
      } else {
        console.error("Error generando el QR:", response.data);
        setError("Hubo un error al generar el código QR.");
      }
    } catch (err) {
      console.error("Error al conectar con el servidor:", err);
      setError("No se pudo conectar con el servidor.");
    }
  };

  return (
    <div className="app-container-form-FC">
      <div className="container-form-FC">
        <h2 className="title-FC">Registrar usuario</h2>
        
        <form onSubmit={onSubmit || ((e) => e.preventDefault())} className="form-layout-FC">
          {/* Primera fila: Nombre - Apellidos */}
          <div className="row-fields-FC">
            <div className="container-label input-half-FC">
              <label htmlFor="nombres">Nombre:</label>
              <input
                type="text"
                id="nombres"
                name="nombres"
                value={formData.nombres}
                onChange={handleChange}
                required
              />
            </div>

            <div className="container-label-FC input-half-FC">
              <label htmlFor="apellidos">Apellidos:</label>
              <input
                type="text"
                id="apellidos"
                name="apellidos"
                value={formData.apellidos}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="row-fields-FC">
            <div className="container-label-FC input-half-FC">
              <label htmlFor="documento">Documento:</label>
              <input
                type="text"
                id="documento"
                name="documento"
                value={formData.documento}
                onChange={handleChange}
                required
              />
            </div>

            <div className="container-label-FC input-half-FC container-send-download-FC">
              <label className="qr-FC">CódigoQR:</label>
              <button className="form-button-generar-FC" type="button" onClick={handleGenerarQR}>
                Generar Código
              </button>
              
              {qrUrl && (
                <>
                  <img src={qrUrl} alt="Código QR generado" className="qr-image-FC" />
                  <a href={`http://127.0.0.1:8000/qr/descargas/${formData.documento}`} target="_blank" rel="noopener noreferrer" className="form-button-download-FC">
                    Ver Código QR
                  </a>
                </>
              )}
            </div>
          </div>

          {/* Botón Atrás */}
          <button className="btn-back-FC" type="button" onClick={() => navigate("/")}>
            Atrás
          </button>

          {/* Errores */}
          {error && <p className="error-message-FC">{error}</p>}
        </form>
      </div>
    </div>
  );
};

// Validación de las props
FormComponent.propTypes = {
  onSubmit: PropTypes.func,
};

export default FormComponent;
