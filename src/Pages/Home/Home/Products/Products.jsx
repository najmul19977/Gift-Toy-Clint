import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
    const [product,setProduct] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res =>res.json())
        .then(data =>setProduct(data))

    },[])
    return (
        <div className='mt-4'>
            <div className='text-center'>
                <h3 className='text-3xl font-bold'>Our Product</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, atque similique? <br /> Provident earum vel amet optio numquam architecto.</p>
        

            </div>
            <div className='grid grid-cols-3 gap-4'>
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