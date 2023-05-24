import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({pd}) => {
    const{_id,title,price,img,rating} = pd;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='w-full h-25 mx-auto' src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Price:${price}</p>
                <p>Rating:{rating}</p>
                <div className="card-actions ">
                   <Link to={`/view/${_id}`}> <button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;