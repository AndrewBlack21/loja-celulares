import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { CarrinhoProvider } from "./components/Carrinho/CarrinhoContext";
import { AuthProvider } from "./components/Context/AuthContext";
import "./index.css";
import App from "./App.jsx";

// ou

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <CarrinhoProvider>
          <App />
        </CarrinhoProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
