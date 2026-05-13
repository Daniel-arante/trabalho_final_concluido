import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    function fazerLogin() {
        const emailSalvo = localStorage.getItem('email');
        const senhaSalva = localStorage.getItem('senha');

        if (email === emailSalvo && senha === senhaSalva) {
            alert("Login realizado!");

        } else {
            alert("E-mail ou senha incorretos");
        }
    }

    return (
        <div className="container">
            <div className="card">
                <h1>Login</h1>
                <input placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                <br />
                <button onClick={fazerLogin}>Entrar</button>
                
                <p onClick={() => navigate('/')} style={{cursor: 'pointer', color: 'white', marginTop: '15px'}}>
                    Não tem conta? <strong>Cadastrar</strong>
                </p>
            </div>
        </div>
    );
}

export default Login;