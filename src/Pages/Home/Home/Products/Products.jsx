import React, { useContext, useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { AuthContext } from '../../../../Provider/AuthProvider';

const Products = () => {
    const [product,setProduct] = useState([]);
    const {Loading} = useContext(AuthContext);

   

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res =>res.json())
        .then(data =>setProduct(data))

    },[]);
    if(Loading){
        return <progress className="progress w-56"></progress>
    }
    
    return (
        <div className='mt-4'>
            <div className='text-center'>
                <h3 className='text-3xl font-bold'>Our Product</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, atque similique? <br /> Provident earum vel amet optio numquam architecto.</p>
        

            </div>
            <div className='grid lg:grid-cols-3 gap-4 mt-10 mb-10'>
                {
                    product.map(pd =><ProductCard
                    key={product._id}
                    pd={pd}
                    
                    ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;