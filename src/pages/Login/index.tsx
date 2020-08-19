import React from 'react';

// Importando o ícone
import naveLogo from '../../assets/images/icons/naveLogo.svg';

function Login() {
    return(
        <div id="login-page">
            <div className="square-content">
                <div className="square-header">
                    <img src={naveLogo} alt="Nave"/>
                </div>

                <div className="form">
                    <div className="input-block">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;