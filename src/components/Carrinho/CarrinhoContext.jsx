import React, { createContext, useState, useContext } from "react";

const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarCarrinho = (produto) => {
    setCarrinho((prev) => {
      const existe = prev.find((p) => p.id === produto.id);
      if (existe) {
        return prev.map((p) =>
          p.id === produto.id ? { ...p, quantidade: p.quantidade + 1 } : p
        );
      }
      return [...prev, { ...produto, quantidade: 1 }];
    });
  };
  const removerProduto = (id) => {
    setCarrinho((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <CarrinhoContext.Provider
      value={{ carrinho, adicionarCarrinho, removerProduto }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export const useCarrinho = () => useContext(CarrinhoContext);
