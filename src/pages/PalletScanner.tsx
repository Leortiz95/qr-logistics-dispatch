import { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import { useNavigate } from "react-router-dom";
import { fakeViajes } from "../data/mocks";

const PalletScanner = () => {
  const [pallets, setPallets] = useState<string[]>([]);
  const [selectedTrip, setSelectedTrip] = useState("");
  const navigate = useNavigate();
  
  const handleScan = (result: string | null) => {
    if (result && !pallets.includes(result)) {
      setPallets((prevPallets) => [...prevPallets, result]);
    }
  };

  const handleConfirmPallets = () => {
    navigate("/select-trip", { state: { pallets } });
  };

  return (
    <div className="container">
      <h1>Escanear Pallets</h1>
      <Scanner onResult={(text) => handleScan(text)} onError={(error) => console.log(error?.message)} />
      
      <h2>Pallets Escaneados:</h2>
      <ul>
        {pallets.map((pallet, index) => (
          <li key={index}>{pallet}</li>
        ))}
      </ul>
      
      <button className="button" onClick={handleConfirmPallets} disabled={pallets.length === 0}>
        Confirmar Pallets
      </button>
    </div>
  );
};

export default PalletScanner;