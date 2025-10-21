import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import styles from "./AuthStatus.module.css";

import { FaSignInAlt, FaUserCircle, FaSignOutAlt } from "react-icons/fa";

export default function AuthStatus() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate("/");
  };
  if (!user) {
    return (
      <Link to="/Login" className={`${styles.authContainer} ${styles.pulse}`}>
        <FaSignInAlt className={styles.icon} />
        <span>Login</span>
      </Link>
    );
  }

  return (
    <div className={styles.authContainer}>
      <FaUserCircle className={styles.icon} />
      {/* Opcional: mostrar o email do usuário */}
      {/* <span className={styles.email}>{user.email}</span> */}
      <button onClick={handleLogout} className={styles.logoutButton}>
        <FaSignOutAlt className={styles.icon} />
        <span>Sair</span>
      </button>
    </div>
  );
}
