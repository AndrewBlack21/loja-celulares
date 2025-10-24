import styles from "./ButtonWhats.module.css";
import whatsapp from "/src/assets/icons8-whatsapp.gif";

const img = whatsapp;

export default function ButtonWhats() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.buttonwhats}>
          <a href="">
            <img src={img} alt="" />
          </a>
        </div>
      </div>
    </>
  );
}
