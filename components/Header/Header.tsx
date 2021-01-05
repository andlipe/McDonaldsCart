import React from 'react';
import {HeaderContainer} from './styles';
import Image from "next/image";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
        <HeaderContainer>
            
                <Image 
                    src="/assets/MCDonalds.png" 
                    alt="McDonalds Logo"
                    width={50}
                    height={50}
                />
                <button>
                    <FontAwesomeIcon icon={faShoppingCart} size="2x"/>
                </button>
            
        </HeaderContainer>
    );
}

export default Header;
