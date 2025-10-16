import React from "react";
import styles from "./Servico.module.css";

// Import Icones
import { FaCamera } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";
import { FaBatteryQuarter } from "react-icons/fa";
import { FaCameraRetro } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaChargingStation } from "react-icons/fa";

export default function Servico() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.service}>
          <div className={styles.box}>
            <div className={styles.icon}>
              {/* <img src={conserto} alt="" /> */}
              <FaCameraRetro />
            </div>
            <h3 className={styles.titulo}>Reparo de Câmera</h3>
            <p className={styles.subtitle}>
              Conserto de câmera traseira ou frontal com calibração profissional
            </p>
            <div className={styles.info}>
              <ul>
                <li>Iphone</li>
                <li>Samsung</li>
                <li>Outros</li>
                <button>faça o orçamento</button>
              </ul>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className={styles.service}>
          <div className={styles.box}>
            <div className={styles.icon}>
              {/* <img src={conserto} alt="" /> */}
              <FaBatteryQuarter />
            </div>
            <h3 className={styles.titulo}>Troca de Bateria</h3>
            <p className={styles.subtitle}>
              Bateria nova com garantia de 6 meses e performance otimizada
            </p>
            <div className={styles.info}>
              <ul>
                <li>Iphone</li>
                <li>Samsung</li>
                <li>Outros</li>
                <button>faça o orçamento</button>
              </ul>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className={styles.service}>
          <div className={styles.box}>
            <div className={styles.icon}>
              {/* <img src={conserto} alt="" /> */}
              <FaUnlock />
            </div>
            <h3 className={styles.titulo}>Desbloqueio</h3>
            <p className={styles.subtitle}>
              Remoção de bloqueio de operadora ou senha esquecida
            </p>
            <div className={styles.info}>
              <ul>
                <li>Iphone</li>
                <li>Samsung</li>
                <li>Outros</li>
                <button>faça o orçamento</button>
              </ul>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className={styles.service}>
          <div className={styles.box}>
            <div className={styles.icon}>
              {/* <img src={conserto} alt="" /> */}
              <FaMobileAlt />
            </div>
            <h3 className={styles.titulo}>Troca de Bateria</h3>
            <p className={styles.subtitle}>
              Bateria nova com garantia de 6 meses e performance otimizada
            </p>
            <div className={styles.info}>
              <ul>
                <li>Iphone</li>
                <li>Samsung</li>
                <li>Outros</li>
                <button>faça o orçamento</button>
              </ul>
            </div>
          </div>
        </div>
        {/* Card 5 */}
        <div className={styles.service}>
          <div className={styles.box}>
            <div className={styles.icon}>
              {/* <img src={conserto} alt="" /> */}
              <FaSearch />
            </div>
            <h3 className={styles.titulo}>Diagnóstico Completo</h3>
            <p className={styles.subtitle}>
              Análise completa do dispositivo e relatório de problemas
            </p>
            <div className={styles.info}>
              <ul>
                <li>Iphone</li>
                <li>Samsung</li>
                <li>Outros</li>
                <button>faça o orçamento</button>
              </ul>
            </div>
          </div>
        </div>
        {/* Card 6 */}
        <div className={styles.service}>
          <div className={styles.box}>
            <div className={styles.icon}>
              {/* <img src={conserto} alt="" /> */}
              <FaChargingStation />
            </div>
            <h3 className={styles.titulo}>Troca de Tela</h3>
            <p className={styles.subtitle}>
              Substituição de tela quebrada ou danificada com peças originais e
              com garantia
            </p>
            <div className={styles.info}>
              <ul>
                <li>Iphone</li>
                <li>Samsung</li>
                <li>Outros</li>
                <button>faça o orçamento</button>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
