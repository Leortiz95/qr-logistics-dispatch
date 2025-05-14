// src/pages/ReceptionConfirmScreen.tsx
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/ReceptionConfirmSreen.css";

const ReceptionConfirmScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pallets = location.state?.pallets || [];

  const [isConforme, setIsConforme] = useState<"yes" | "no" | null>(null);
  const [motivo, setMotivo] = useState("");
  const [comentario, setComentario] = useState("");

  const handleSubmit = () => {
    if (isConforme === "yes") {
      alert("✅ Recepción conforme registrada.");
    } else {
      alert(`❌ Recepción NO conforme. Motivo: ${motivo}\nComentario: ${comentario}`);
    }
    navigate("/");
  };

  return (
    <div className="reception-container">
      <h1>Confirmar Conformidad</h1>

      <h3>Resumen de pallets recibidos:</h3>
      <ul className="summary-list">
        {pallets.map((p: any, index: number) => (
          <li key={index}>
            <strong>Pallet N°:</strong> {p.palletN} - <strong>Contenido:</strong> {p.contenido} - <strong>Lote:</strong> {p.lote}
          </li>
        ))}
      </ul>

      <p>¿El camión fue recibido conforme?</p>

      <div className="checkbox-group">
        <label>
          <input
            type="radio"
            name="conforme"
            value="yes"
            checked={isConforme === "yes"}
            onChange={() => setIsConforme("yes")}
          />
          Sí
        </label>
        <label>
          <input
            type="radio"
            name="conforme"
            value="no"
            checked={isConforme === "no"}
            onChange={() => setIsConforme("no")}
          />
          No
        </label>
      </div>

      {isConforme === "yes" && <p className="mensaje-ok">✅ Recepción conforme registrada.</p>}

      {isConforme === "no" && (
        <div className="motivo-box">
          <label>Motivo de disconformidad:</label>
          <select value={motivo} onChange={(e) => setMotivo(e.target.value)}>
            <option value="">Seleccione un motivo</option>
            <option value="bolsa rota">Bolsa rota</option>
            <option value="bolsa en mal estado">Bolsa en mal estado</option>
            <option value="otros">Otros</option>
          </select>

          {motivo === "otros" && (
            <textarea
              className="textarea-box"
              placeholder="Describa el motivo..."
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
            ></textarea>
          )}
        </div>
      )}

      <button className="button" onClick={handleSubmit} disabled={isConforme === null}>
        Finalizar Recepción
      </button>
    </div>
  );
};

export default ReceptionConfirmScreen;
