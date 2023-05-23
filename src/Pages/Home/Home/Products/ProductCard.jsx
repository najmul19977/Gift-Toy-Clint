import React from 'react';

const ProductCard = ({pd}) => {
    const{title,price,img,rating} = pd;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='w-25 h-25 mx-auto' src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Price:${price}</p>
                <p>Rating:{rating}</p>
                <div className="card-actions ">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;