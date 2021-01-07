import React from 'react';
import Image from 'next/image';
import { ModalContainer, ModalContent } from './styles';

const Modal = ({showModal, setShowModal}) => {
    
    const closeModal = () => {
        setShowModal(prev => !prev)
    }

    return (
        <>{showModal ? 
        <ModalContainer>
            <ModalContent>
            <Image 
                src="/assets/MCDonalds.png"
                alt="McDonalds Logo"
                width={100}
                height={100}
                /> 
                <h3>Pedido Realizado com sucesso</h3>
                <button onClick={() => closeModal()}>Fechar</button>
            </ModalContent>
        </ModalContainer>
        : null
        }</>
        
    );
}

export default Modal;
