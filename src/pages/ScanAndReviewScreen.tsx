// src/pages/ScanAndReviewScreen.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Scanner } from "@yudiel/react-qr-scanner";
import { fakePallets } from "../data/mocks";
import "../styles/ScanResult.css";

const truncateText = (text: string, length: number = 10) => {
  return text.length > length ? text.substring(0, length) + "..." : text;
};

interface Props {
  mode: "despacho" | "recepcion";
}

const ScanAndReviewScreen = ({ mode }: Props) => {
  const navigate = useNavigate();
  const [scannedPallets, setScannedPallets] = useState<any[]>([]);
  const [isScanning, setIsScanning] = useState(true);
  const [lastScanned, setLastScanned] = useState<string | null>(null);

  const handleScan = (result: string | null) => {
    if (!result || result === lastScanned) return;

    const scannedText = result.toString().trim();
    setLastScanned(scannedText);
    setIsScanning(false);

    let palletData = fakePallets.find((p) => p.palletN === scannedText);
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
        lote: truncateText(`ZE10${scannedText}`),
        material: truncateText(`30114${scannedText}`),
        palletN: truncateText(scannedText),
      };
    }

    setScannedPallets((prev) => [...prev, palletData]);
  };

  const handleFinalizar = () => {
    if (mode === "recepcion") {
      navigate("/recepcion/conformidad", { state: { pallets: scannedPallets } });
    } else {
      navigate("/select-trip", { state: { scannedPallets } });
    }
  };

  return (
    <div className="scan-result-container">
      <h1>{mode === "recepcion" ? "Recepción de Pallets" : "Despacho de Pallets"}</h1>

      {isScanning && (
        <div className="scanner-box">
          <Scanner
            onResult={(result) => handleScan(result)}
            onError={(error) => console.log(error?.message)}
          />
        </div>
      )}

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

      {scannedPallets.length > 0 && (
        <div className="button-container">
          <button
            className="scan-button"
            onClick={() => {
              setIsScanning(true);
              setLastScanned(null);
            }}
          >
            Escanear otro
          </button>
          <button className="confirm-button" onClick={handleFinalizar}>
            {mode === "recepcion" ? "Finalizar" : "Confirmar Viaje"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ScanAndReviewScreen;
