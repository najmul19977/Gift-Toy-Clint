import React, { useContext, useEffect} from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MytoyRow from './MytoyRow';

const Mytoy = () => {
    const { user } = useContext(AuthContext);
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:5000/mytoys/${user?.email}`)
            .then(result => result.json())
            .then(data => setItems(data));
    }, [user]);
    return (

        <div className="overflow-x-auto w-full">

            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
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

                        ></MytoyRow>)
                    }





                </tbody>



            </table>
        </div>
    );
};

export default Mytoy;