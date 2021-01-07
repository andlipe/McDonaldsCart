import React from 'react';
import {HeaderContainer} from './styles';
import Image from "next/image";
import Link from 'next/link';
import Cart from "../Cart/Cart";
import Back from '../Back/Back';


const Header = ({actualPage}) => {
    const [page, setPage] = React.useState('');

    React.useEffect(() => {
        setPage(actualPage);
        
    }, [page]);

    return (
        <HeaderContainer>
                <Link href="/">
                    <a><Image 
                        src="/assets/MCDonalds.png" 
                        alt="McDonalds Logo"
                        width={50}
                        height={50}
                    /></a>
                </Link>
                {page === "Index" ? <Cart /> : <Back />}
        </HeaderContainer>
    );
}

export default Header;
