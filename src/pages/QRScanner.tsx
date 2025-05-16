import { useState, useEffect } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import "../styles/QRScanner.css";


interface QRScannerProps {
  onScan: (result: string) => void;
}

const QRScanner = ({ onScan }: QRScannerProps) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleScan = (result: string | null) => {
    if (!result || isProcessing) return;

    setIsProcessing(true); // Evita múltiples escaneos rápidos
    onScan(result.toString().trim());

    setTimeout(() => {
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="scanner-container">
      <Scanner 
        onResult={(result) => handleScan(result)} 
        onError={(error) => console.log("⚠️ Error en el escáner:", error?.message)} 
      />
    </div>
  );
};

export default QRScanner;