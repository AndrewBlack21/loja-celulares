import { useState } from "react";
import { supabase } from "../../supabaseCliente";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";

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

    // 1️⃣ Cria o usuário de autenticação e passa os dados extras em 'options'
    const { data, error: signUpError } = await supabase.auth.signUp({
      email: form.email,
      password: form.senha,
      options: {
        data: {
          nome: form.nome, // O gatilho vai usar isso
          telefone: form.telefone,
          marketing_opt_in: form.marketing
        }
      }
    });

    if (signUpError) throw signUpError;
    
    // 2️⃣ A inserção na tabela "usuarios" foi REMOVIDA DAQUI
    // O gatilho no banco de dados faz isso automaticamente agora.

    alert("✅ Conta criada com sucesso! Verifique seu e-mail para confirmação.");
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
      <h2 className={styles.title}>Crie sua Conta</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome completo"
          required
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
        />
        <input
          type="password"
          name="senha"
          placeholder="Senha"
          required
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmarSenha"
          placeholder="Confirmar senha"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="telefone"
          placeholder="Telefone"
          required
          onChange={handleChange}
        />

        <label>
          <input
            type="checkbox"
            name="marketing"
            onChange={handleChange}
          />
          Sim, aceito receber novidades, promoções e ofertas exclusivas por Email e WhatsApp
        </label>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Criando conta..." : "Cadastrar"}
        </button>
      </form>

      <p>
        Já tem conta? <a href="/login">Faça Login</a>
      </p>
    </div>
  );
}