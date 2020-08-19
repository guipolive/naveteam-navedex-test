import React from 'react';

// Importando o css
import './styles.css';

// Importando o Header
import Header from '../../components/Header';

// Importando o logo da Nave e os ícones
import naveLogo from '../../assets/images/icons/naveLogo.svg';
import arrowLeft from '../../assets/images/icons/arrowLeft.svg';
import { Link } from 'react-router-dom';

function AddNaver() {
    return(
        <div id="add-naver-page">
            <Header />

            <main>
                <div className="option-naver">
                    <div className="option-header">
                        <Link to="#">
                            <img src={arrowLeft} alt="Voltar"/>
                            <p>Adicionar Naver</p>
                        </Link>
                    </div>

                    <div className="form">
                        <div className="option-line">
                            <div className="input-block">
                                <label htmlFor="nome">Nome</label>
                                <input placeholder="Nome" type="text" id="nome"/>
                            </div>
                            
                            <div className="input-block">
                                <label htmlFor="cargo">Cargo</label>
                                <input placeholder="Cargo" type="text" id="cargo"/>
                            </div>
                        </div>

                        <div className="option-line">
                            <div className="input-block">
                                <label htmlFor="idade">Idade</label>
                                <input placeholder="Idade" type="text" id="idade"/>
                            </div>
                            
                            <div className="input-block">
                                <label htmlFor="tempo-de-empresa">Tempo de empresa</label>
                                <input placeholder="Tempo de empresa" type="text" id="tempo-de-empresa"/>
                            </div>
                        </div>

                        <div className="option-line">
                            <div className="input-block">
                                <label htmlFor="projetos-que-participou">Projetos que participou</label>
                                <input placeholder="Projetos que participou" type="text" id="projetos-que-participou"/>
                            </div>
                            
                            <div className="input-block">
                                <label htmlFor="url-foto-naver">Url da foto do Naver</label>
                                <input placeholder="Url da foto do Naver" type="text" id="url-foto-naver"/>
                            </div>
                        </div>
                    </div>

                    <button>
                        <Link to="#">
                            Salvar
                        </Link>
                    </button>
                </div>
            </main>
        </div>
    )
}

export default AddNaver;