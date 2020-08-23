import React, { useState, useEffect  } from 'react';

import moment from 'moment';
import 'moment/locale/pt-br';

// Importando o css
import './styles.css';

// Importando os componentes
import HandleNaver from '../../components/HandleNaver';
import Modal from '../../components/Modal';

// Importando o Header
import Header from '../../components/Header';

// Importando o logo da Nave e os ícones
import { RouteComponentProps} from 'react-router-dom';

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

interface MatchParams {
    id: string;
}


interface AttNaverProps extends RouteComponentProps<MatchParams> {
    teste: string;
}

const AttNaver: React.FC<AttNaverProps>= (props) => {
    
    const [naver, setNaver] = useState<Naver>({
        id: '',
        name: '',
        admission_date: '',
        job_role: '',
        user_id: '',
        project: '',
        birthdate: '',
        url: ''
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        // Async function dentro do hoook
        async function buscaNaver() {

            api.get(`/navers/${props.match.params.id}`)
                .then(response => {
                    setNaver({
                        id: response.data.id,
                        name: response.data.name,
                        admission_date: moment(response.data.admission_date).format('DD/MM/YYYY'),
                        job_role: response.data.job_role,
                        user_id: response.data.user_id,
                        project: response.data.project,
                        birthdate: moment(response.data.birthdate).format('DD/MM/YYYY'),
                        url: response.data.url
                    })
                })
                .catch(function (error) {
                    console.log(error, error.response);
                }
            );
        }
        
        // Executando dessa maneira por conta do typescript
        buscaNaver();

        
        
    }, []);

    // Esta função vai ser executada quando o botão "ATT NAVER" for clicado
    function updateNaver(e: Naver) {
        api.put(`/navers/${props.match.params.id}`, {
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
        <div id="att-naver-page">
            <Header />

            <main>
                <HandleNaver 
                    naver={naver}
                    title='Atualizar naver'
                    sendNaver={e => updateNaver(e)}
                />
            </main>

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

    )
}

export default AttNaver;