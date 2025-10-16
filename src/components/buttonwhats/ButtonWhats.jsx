import styles from "./ButtonWhats.module.css";

export default function ButtonWhats(){
return(
    <>
    <div className={styles.container}>
        <div className={styles.buttonwhats}>
            <a href="">
            <img src="./src/assets/icons8-whatsapp.gif" alt="" />
            </a>
        </div>
    </div>
    </>
)
}