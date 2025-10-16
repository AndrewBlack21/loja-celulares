import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CarrinhoProvider } from "./components/Carrinho/CarrinhoContext";
import "./index.css";
import App from "./App.jsx";

// ou

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CarrinhoProvider>
        <App />
      </CarrinhoProvider>
    </BrowserRouter>
  </React.StrictMode>
);
