import React from 'react';

// Importando o css
import './styles.css';

// Importando o ícone
import naveLogo from '../../assets/images/icons/naveLogo.svg';

function Login() {
    return(
        <div id="login-page" className="container">
            <div className="square-content">
                <main>
                    <div className="square-header">
                        <img src={naveLogo} alt="Nave"/>
                    </div>

                    <div className="form">
                        <div className="input-block">
                            <label htmlFor="email">E-mail</label>
                            <input placeholder="E-mail" type="text" id="email"/>
                        </div>

                        <div className="input-block">
                            <label htmlFor="password">Senha</label>
                            <input placeholder="Senha" type="text" id="password"/>
                        </div>
                    </div>

                    <button>
                        Entrar
                    </button>
                </main>
            </div>
        </div>
    )
}

export default Login;