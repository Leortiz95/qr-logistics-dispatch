import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginScreen.css";

const LoginScreen = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (email.endsWith("@bayer.com")) {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("role", "despacho"); 
      navigate("/despacho");
    } else if (email.endsWith("@gmail.com")) {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("role", "recepcion"); 
      navigate("/recepcion");
    }
  }    

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Iniciar Sesión</h1>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-box"
        />
        {error && <p className="error-message">{error}</p>}
        <button onClick={handleLogin} className="login-button">
          Acceder
        </button>
      </div>

      {/* 🔥 Logo en la parte inferior */}
      <div className="footer-container">
        <img
          src="/DataIntelligenceIcon-transparente.png"
          alt="Logo Data Intelligence"
          className="footer-logo"
        />
        <p className="powered-text">
          Powered by <span>Soporte de Negocio</span>
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;
