import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fakePallets } from "../data/mocks";
import "../styles/ScanResult.css";

// Función para truncar textos
const truncateText = (text: string, length: number = 8) => {
  return text.length > length ? text.substring(0, length) + "..." : text;
};

const ScanResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const scannedCode = location.state?.scannedCode || null;

  const [scannedPallets, setScannedPallets] = useState<any[]>([]);

  useEffect(() => {
    if (scannedCode) {
      let palletData = fakePallets.find((p) => p.palletN === scannedCode);
      if (!palletData) {
        palletData = {
          produccion: "Argentina 2025",
          especie: "Maiz (Transgenico)",
          cultivar: "Nuevo Cultivar",
          partida: "ZMXX",
          contenido: "100000 Semillas",
          bolsasPallet: 90,
          grado: "C6",
          placaSugerida: "10.0 x 5.5",
          lote: truncateText(`ZE10${scannedCode}`, 6),  //  Truncamos a 6 caracteres
          material: truncateText(`30114${scannedCode}`, 6),  //  Truncamos a 6 caracteres
          palletN: truncateText(scannedCode, 6),  //  Truncamos a 6 caracteres
        };
      }
      setScannedPallets((prev) => [...prev, palletData]);
    }
  }, [scannedCode]); //  Solo se ejecuta cuando hay un nuevo código escaneado

  return (
    <div className="scan-result-container">
      <h1>Datos de los Pallets Escaneados</h1>

      <div className="pallets-container">
        {scannedPallets.map((pallet, index) => (
          <div key={index} className="pallet-card">
            <p><strong>Producción:</strong> {pallet.produccion}</p>
            <p><strong>Especie:</strong> {pallet.especie}</p>
            <p><strong>Cultivar:</strong> {pallet.cultivar}</p>
            <p><strong>Partida:</strong> {pallet.partida}</p>
            <p><strong>Contenido:</strong> {pallet.contenido}</p>
            <p><strong>Bolsas por pallet:</strong> {pallet.bolsasPallet}</p>
            <p><strong>Grado:</strong> {pallet.grado}</p>
            <p><strong>Placa Sugerida:</strong> {pallet.placaSugerida}</p>
            <p><strong>Lote:</strong> {pallet.lote}</p>
            <p><strong>Material:</strong> {pallet.material}</p>
            <p><strong>Pallet N°:</strong> {pallet.palletN}</p>
          </div>
        ))}
      </div>

      <div className="button-container">
        <button 
          className="scan-button" 
          onClick={() => navigate("/scan")} //  Vuelve a la pantalla SOLO del escáner
        >
          Volver a escanear
        </button>
        <button 
          className="confirm-button" 
          onClick={() => navigate("/select-trip", { state: { scannedPallets } })}
        >
          Confirmar Viaje
        </button>
      </div>
    </div>
  );
};

export default ScanResult;