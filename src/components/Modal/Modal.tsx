import React from 'react';
import Image from 'next/image';
import { ModalContainer, ModalContent } from './styles';
import {useRouter} from 'next/router'
const Modal = ({showModal = false, setShowModal }) => {
    const router = useRouter();
    const closeModal = () => {
        setShowModal(prev => !prev);
        router.push('/')
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
