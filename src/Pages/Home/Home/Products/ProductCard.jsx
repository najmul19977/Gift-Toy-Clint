import React from 'react';

const ProductCard = ({pd}) => {
    const{title,price,img} = pd;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Price:${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;