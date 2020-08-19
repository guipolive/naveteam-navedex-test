import React from 'react';

// Importando o Link para fazermos a navegação
import { Link } from 'react-router-dom';

// Importando o css
import './styles.css';

// Importando o ícone
import naveLogo from '../../assets/images/icons/naveLogo.svg';
import imgTest from '../../assets/images/IMG_9945.png'
import trashCan from '../../assets/images/icons/trashCan.svg';
import pencil from '../../assets/images/icons/pencil.svg';

function Home() {
    return(
        <div id="home-page" className="container">
            <header className="page-header">
                <img src={naveLogo} alt="Nave"/>

                <Link to="/">
                    Sair
                </Link>
            </header>

            <main>
                <div className="mini-header">
                        <p>Navers</p>

                        <button>
                            <Link to="/login">
                                Adicionar Naver
                            </Link>
                        </button>
                </div>

                <div className="navers-list">
                    <div className="naver">
                        <img src={imgTest} alt="Juliano"/>
                        <p className="naver-name">Juliano Reis</p>
                        <p className="naver-description">Frontend Developer</p>

                        <div className="naver-options">
                            <img src={trashCan} alt="Excluir"/>
                            <img src={pencil} alt="Editar"/>
                        </div>
                    </div>

                    <div className="naver">
                        <img src={imgTest} alt="Juliano"/>
                        <p className="naver-name">Juliano Reis</p>
                        <p className="naver-description">Frontend Developer</p>

                        <div className="naver-options">
                            <img src={trashCan} alt="Excluir"/>
                            <img src={pencil} alt="Editar"/>
                        </div>
                    </div>

                    <div className="naver">
                        <img src={imgTest} alt="Juliano"/>
                        <p className="naver-name">Juliano Reis</p>
                        <p className="naver-description">Frontend Developer</p>

                        <div className="naver-options">
                            <img src={trashCan} alt="Excluir"/>
                            <img src={pencil} alt="Editar"/>
                        </div>
                    </div>

                    <div className="naver">
                        <img src={imgTest} alt="Juliano"/>
                        <p className="naver-name">Juliano Reis</p>
                        <p className="naver-description">Frontend Developer</p>

                        <div className="naver-options">
                            <img src={trashCan} alt="Excluir"/>
                            <img src={pencil} alt="Editar"/>
                        </div>
                    </div>

                    <div className="naver">
                        <img src={imgTest} alt="Juliano"/>
                        <p className="naver-name">Juliano Reis</p>
                        <p className="naver-description">Frontend Developer</p>

                        <div className="naver-options">
                            <img src={trashCan} alt="Excluir"/>
                            <img src={pencil} alt="Editar"/>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home;