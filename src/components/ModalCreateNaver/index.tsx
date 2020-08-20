import React from 'react';

// Importando os estilos
import './styles.css';

// Importando o ícone
import closeModal from '../../assets/images/icons/closeModal.svg';

// Criando a interface
interface ModalProps {
    title: string; // Prop obrigatória
    body: string; // Prop obrigatória
    onClose(): void;
}



const ModalCreateNaver: React.FC<ModalProps>= (props)=> {

    const handleOutsideClick = (e: any) => {
        if(e.target.id == 'modal')
            props.onClose();
    }

    return(
        <div onClick={handleOutsideClick} id="modal" className="modal">
            <div className="container">
                <div className="modal-header">
                    <p>{props.title}</p>
                    <img onClick={props.onClose} src={closeModal} alt="Fechar"/>
                </div>
                
                <div className="modal-content">
                    <p>{props.body}</p>
                </div>
            </div>
        </div>
    )
}

export default ModalCreateNaver;