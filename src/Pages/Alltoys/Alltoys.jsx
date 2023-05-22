import React, { useEffect, useState } from 'react';
import AlltoysCart from './AlltoysCart';

const Alltoys = () => {
    const [product, setProduct] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProduct(data))

    }, []);

    const handleSearch = () => {
        
            fetch(`http://localhost:5000/toySearchByTitle/${searchText}`)
                .then(req => req.json())
                .then(data =>{
                    setProduct(data);
                });

        
    };

    return (

        <div>
            <div className='text-center m-5'>
                <input onChange={(e) => setSearchText(e.target.value)} type="text" className="border border-green-500 w-25 h-12 mr-4 p-2" placeholder="Success input">
                </input>
                <button onClick={ handleSearch} className='btn '>Search</button>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                {
                    product.map(produc => <AlltoysCart
                        key={produc._id}
                        produc={produc}

                    >

                    </AlltoysCart>)
                }
            </div>
        </div>
    );
};

export default Alltoys;