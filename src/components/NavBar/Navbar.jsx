import React from "react";
import { Link } from "react-router-dom";
// import { useCarrinho } from "../Carrinho/CarrinhoContext";
import styles from "./Navbar.module.css";
import Logo from "/src/assets/Logo.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import CartIcon from "../Carrinho/CartIcon";

// import { span } from "framer-motion/client";

const img = Logo;

export default function Navbar() {
  // const { carrinho } = useCarrinho();
  // const totalItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={img} alt="Logo" />
        </Link>
      </div>
      <ul>
        <Link to="/produtopage">Produto</Link>
        {/* <Link to="/contato">Contato</Link> */}
        <Link to="/carrinho" className={styles.carrinho}>
          <CartIcon />
          {/* {totalItens > 0 && <span>({totalItens})</span>} */}
        </Link>
      </ul>
    </nav>
  );
}
