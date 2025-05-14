import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/ConfirmationScreen.css"; 

function ConfirmationScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedConductor, selectedCamion, selectedAcoplado, selectedDestino } = location.state || {};

  const [cantidadBolsas, setCantidadBolsas] = useState("");
  const [comentarios, setComentarios] = useState("");

  const handleDispatch = () => {
    console.log("✅ Confirmación enviada:");
    console.log("Conductor:", selectedConductor);
    console.log("Camión:", selectedCamion);
    console.log("Acoplado:", selectedAcoplado);
    console.log("Destino:", selectedDestino);
    console.log("Cantidad de bolsas:", cantidadBolsas);
    console.log("Comentarios:", comentarios);

    alert(`🚛 Camión ${selectedCamion} con acoplado ${selectedAcoplado} ha sido despachado hacia ${selectedDestino}`);

    navigate("/"); 
  };

  return (
    <div className="container">
      <h1>Confirmación del Viaje</h1>

      <p><strong>Conductor:</strong> {selectedConductor}</p>
      <p><strong>Camión:</strong> {selectedCamion}</p>
      <p><strong>Acoplado:</strong> {selectedAcoplado}</p>
      <p><strong>Destino:</strong> {selectedDestino}</p>

      <label>Cantidad de bolsas:</label>
      <input
      type="number"
      value={cantidadBolsas}
      onChange={(e) => setCantidadBolsas(e.target.value)}
      className="input-box"
    />

      <label>Comentarios:</label>
      <textarea
        value={comentarios}
        onChange={(e) => setComentarios(e.target.value)}
        className="textarea-box"
        placeholder="Escribe aquí cualquier aclaración..."
      />

      <button className="button" onClick={handleDispatch}>
        Despachar Camión
      </button>
    </div>
  );
}

export default ConfirmationScreen;
