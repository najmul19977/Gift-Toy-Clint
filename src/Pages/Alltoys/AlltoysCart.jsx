


const AlltoysCart = ({produc}) => {
    
    const{title,price,img,rating} = produc;
   
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="w-full" src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Price:${price}</p>
                <p>Rating:{rating}</p>
                
               
            </div>
        </div>
    );
};

export default AlltoysCart;