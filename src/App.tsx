import { Routes, Route, Navigate } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import ScanResult from "./pages/ScanResult";
import ConfirmationScreen from "./pages/ConfirmationScreen";
import StatusScreen from "./pages/StatusScreen";
import LoginScreen from "./pages/LoginScreen";
import SelectTrip from "./pages/SelectTrip";
import ReceptionConfirmScreen from "./pages/ReceptionConfirmScreen";
import ScanAndReviewScreen from "./pages/ScanAndReviewScreen"; 
import "./styles/App.css";
import { JSX } from "react";

// Protege rutas según autenticación
const PrivateRoute = ({ element }: { element: JSX.Element }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

function App() {
  return (
    <div className="app-container">
      <Routes>
        {/* 🔓 Login */}
        <Route path="/login" element={<LoginScreen />} />

        {/* 🔐 Rutas protegidas comunes */}
        <Route path="/scan-result" element={<PrivateRoute element={<ScanResult />} />} />
        <Route path="/confirmation" element={<PrivateRoute element={<ConfirmationScreen />} />} />
        <Route path="/status" element={<PrivateRoute element={<StatusScreen />} />} />

        {/* 🔐 Perfil de despacho */}
        <Route path="/despacho" element={<PrivateRoute element={<ScanAndReviewScreen mode="despacho" />} />} />
        <Route path="/select-trip" element={<PrivateRoute element={<SelectTrip />} />} />

        {/* 🔐 Perfil de recepción */}
        <Route path="/recepcion" element={<PrivateRoute element={<ScanAndReviewScreen mode="recepcion" />} />} />
        <Route path="/recepcion/conformidad" element={<PrivateRoute element={<ReceptionConfirmScreen />} />} />

        {/* 🔐 Home temporal (por si aún se usa) */}
        <Route path="/" element={<PrivateRoute element={<HomeScreen />} />} />
      </Routes>
    </div>
  );
}

export default App;
