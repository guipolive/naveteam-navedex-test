import React, { useState, useEffect  } from 'react';

import moment from 'moment';
import 'moment/locale/pt-br';

// Importando o css
import './styles.css';

// Importando o Header
import Header from '../../components/Header';

// Importando o logo da Nave e os ícones
import arrowLeft from '../../assets/images/icons/arrowLeft.svg';
import { Link, RouteComponentProps} from 'react-router-dom';

// Importando a api
import api from '../../services/api';
import Modal from '../../components/Modal';

interface MatchParams {
    id: string;
}

interface AttNaverProps extends RouteComponentProps<MatchParams> {
    teste: string;
}

const AttNaver: React.FC<AttNaverProps>= (props) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [job_role, setJobRole] = useState('');
    const [birthdate, setBirthDate] = useState('');
    const [newBirthDate, setNewBirthDay] = useState('');
    const [newAdmissionDate, setNewAdmissionDate] = useState('');
    const [admission_date, setAdmissionDate] = useState('');
    const [project, setProject] = useState('');
    const [url, setUrl] = useState('');

    // console.log(moment('2020-08-05T00:00:00.000Z', ''));
    // const test = moment('23/08/2013', 'dd/mm/yyyy').utc();
    // const test = moment.parseZone('26/11/2015', 'dd/mm/yyyy').local().format();
    // console.log(test);
    console.log(moment.parseZone('27/11/2015', 'DD/MM/YYYY').local().format()); 

    useEffect(() => {
        // Create an scoped async function in the hook
        async function buscaNaver() {
            let dados = await api.get(`/navers/${props.match.params.id}`);
            setName(dados.data.name);
            setJobRole(dados.data.job_role);
            setBirthDate(dados.data.birthdate);
            setNewBirthDay(moment(dados.data.birthdate).format('DD/MM/YYYY'));
            setAdmissionDate(dados.data.admission_date);
            setNewAdmissionDate(moment(dados.data.admission_date).format('DD/MM/YYYY'));
            setProject(dados.data.project);
            setUrl(dados.data.url);
        }
        
        // Executando dessa maneira por conta do typescript
        buscaNaver();
    }, []);

    // Esta função vai ser executada quando o botão "ATT NAVER" for clicado
    function updateNaver() {
        api.put(`/navers/${props.match.params.id}`, {
            job_role: job_role,
            admission_date: newAdmissionDate,
            birthdate: newBirthDate,
            // admission_date: admission_date,
            // admission_date: moment.parseZone(newAdmissionDate, 'DD/MM/YYYY').local().format(),
            // birthdate: birthdate,
            // birthdate: moment.parseZone(newBirthDate, 'DD/MM/YYYY').local().format(),
            project: project,
            name: name,
            url: url
          })
          .then(function (response) {
            console.log(response);
            handleUpdate();
          })
          .catch(function (error) {
            console.log(error, error.response);
        });
    }

    function handleUpdate() {
        setIsModalOpen(true);

        // setName('');
        // setJobRole('');
        // setBirthDate('');
        // setAdmissionDate('');
        // setProject('');
        // setUrl('');
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
                                <label htmlFor="idade">Data de nascimento</label>
                                <input value={newBirthDate} onChange={e => setNewBirthDay(e.target.value)} placeholder="DD/MM/YYYY" type="text" id="idade"/>
                            </div>
                            
                            <div className="input-block">
                                <label htmlFor="tempo-de-empresa">Data de entrada na empresa</label>
                                <input value={newAdmissionDate} onChange={e => setNewAdmissionDate(e.target.value)} placeholder="DD/MM/YYYY" type="text" id="tempo-de-empresa"/>
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

                    <button onClick={updateNaver}>
                        <Link to="#">
                            Salvar
                        </Link>
                    </button>

                    {isModalOpen ? 
                        <Modal 
                            onClose={() => {
                                setIsModalOpen(false);
                                props.history.push('/home');
                        }} title="Naver atualizado" body="Naver atualizado com sucesso!" /> 
                        : 
                        null
                    }
                </div>
            </main>
        </div>
    )
}

export default AttNaver;