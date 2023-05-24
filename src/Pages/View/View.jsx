import React from 'react';
import { useLoaderData } from 'react-router-dom';

const View = () => {
    const data = useLoaderData();
    const { title,img,description,rating,posedBy,price } = data;
    console.log(data);
    return (
        <div className="card w-full bg-base-100 shadow-xl p-10 mt-5 mb-5 ">
            <figure><img className='w-full' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Price:{price}</p>
                <p>seller email:{posedBy}</p>
                <p>Rating:{rating}</p>
                <p>{description}</p>

                
            </div>
        </div>
    );
};

export default View;