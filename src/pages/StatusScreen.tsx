import { useLocation, useNavigate } from "react-router-dom";

const StatusScreen: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const transporte = location.state?.transporte;

  return (
    <div className="container">
      <h1>Estado del Transporte</h1>
      
      {transporte ? (
        <>
          <p><strong>ID del Viaje:</strong> {transporte.viajeID}</p>
          <p><strong>Conductor:</strong> {transporte.conductor}</p>
          <p><strong>Patente del Camión:</strong> {transporte.patenteCamion}</p>
          <p><strong>Patente del Acoplado:</strong> {transporte.patenteAcoplado}</p>
          <p><strong>Destino:</strong> {transporte.destino}</p>
          <p><strong>Estado:</strong> {transporte.estado}</p>
        </>
      ) : (
        <p>No hay información de transporte disponible.</p>
      )}

      {/* Botón para escanear nuevamente y confirmar */}
      <div className="button-container">
        <button className="button" onClick={() => navigate("/")}>
          Volver al Inicio
        </button>
        <button className="button" onClick={() => navigate("/scan")}>
          Escanear QR para Confirmar
        </button>
      </div>
    </div>
  );
};

export default StatusScreen;
