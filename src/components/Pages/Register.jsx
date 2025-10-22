import { useState } from "react";
import { supabase } from "../../supabaseCliente";
import { useNavigate } from "react-router-dom";
import styles from "./Auth.module.css"; // Importe o CSS unificado
import logo from "/src/assets/logoIntro.png";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    telefone: "",
    marketing: false,
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (form.senha !== form.confirmarSenha) {
      setError("As senhas não coincidem.");
      return;
    }

    try {
      setLoading(true);
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: form.email,
        password: form.senha,
        options: {
          data: {
            nome: form.nome,
            telefone: form.telefone,
            marketing_opt_in: form.marketing,
          },
        },
      });

      if (signUpError) throw signUpError;

      alert(
        "✅ Conta criada com sucesso! Verifique seu e-mail para confirmação."
      );
      navigate("/login");
    } catch (err) {
      console.error(err);
      setError(err.message || "Erro ao criar conta");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <img src={logo} alt="" className={styles.logo} />
        <h2 className={styles.title}>Crie sua Conta</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            className={styles.input}
            type="text"
            name="nome"
            placeholder="Nome completo"
            required
            onChange={handleChange}
          />
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Seu melhor e-mail"
            required
            onChange={handleChange}
          />
          <input
            className={styles.input}
            type="password"
            name="senha"
            placeholder="Crie uma senha"
            required
            onChange={handleChange}
          />
          <input
            className={styles.input}
            type="password"
            name="confirmarSenha"
            placeholder="Confirme sua senha"
            required
            onChange={handleChange}
          />
          <input
            className={styles.input}
            type="text"
            name="telefone"
            placeholder="Telefone (com DDD)"
            required
            onChange={handleChange}
          />

          <label className={styles.checkboxLabel}>
            <input type="checkbox" name="marketing" onChange={handleChange} />
            Sim, aceito receber novidades e promoções.
          </label>

          {error && <p className={styles.error}>{error}</p>}

          <button type="submit" className={styles.button} disabled={loading}>
            {loading ? "Criando conta..." : "Cadastrar"}
          </button>
        </form>

        <p className={styles.switchLink}>
          Já tem conta? <a href="/login">Faça Login</a>
        </p>
      </div>
    </div>
  );
}
