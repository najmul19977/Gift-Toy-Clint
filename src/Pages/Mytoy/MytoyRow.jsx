import React from 'react';
import { Link } from 'react-router-dom';

const MytoyRow = ({item,handleDelete}) => {

    const {_id,image,title,price,postedBy} = item;
   

    return (
        <tr>
           
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                           {image && <img src={image} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                   
                </div>
            </td>
            <td>
                {title}
               
            </td>
            <td>
                ${price}
               
            </td>
            <td>
                
               {postedBy}
            </td>
            
            <th>
               <Link to={`updatetoy/${_id}`}> <button className="btn btn-ghost btn-xs">Edit</button></Link>
            </th>
            <th>
                <button onClick={()=>handleDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default MytoyRow;