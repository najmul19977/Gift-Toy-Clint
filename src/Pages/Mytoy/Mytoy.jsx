import React, { useContext, useEffect, useState} from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MytoyRow from './MytoyRow';

const Mytoy = () => {
    const { user } = useContext(AuthContext);
    const [items, setItems] = useState([]);
    /* const [products,setProducts]= useState([]); */
    
    useEffect(() => {
        fetch(`http://localhost:5000/mytoys/${user?.email}`)
            .then(result => result.json())
            .then(data => setItems(data));
    }, [user]);
    const handleDelete = id =>{
        const proceed = confirm('Are You Sure You Want To Delete');
        if(proceed){
            fetch(`http://localhost:5000/mytoys/${id}`,{
                method:'DELETE'
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data);
                if(data.deletedCount > 0){
                    alert('deleted Successful');
                    const remaining = items.filter(item =>item._id !== id);
                    setItems(remaining);
                }
            })

        }
    }
    return (

        <div className="overflow-x-auto w-full">

            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                       
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item => <MytoyRow
                            key={item._id}
                            item={item}
                            handleDelete={handleDelete}

                        ></MytoyRow>)
                    }





                </tbody>



            </table>
        </div>
    );
};

export default Mytoy;