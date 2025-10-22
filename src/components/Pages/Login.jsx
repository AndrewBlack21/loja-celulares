import { useState } from "react";
import { supabase } from "../../supabaseCliente";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Auth.module.css"; // Mude para o novo arquivo CSS

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Adicionado para desabilitar botão

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password: senha,
      });
      if (error) throw error;

      const redirectTo = location.state?.from || "/carrinho";
      navigate(redirectTo);
    } catch (err) {
      if (err.message.includes("Email not confirmed")) {
        setError("Por favor, confirme seu e-mail antes de fazer login.");
      } else {
        setError("Email ou senha incorretos.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>Login</h2>
        <form onSubmit={handleLogin} className={styles.form}>
          <input
            className={styles.input}
            type="email"
            placeholder="Seu e-mail"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={styles.input}
            type="password"
            placeholder="Sua senha"
            required
            onChange={(e) => setSenha(e.target.value)}
          />
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit" className={styles.button} disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>

        <p className={styles.switchLink}>
          Ainda não tem conta? <a href="/register">Cadastre-se aqui</a>
        </p>
      </div>
    </div>
  );
}
