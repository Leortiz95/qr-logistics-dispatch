import { useNavigate } from "react-router-dom";
import QRScanner from "./QRScanner";
import "../styles/ScanScreen.css";

const ScanScreen = () => {
  const navigate = useNavigate();

  const handleScan = (result: string) => {
    navigate("/scan-result", { state: { scannedCode: result } }); // vía el código escaneado a la otra pantalla
  };

  return (
    <div className="container">
      <h1>Escanear Código QR</h1>
      <QRScanner onScan={handleScan} /> {/*  SOLO el escáner */}
    </div>
  );
};

export default ScanScreen;