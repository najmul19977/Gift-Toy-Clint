import React from 'react';

const AlltoysCart = ({produc}) => {
    const{title,price,img} = produc;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Price:${price}</p>
               
            </div>
        </div>
    );
};

export default AlltoysCart;