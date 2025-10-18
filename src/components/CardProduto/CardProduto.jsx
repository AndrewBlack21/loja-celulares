import React from "react";
import { useCarrinho } from "../Carrinho/CarrinhoContext";
import {useNavigate} from "react-router-dom";
import styles from "./CardProduto.module.css";

export default function CardProduto({ id, nome, preco, img, cores }) {
  const { adicionarCarrinho } = useCarrinho();
  const [corSelecionada, setCorSelecionada] = useState("");
  const navigate = useNavigate();

  const handleCompra = async () => {
    if (!corSelecionada && cores.length > 0) {
      alert("Selecione uma cor antes de comprar!");
      return;
    }

    const produto = {
      id,
      name: nome,
      price: preco,
      image_url: img,
      color: corSelecionada,
    };

    await adicionarCarrinho(produto);
    navigate("/carrinho");
  };

  return (
    <div className={styles.cardproduto}>
      <img src={img} alt={nome} />
      <h3>{nome}</h3>
      <p>R$ {Number(preco).toFixed(2)}</p>

      <div className={styles.cores}>
        {cores.map((cor) => (
          <button
            key={cor}
            style={{
              backgroundColor: cor,
              border: corSelecionada === cor ? "2px solid black" : "1px solid #ccc",
            }}
            onClick={() => setCorSelecionada(cor)}
          />
        ))}
      </div>

      <button onClick={handleCompra}>Comprar</button>
    </div>
  );
}