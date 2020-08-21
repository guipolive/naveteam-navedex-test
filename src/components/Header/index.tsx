import React from 'react';

// Importando o Link para fazermos a navegação
import { Link } from 'react-router-dom';

// Importando o css
import './styles.css';

// Importando o logo da Nave
import naveLogo from '../../assets/images/icons/naveLogo.svg';

function Header() {
    return(
        <header className="page-header">
            <Link to="/home">
                <img src={naveLogo} alt="Nave"/>
            </Link>
            

            <Link to="/">
                Sair
            </Link>
        </header>
    )
}

export default Header;