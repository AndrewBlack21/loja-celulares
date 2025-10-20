import React, { createContext, useContext, useState, useEffect, use } from "react";
import { supabase } from "../../supabaseCliente.js";
import {
  addToCart,
  getCartItems,
  removeCartItem,
  clearCart,
} from "../services/supabaseCartService";
import { useNavigate, useLocation } from "react-router-dom";



const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  // Recupera o usuário logado
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data?.user) setUser(data.user);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  // Carrega o carrinho do usuário logado
  useEffect(() => {
    if (user) {
      getCartItems(user.id).then(setCarrinho).catch(console.error);
    }
  }, [user]);

  const adicionarCarrinho = async (produto) => {
    if (!user) {
      navigate ("/Login", { state: { from: location.pathname } });
      return;
    }

    try {
      const added = await addToCart({
        user_id: user.id,        // ✅ isso precisa ser o user.id real (UUID)
        product_id: produto.id,  // ✅ precisa vir da tabela products (UUID)
        color: produto.color,
        quantity: 1,
      });

      // Atualiza estado local
      setCarrinho((prev) => {
        const existe = prev.find((p) => p.id === added.id);
        return existe ? prev.map((p) => (p.id === added.id ? added : p)) : [...prev, added];
      });
      alert("✅ Produto adicionado ao carrinho!");
    } catch (err) {
      console.error(err);
    }
  };

  const removerProduto = async (id) => {
    await removeCartItem(id);
    setCarrinho((prev) => prev.filter((p) => p.id !== id));
  };

  const limparCarrinho = async () => {
    if (user) {
      await clearCart(user.id);
      setCarrinho([]);
    }
  };

  return (
    <CarrinhoContext.Provider
      value={{ carrinho, adicionarCarrinho, removerProduto, limparCarrinho, user }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export const useCarrinho = () => useContext(CarrinhoContext);
