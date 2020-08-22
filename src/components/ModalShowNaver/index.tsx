import React from 'react';

// Importando os estilos
import './styles.css';

// Importando o ícone
import closeModal from '../../assets/images/icons/closeModal.svg';

// Criando a interface
interface ModalProps {
    
    // Props obrigatórias
    title: string;
    birthdate: string; 
    admission_date: string; 
    project: string; 
    job_role: string; 
    url: string;
    onClose(): void;
}



const ModalShowNaver: React.FC<ModalProps>= (props)=> {

    const handleOutsideClick = (e: any) => {
        if(e.target.id == 'modal-show-naver')
            props.onClose();
    }

    return(
        <div onClick={handleOutsideClick} id="modal-show-naver" className="modal">
            <div className="container">

                <img className="naver-image" src={props.url} alt="Foto do Naver"/>

                <div className="content">
                    <div className="modal-body">
                        <div className="information" >
                            <div className="top-information">
                                <p>{props.title}</p>
                                <p>{props.job_role}</p>
                            </div>
                            <div className="body-information">
                                <p>Idade</p>
                                <p>{props.birthdate}</p>
                            </div>
                            <div className="body-information">
                                <p>Tempo de empresa</p>
                                <p>{props.admission_date}</p>
                            </div>
                            <div className="body-information">
                                <p>Projetos que participou</p>
                                <p>{props.project}</p>
                            </div>
                        </div>
                        
                        <div>
                            {props.children}
                        </div>
                    </div>

                    <div className="modal-header">
                        <img onClick={props.onClose} src={closeModal} alt="Fechar"/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ModalShowNaver;