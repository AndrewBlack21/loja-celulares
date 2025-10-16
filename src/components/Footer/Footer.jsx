import styles from "./Footer.module.css";
import Logo from "/src/assets/Logo.png";
import { FaTwitter, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import React from "react";
import { IoLogOutSharp } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="contato" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.containerlogo}>
            <img src={Logo} alt="logo" className={styles.img} />
            <h3 className={styles.tituloInstituto}>Lojas Iphocell</h3>
            <p className={styles.slogan}>
              Lojas Iphocell - Atendendo você de ponta a ponta. Somos uma loja
              de assistencia tecnica de celulares e vendas de aparelhos
              localizada em Santos, São Paulo. Temos toda a linha de celulares,
              smartphones e eletrônicos disponíveis para pronta entrega.
            </p>
          </div>
          <div className={styles.social}>
            <h4 className={styles.tituloSocial}>Redes Sociais</h4>
          </div>

          <div className={styles.socialicon}>
            <a
              href="https://twitter.com"
              target="_blank"
              className={styles.link}
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              className={styles.link}
            >
              <FaFacebook size={30} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              className={styles.link}
            >
              <FaInstagram size={30} />
            </a>
          </div>
        </div>

        <div className={styles.instituional}>
          <h3 className={styles.title}>Institução</h3>
          <ul>
            <Link to="">Quem somos</Link>
            <Link to="">Nossas Lojas</Link>
            <Link to="">Como Comprar</Link>
            <Link to="">Compra Segura</Link>
            <Link to="">Formas de Pagamento</Link>
            <Link to="">Troca e Devolução</Link>
            <Link to="">Politica de Privacidade</Link>
            <Link to="">Fale Conosco</Link>
          </ul>
        </div>

        <div className={styles.contact}>
          <h3>Contato</h3>
          <p>
            <FaWhatsapp />
            Iphocell - Vendas <br /> (13) 98388-9393
          </p>
          <p>
            <FaEnvelope />
            contato@lojasiphocell.com{" "}
          </p>
          <p>
            Horario de atendimento <br /> 09:00 as 18:00
          </p>
        </div>

        <div className={styles.payments}>
          <h3>Formas de Pagamento</h3>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/349/349221.png"
              alt="Visa"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/196/196578.png"
              alt="Mastercard"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/349/349228.png"
              alt="Amex"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/196/196566.png"
              alt="Elo"
            />
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; Lojas Iphocell - Todos os direitos reservados</p>
      </div>
    </footer>
  );
}
