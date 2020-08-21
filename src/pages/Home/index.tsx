import React, { useEffect, useState } from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';

// Importando o Link para fazermos a navegação
import { Link } from 'react-router-dom';

// Importando components
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import ModalShowNaver from '../../components/ModalShowNaver';

// Importando o css
import './styles.css';

// Importando o ícone
import trashCan from '../../assets/images/icons/trashCan.svg';
import pencil from '../../assets/images/icons/pencil.svg';

// Importando nossa api
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

const Home = () => {

    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
    const [isNaverModalOpen, setIsNaverModalOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [excludingNaver, setExcludingNaver] = useState('');

    const [updatingNaver, setUpdatingNaver] = useState<Naver>({id: '',
            name: '',
            admission_date: '',
            job_role: '',
            user_id: '',
            project: '',
            birthdate: '',
            url: ''
    });

    const [navers, setNavers] = useState<Naver[]>([]); // declarando o estado navers

    // é uma função que pode ser executada várias vezes se necessário
    useEffect(() => {
        api.get('/navers').then(response => {
            setNavers(response.data); // setando os navers
        })
    }, [isModalOpen])

    function deleteNaver(id: string) {
        api.delete(`/navers/${id}`)
            .then(function (response) {
                console.log(response);
                setIsConfirmModalOpen(false);
                setIsNaverModalOpen(false);
                setIsModalOpen(true);
                // procurar e remover o 'i' de navers que possuir o id do removido,
                // pois ele atualmente está sendo removido do banco mas não do array
            })
            .catch(function (error) {
                console.log(error, error.response);
        });
    }

    function handleDeleteNaver(id: string) {
        setExcludingNaver(id);
        setIsConfirmModalOpen(true);
    }

    function handleShowNaver(o: Naver) {
        setUpdatingNaver(o);
        setIsNaverModalOpen(true);

        // const data = moment(o.birthdate).locale('pt-br');

        // console.log(data.fromNow(true));
    }

    return(
        <div id="home-page">
            <Header />
            
            <div className="mini-header">
                    <p>Navers</p>

                    <button>
                        <Link to="/add-naver">
                            Adicionar Naver
                        </Link>
                    </button>
            </div>

            <div className="navers-list">
                {/* Percorrendo todos os navers do usuário */}
                {navers.map(naver => (
                    <div className="naver" key={naver.id}>
                        <img onClick={() => handleShowNaver(naver)} src={naver.url} alt={naver.name}/>
                        <p className="naver-name">{naver.name}</p>
                        <p className="naver-description">{naver.job_role}</p>

                        <div className="naver-options">
                            <img onClick={e => handleDeleteNaver(naver.id)} src={trashCan} alt="Excluir"/>
                            <Link to={{
                                pathname: `/att-naver/${naver.id}`,
                            }}>
                                <img src={pencil} alt="Editar"/>
                            </Link>
                        </div>

                        
                    </div>
                ))}
                {isConfirmModalOpen ? (
                    <Modal 
                        onClose={() => {
                            setIsConfirmModalOpen(false);
                            setExcludingNaver(''); /* Zerando excluding Naver */
                        }} title="Excluir Naver" body="Tem certeza que deseja excluir este Naver?"
                    >
                        <div className="confirm-exclusion-buttons">    
                            <button 
                                onClick={
                                    () => {
                                        setIsConfirmModalOpen(false);
                                        setExcludingNaver(''); /* Zerando excluding Naver */
                                    }
                                } className="button-cancel" >
                                Cancelar
                            </button>
                            <button onClick={() => deleteNaver(excludingNaver)} className="button-confirm" >
                                Excluir
                            </button>
                        </div>

                    </Modal>)
                : null}

                {isModalOpen ? (
                    <Modal
                        onClose={() => {
                            setIsModalOpen(false);
                            setExcludingNaver(''); /* Zerando excluding Naver */
                        }} title="Naver excluído" body="Naver excluído com sucesso"    
                    >

                    </Modal>
                ) : null}

                {isNaverModalOpen ? (
                    <ModalShowNaver
                        onClose={() => {
                            setIsNaverModalOpen(false);
                        }} 
                        title={updatingNaver.name}
                        birthdate={moment(updatingNaver.birthdate).locale('pt-br').fromNow(true)} 
                        admission_date={moment(updatingNaver.admission_date).locale('pt-br').fromNow(true)}
                        project={updatingNaver.project}
                        job_role={updatingNaver.job_role}
                        url={updatingNaver.url}
                    >
                        <div className="modal-show-naver-options">
                            <img onClick={e => handleDeleteNaver(updatingNaver.id)} src={trashCan} alt="Excluir"/>
                            {<Link to={{
                                pathname: `/att-naver/${updatingNaver.id}`,
                            }}>
                                <img src={pencil} alt="Editar"/>
                            </Link>}
                        </div>
                    </ModalShowNaver>
                ) : null}
            </div>
        </div>
    )
}

export default Home;