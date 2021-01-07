import React from 'react';
import {HeaderContainer} from './styles';
import Image from "next/image";
import Link from 'next/link';
import Cart from "../Cart/Cart";


const Header = () => {
    return (
        <HeaderContainer>
                <Link href="/">
                    <Image 
                        src="/assets/MCDonalds.png" 
                        alt="McDonalds Logo"
                        width={50}
                        height={50}
                    />
                </Link>
                <Cart />
        </HeaderContainer>
    );
}

export default Header;
