import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { conductores, camiones, acoplados, destinos } from "../data/mocks";
import "../styles/SelectTrip.css"; 

const SelectTrip = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const scannedPallets = location.state?.scannedPallets || [];

  //  Estados separados para cada dropdown
  const [selectedConductor, setSelectedConductor] = useState("");
  const [selectedCamion, setSelectedCamion] = useState("");
  const [selectedAcoplado, setSelectedAcoplado] = useState("");
  const [selectedDestino, setSelectedDestino] = useState("");

  const handleConfirmTrip = () => {
    if (!selectedConductor || !selectedCamion || !selectedAcoplado || !selectedDestino) {
      alert("Por favor completa todos los campos antes de confirmar el viaje.");
      return;
    }

    navigate("/confirmation", {
      state: {
        scannedPallets,
        selectedConductor,
        selectedCamion,
        selectedAcoplado,
        selectedDestino,
      },
    });
  };

  return (
    <div className="container">
      <h1>Seleccionar Viaje</h1>

      <div className="dropdown-container">
        <label>Conductor:</label>
        <select value={selectedConductor} onChange={(e) => setSelectedConductor(e.target.value)}>
          <option value="">Seleccione un conductor</option>
          {conductores.map((conductor, index) => (
            <option key={index} value={conductor}>{conductor}</option>
          ))}
        </select>
      </div>

      <div className="dropdown-container">
        <label>Camión:</label>
        <select value={selectedCamion} onChange={(e) => setSelectedCamion(e.target.value)}>
          <option value="">Seleccione un camión</option>
          {camiones.map((camion, index) => (
            <option key={index} value={camion}>{camion}</option>
          ))}
        </select>
      </div>

      <div className="dropdown-container">
        <label>Acoplado:</label>
        <select value={selectedAcoplado} onChange={(e) => setSelectedAcoplado(e.target.value)}>
          <option value="">Seleccione un acoplado</option>
          {acoplados.map((acoplado, index) => (
            <option key={index} value={acoplado}>{acoplado}</option>
          ))}
        </select>
      </div>

      <div className="dropdown-container">
        <label>Destino:</label>
        <select value={selectedDestino} onChange={(e) => setSelectedDestino(e.target.value)}>
          <option value="">Seleccione un destino</option>
          {destinos.map((destino, index) => (
            <option key={index} value={destino}>{destino}</option>
          ))}
        </select>
      </div>

      <button className="button" onClick={handleConfirmTrip} disabled={!selectedConductor || !selectedCamion || !selectedAcoplado || !selectedDestino}>
        Confirmar Viaje
      </button>
    </div>
  );
};

export default SelectTrip;
