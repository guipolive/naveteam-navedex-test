import React, { useEffect, useState } from 'react';

// Importando o css
import './styles.css';

// Importando o logo da Nave e os ícones
import arrowLeft from '../../assets/images/icons/arrowLeft.svg';
import { Link } from 'react-router-dom';

import moment from 'moment';

interface Naver {
    id: string;
    name: string;
    admission_date: string;
    job_role: string;
    user_id: string;
    project: string;
    birthdate: string;
    url: string;
}

interface HandleNaverProps {
    
    // Props obrigatórias
    title: string;
    naver: Naver;
    sendNaver(naver: Naver): void;
}

const HandleNaver: React.FC<HandleNaverProps> = (props) => {

    const [name, setName] = useState(props.naver.name);
    const [job_role, setJobRole] = useState(props.naver.job_role);
    const [birthdate, setBirthDate] = useState(props.naver.birthdate);
    const [admission_date, setAdmissionDate] = useState(props.naver.admission_date);
    const [project, setProject] = useState(props.naver.project);
    const [url, setUrl] = useState(props.naver.url);

    useEffect(() => {
        setName(props.naver.name)
        setJobRole(props.naver.job_role)
        setBirthDate(props.naver.birthdate)
        setAdmissionDate(props.naver.admission_date)
        setProject(props.naver.project)
        setUrl(props.naver.url)
    }, [props.naver])

    function handleClick() {
            props.naver.admission_date = admission_date;
            props.naver.birthdate = birthdate;
            props.naver.name = name;
            props.naver.job_role = job_role;
            props.naver.project = project;
            props.naver.url = url;
 
            props.sendNaver(props.naver);
    }

    return(
        <div id="add-naver-page">
            <main>
                <div className="option-naver-container">
                    <div className="option-header">
                        <Link to="/home">
                            <img src={arrowLeft} alt="Voltar"/>
                            <p>{props.title}</p>
                        </Link>
                    </div>

                    <div className="form">
                        <div className="option-line">
                            <div className="input-block">
                                <label htmlFor="nome">Nome</label>
                                <input 
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    placeholder="Nome"
                                    type="text"
                                    id="nome"
                                />
                            </div>
                            
                            <div className="input-block">
                                <label htmlFor="cargo">Cargo</label>
                                <input 
                                    value={job_role}
                                    onChange={e => setJobRole(e.target.value)}
                                    placeholder="Cargo"
                                    type="text"
                                    id="cargo"
                                />
                            </div>
                        </div>

                        <div className="option-line">
                            <div className="input-block">
                                <label htmlFor="idade">Data de nascimento</label>
                                <input 
                                    type="date"
                                    value={moment(birthdate, "DD/MM/YYYY").format('YYYY-MM-DD')}
                                    onChange={e => setBirthDate(moment(e.target.value, 'YYYY-MM-DD').format('DD/MM/YYYY'))}
                                    id="idade"
                                    placeholder="DD/MM/AAAA"
                                    maxLength={10}
                                />
                            </div>
                            
                            <div className="input-block">
                                <label htmlFor="tempo-de-empresa">Data de admissão</label>
                                <input 
                                    type="date"
                                    value={moment(admission_date, "DD/MM/YYYY").format('YYYY-MM-DD')}
                                    onChange={e => setAdmissionDate(moment(e.target.value, 'YYYY-MM-DD').format('DD/MM/YYYY'))}
                                    id="tempo-de-empresa"
                                    placeholder="DD/MM/AAAA"
                                    maxLength={10}
                                />
                            </div>
                        </div>

                        <div className="option-line">
                            <div className="input-block">
                                <label htmlFor="projetos-que-participou">Projetos que participou</label>
                                <input 
                                    value={project}
                                    onChange={e => setProject(e.target.value)}
                                    type="text"
                                    id="projetos-que-participou"
                                    placeholder="Projetos que participou"
                                />
                            </div>
                            
                            <div className="input-block">
                                <label htmlFor="url-foto-naver">Url da foto do Naver</label>
                                <input 
                                    value={url}
                                    onChange={e => setUrl(e.target.value)}
                                    type="text"
                                    id="url-foto-naver"
                                    placeholder="Url da foto do Naver"
                                />
                            </div>

                            <button 
                                onClick={e => handleClick()}
                            >
                                <Link to="#">
                                    Salvar
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default HandleNaver;