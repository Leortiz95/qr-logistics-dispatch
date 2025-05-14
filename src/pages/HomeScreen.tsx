import { useNavigate } from "react-router-dom";
import "../styles/HomeScreen.css";

const HomeScreen = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <div className="home-container">
      <h1>Escanea el QR para comenzar</h1>

      <button
  className="scan-button"
  onClick={() => {
    const role = localStorage.getItem("role");
    if (role === "despacho") {
      navigate("/despacho");
    } else if (role === "recepcion") {
      navigate("/recepcion");
    } else {
      navigate("/login");
    }
  }}
>
  Escanear QR
</button>


      <p className="logout-text" onClick={handleLogout}>
        Cerrar Sesión
      </p>
    </div>
  );
};

export default HomeScreen;
