import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';

// Importando o Link para fazermos a navegação
import { Link } from 'react-router-dom';

// Importando o css
import './styles.css';

// Importando o logo da Nave
import naveLogo from '../../assets/images/icons/naveLogo.svg';

function Header() {

    const cookies = new Cookies();

    function handleExit() {
        cookies.set('token', '');
    }

    const [theme, setTheme] = useState(0);

    useEffect(() => {
        console.log('Tema alterado');

        if(theme % 2 > 0){
            document.documentElement.style.setProperty("--color-background", '#FFFF');    
            document.documentElement.style.setProperty("--color-main-text", "#212121");
            document.documentElement.style.setProperty("--filter-option", "0");
        }
        else {
            document.documentElement.style.setProperty("--color-background", '#212121');    
            document.documentElement.style.setProperty("--color-main-text", "#FFFF");
            document.documentElement.style.setProperty("--filter-option", "10");
        }
            

    }, [theme]);

    return(
        <header className="page-header">
            <Link to="/home">
                <img src={naveLogo} alt="Nave"/>
            </Link>
            
            <p onClick={() => setTheme(theme + 1)} >Mudar tema</p>

            <Link onClick={() => handleExit()} to="/">
                Sair
            </Link>

        </header>
    )
}

export default Header;