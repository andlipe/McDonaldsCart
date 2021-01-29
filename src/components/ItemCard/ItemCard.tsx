import Image from 'next/image';
import React from 'react';
import {Card} from './styles';
import { CartContext } from '../../context/CartContext';
import Skeleton from 'react-loading-skeleton';

const ItemCard = ({ productData }) => {
    const { addToCart } = React.useContext(CartContext);
    let [imageIsLoad, setImageIsLoad] = React.useState(false);
    React.useEffect(() => {
        setImageIsLoad(true);
    }, [])
    return (
        <Card>
            {imageIsLoad === true ? <Image 
                    src={productData.image}
                    alt={productData.name}
                    width={150}
                    height={150}
                    loading={'lazy'}
                
                />: <Skeleton height={150} width={150} />}
            <h3>{imageIsLoad === true ? productData.name : <Skeleton width={150} height={20}/>}</h3>
            <p> {imageIsLoad === true ? 'R$' + productData.price : <Skeleton width={50} height={20}/>}</p>
            <button onClick={() => addToCart(productData)} >
                {imageIsLoad === true ?'Adicionar ao carrinho' : <Skeleton height={30} width={125}/>}
            </button>
            
        </Card>
    );
};

export default React.memo(ItemCard);
