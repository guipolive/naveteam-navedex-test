import React, { useState } from 'react';

// Importando o css
import './styles.css';

// Importando os components
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import HandleNaver from '../../components/HandleNaver';

// Importando o logo da Nave e os ícones
import { Link, RouteComponentProps } from 'react-router-dom';

// Importando a api
import api from '../../services/api';

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

const AddNaver: React.FC<RouteComponentProps> = (props) => {

    const theNaver = {
        id: '',
        name: '',
        admission_date: '',
        job_role: '',
        user_id: '',
        project: '',
        birthdate: '',
        url: ''
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    // Esta função vai ser executada quando o botão "ADD NAVER" for clicado
    function createNaver(e: Naver) {
        api.post('/navers', {
            job_role: e.job_role,
            admission_date: e.admission_date,
            birthdate: e.birthdate,
            project: e.project,
            name: e.name,
            url: e.url
        })
        .then(function (response) {
            setIsModalOpen(true); 
        })
        .catch(function (error) {
            console.log(error, error.response);
        });
    }

    return(
        <div id="add-naver-page">
            <Header />

            <main>
                <HandleNaver 
                    naver={theNaver}
                    title='Adicionar naver'
                    sendNaver={e => createNaver(e)}
                />
            </main>

            {isModalOpen ? 
                <Modal 
                    onClose={() => {
                        setIsModalOpen(false);
                        props.history.push('/home');
                }} title="Naver criado" body="Naver criado com sucesso!" /> 
                : 
                null
            }
        </div>
    )
}

export default AddNaver;