import { useState } from "react";
import axios from "axios";
import './SubjectComponent.css'

export default function RegistrarAsistencia() {
  const [usuarioId, setUsuarioId] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMensaje("");

    try {
      const response = await axios.post("/api/registrar_asistencia/", {
        usuario_id: usuarioId,
      });
      setMensaje(response.data.mensaje);
    } catch (error) {
      setMensaje(error.response?.data?.error || "Error al registrar asistencia");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-sc">
        <div className="t-container-sc">
          <h2 className="title-sc">Registrar Asistencia</h2>
          <form onSubmit={handleSubmit} className="form-sc">
            <input
              type="text"
              value={usuarioId}
              onChange={(e) => setUsuarioId(e.target.value)}
              placeholder="ID del usuario"
              className="id-sc"
              required
            />
            <button
              type="submit"
              className="loading-sc"
              disabled={loading}
            >
              {loading ? "Registrando..." : "Registrar"}
            </button>
          </form>
          {mensaje && (
            <p className="msa-sc">{mensaje}</p>
          )}
        </div>
      </div>
  );
}
