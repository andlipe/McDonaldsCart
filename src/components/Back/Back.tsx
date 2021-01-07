import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { BackContainer } from './style';



const Back = () => {
    return (
        <BackContainer>
            <Link href="/"> 
                <a>
                <FontAwesomeIcon icon={faArrowLeft}/>
                </a> 
            </Link>
        </BackContainer>
    );
}

export default Back;
