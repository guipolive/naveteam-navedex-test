import React, { useEffect, useState } from 'react';

// Importando o Link para fazermos a navegação
import { Link } from 'react-router-dom';

// Importando components
import Header from '../../components/Header';
import Modal from '../../components/Modal';

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

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [navers, setNavers] = useState<Naver[]>([]); // declarando o estado navers

    // é uma função que pode ser executada várias vezes se necessário
    useEffect(() => {
        api.get('/navers').then(response => {
            setNavers(response.data); // setando os navers
        })
    }, [])

    function deleteNaver(id: string) {
        api.delete(`/navers/${id}`)
            .then(function (response) {
                console.log(response);
                handleDeleteNaver();
                // procurar e remover o 'i' de navers que possuir o id do removido,
                // pois ele atualmente está sendo removido do banco mas não do array
            })
            .catch(function (error) {
                console.log(error, error.response);
            });
    }

    function handleDeleteNaver() {
        setIsModalOpen(true);
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
                        <img src={naver.url} alt={naver.name}/>
                        <p className="naver-name">{naver.name}</p>
                        <p className="naver-description">{naver.job_role}</p>

                        <div className="naver-options">
                            <img onClick={e => deleteNaver(naver.id)} src={trashCan} alt="Excluir"/>
                            <Link to={{
                                pathname: `/att-naver/${naver.id}`,
                            }}>
                                <img src={pencil} alt="Editar"/>
                            </Link>
                        </div>

                        {isModalOpen ? 
                            <Modal 
                                onClose={() => {
                                    setIsModalOpen(false);
                            }} title="Naver atualizado" body="Naver atualizado com sucesso!" /> 
                            : 
                            null
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;