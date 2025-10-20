import { useState } from "react";
import { supabase } from "../../supabaseCliente";
import { useNavigate, useLocation } from "react-router-dom";

import styles from "./Login.module.css";

export default function Login(){
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
    setError(""); // Limpa o erro anterior
    try {
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password: senha,
        });
        if (error) throw error;

        const redirectTo = location.state?.from || "/carrinho";
        navigate(redirectTo);
    } catch (err) {
        // Verifica se o erro é de e-mail não confirmado
        if (err.message.includes("Email not confirmed")) {
            setError("Por favor, confirme seu e-mail antes de fazer login.");
        } else {
            setError("Email ou senha incorretos.");
        }
    }
        };

        return(
            <div className={styles.container}>
                <h2 className={styles.title}>Login</h2>
                <form onSubmit={handleLogin}>
                    <input type="email" placeholder="EMail" required onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Senha" required onChange={(e) => setSenha(e.target.value)} />
                    {error && <p style={{color: "red"}}>{error}</p>}
                    <button type="submit">Entrar</button>

                </form>

                <p>Ainda nao tem? <a href="/register">Cadastre-se aqui</a></p>
            </div>
        )
    }
 