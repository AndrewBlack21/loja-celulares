import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "/src/assets/logoIntro.png";
import CartIcon from "../Carrinho/CartIcon";
import AuthStatus from "../Context/AuthStatus";
import { FaBars, FaTimes } from "react-icons/fa";

const img = Logo;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={img} alt="Logo" />
        </Link>
      </div>

      {/* Menu para telas grandes com <li> */}
      <ul className={styles.menuDesktop}>
        <li>
          <Link to="/produtopage">Produto</Link>
        </li>
        <li>
          <AuthStatus />
        </li>
        <li>
          <Link to="/carrinho" className={styles.carrinho}>
            <CartIcon />
          </Link>
        </li>
      </ul>

      {/* Botão do menu hambúrguer */}
      <button className={styles.hamburger} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Menu dropdown com <li> */}
      {isMenuOpen && (
        <ul className={styles.menuMobile}>
          <li>
            <Link to="/produtopage" onClick={toggleMenu}>
              Produto
            </Link>
          </li>
          {/* Você pode manter a div se quiser agrupar, mas os itens dentro dela ainda são links/componentes */}
          <li className={styles.mobileAuthCart}>
            <AuthStatus />
            <Link
              to="/carrinho"
              className={styles.carrinho}
              onClick={toggleMenu}
            >
              <CartIcon />
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
