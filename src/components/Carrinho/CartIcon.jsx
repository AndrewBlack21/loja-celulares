import { useEffect, useState } from "react";
import styles from "./CartIcon.module.css";
import { useCarrinho } from "./CarrinhoContext";
import { FaShoppingCart } from "react-icons/fa";

export default function CartIcon() {
  const { carrinho } = useCarrinho();
  const [animate, setAnimate] = useState(false);

  // calcula quantidade de itens
  const count = carrinho.reduce((total, item) => total + item.quantidade, 0);

  useEffect(() => {
    if (count > 0) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 500);
      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <div className={styles.cartContainer}>
      <FaShoppingCart
        className={`${styles.cartIcon} ${animate ? styles.bump : ""}`}
      />
      <span className={`${styles.count} ${animate ? styles.pop : ""}`}>
        ({count})
      </span>
    </div>
  );
}
