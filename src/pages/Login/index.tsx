import React, { useEffect, useState } from 'react';

import api, {setAccessToken} from '../../services/api'

// Importando o Link para fazermos a navegação
import { Link, Redirect, useHistory } from 'react-router-dom';

import {useCookies} from 'react-cookie';

// Importando Components
import Modal from '../../components/Modal'

// Importando o css
import './styles.css';

// Importando o ícone
import naveLogo from '../../assets/images/icons/naveLogo.svg';

function Login() {

    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    
    
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() =>  {
        setCookie('token', null);
    }, [])

    function handleLogin() {
        api.post('/users/login', {
            email: email,
            password: password
        }).then(response => {
            setAccessToken(response.data.token);
            setAuthenticated(true);
        }).catch(error => {
            console.log(error, error.response);
            setAccessToken('');
            setIsErrorModalOpen(true);
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
                            <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha" type="password" id="password"/>
                        </div>
                    </div>

                    <button onClick={handleLogin}>
                            Entrar
                        <Redirect to={authenticated ? '/home' : '/'} />
                        
                    </button>
                </main>
            </div>
            {isErrorModalOpen ? (
                <Modal 
                    title="Erro"
                    body="Usuário não cadastrado no sistema." 
                    onClose={() => {
                        setIsErrorModalOpen(false);
                    }}
                />
            ) : null}
        </div>
    )
}

export default Login;