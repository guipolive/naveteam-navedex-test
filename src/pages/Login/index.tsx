import React, { useState } from 'react';

import api, {setAccessToken} from '../../services/api'

// Importando o Link para fazermos a navegação
import { Link, Redirect, useHistory } from 'react-router-dom';

// Importando o css
import './styles.css';

// Importando o ícone
import naveLogo from '../../assets/images/icons/naveLogo.svg';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authenticated, setAuthenticated] = useState(false);

    function handleLogin() {
        api.post('/users/login', {
            email: email,
            password: password
        }).then(response => {
            console.log(response);
            setAccessToken(response.data.token);

            setAuthenticated(true);
        }).catch(error => {
            console.log(error, error.response);
            return;
        });
    }

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
                            <input value={email} onChange={e => setEmail(e.target.value)} placeholder="E-mail" type="text" id="email"/>
                        </div>

                        <div className="input-block">
                            <label htmlFor="password">Senha</label>
                            <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha" type="text" id="password"/>
                        </div>
                    </div>

                    <button onClick={handleLogin}>
                            Entrar
                        <Redirect to={authenticated ? '/home' : '/'}>
                        </Redirect>
                    </button>
                </main>
            </div>
        </div>
    )
}

export default Login;