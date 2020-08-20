import React, { useState, useEffect  } from 'react';

// Importando o css
import './styles.css';

// Importando o Header
import Header from '../../components/Header';

// Importando o logo da Nave e os ícones
import arrowLeft from '../../assets/images/icons/arrowLeft.svg';
import { Link, RouteComponentProps} from 'react-router-dom';

// Importando a api
import api from '../../services/api';

interface MatchParams {
    id: string;
}

interface AttNaverProps extends RouteComponentProps<MatchParams> {
    teste: string;
}

const AttNaver: React.FC<AttNaverProps>= (props) => {

    const [name, setName] = useState('');
    const [job_role, setJobRole] = useState('');
    const [birthdate, setBirthDate] = useState('');
    const [admission_date, setAdmissionDate] = useState('');
    const [project, setProject] = useState('');
    const [url, setUrl] = useState('');

    useEffect(() => {
        // Create an scoped async function in the hook
        async function buscaNaver() {
            let dados = await api.get(`/navers/${props.match.params.id}`);
            setName(dados.data.name);
            setJobRole(dados.data.job_role);
            setBirthDate(dados.data.birthdate);
            setAdmissionDate(dados.data.admission_date);
            setProject(dados.data.project);
            setUrl(dados.data.url);
            console.log('Data set');
        }
        
        // Executando dessa maneira por conta do typescript
        buscaNaver();
    }, []);

    // Esta função vai ser executada quando o botão "ATT NAVER" for clicado
    function createNaver() {
        api.put(`/navers/${props.match.params.id}`, {
            job_role: job_role,
            admission_date: admission_date,
            birthdate: birthdate,
            project: project,
            name: name,
            url: url
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error, error.response);
        });
        console.log("funcionou");
    }

    return(
        <div id="att-naver-page">
            <Header />

            <main>
                <div className="option-naver container">
                    <div className="option-header">
                        <Link to="/home">
                            <img src={arrowLeft} alt="Voltar"/>
                            <p>Editar Naver</p>
                        </Link>
                    </div>

                    <div className="form">
                        <div className="option-line">
                            <div className="input-block">
                                <label htmlFor="nome">Nome</label>
                                <input value={name} onChange={e => setName(e.target.value)} placeholder="Nome" type="text" id="nome"/>
                            </div>
                            
                            <div className="input-block">
                                <label htmlFor="cargo">Cargo</label>
                                <input value={job_role} onChange={e => setJobRole(e.target.value)} placeholder="Cargo" type="text" id="cargo"/>
                            </div>
                        </div>

                        <div className="option-line">
                            <div className="input-block">
                                <label htmlFor="idade">Idade</label>
                                <input value={birthdate} onChange={e => setBirthDate(e.target.value)} placeholder="Idade" type="text" id="idade"/>
                            </div>
                            
                            <div className="input-block">
                                <label htmlFor="tempo-de-empresa">Tempo de empresa</label>
                                <input value={admission_date} onChange={e => setAdmissionDate(e.target.value)} placeholder="Tempo de empresa" type="text" id="tempo-de-empresa"/>
                            </div>
                        </div>

                        <div className="option-line">
                            <div className="input-block">
                                <label htmlFor="projetos-que-participou">Projetos que participou</label>
                                <input value={project} onChange={e => setProject(e.target.value)} placeholder="Projetos que participou" type="text" id="projetos-que-participou"/>
                            </div>
                            
                            <div className="input-block">
                                <label htmlFor="url-foto-naver">Url da foto do Naver</label>
                                <input value={url} onChange={e => setUrl(e.target.value)} placeholder="Url da foto do Naver" type="text" id="url-foto-naver"/>
                            </div>
                        </div>
                    </div>

                    <button onClick={createNaver}>
                        <Link to="#">
                            Salvar
                        </Link>
                    </button>
                </div>
            </main>
        </div>
    )
}

export default AttNaver;