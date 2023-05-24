
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { useParams } from 'react-router-dom';

const UpdateToy = () => {
    const toyid = useParams();

    const [toydata,setToydata] = useState([]);


    useEffect(()=>{
        fetch(`http://localhost:5000/products/${toyid.id}`)
        .then(res =>res.json())
        .then(data =>setToydata(data));

    },[toyid]);
    //console.log(toydata);
    
    //console.log(toyid.id);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
        console.log(data);
        fetch(`http://localhost:5000/toys/${toyid.id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)

        })
        .then(res=>res.json())
        .then(result =>{
            console.log(result);
        })

        console.log(data);
        alert('Update Toy Successfully');

    }; 
    return (
        <div className='text-center m-10'>
            <div className='text-center'>
                <h2 className='text-3xl mb-10'><u>Update Toy</u></h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='text-input border border-gray-300 text-gray-900 text-sm  w-50 p-2.5 m-2' defaultValue={toydata.title}   {...register("title")} placeholder='Toy Name' /> <br />
                <input className='text-input  border border-gray-300 text-gray-900 text-sm  w-50 p-2.5 m-2' defaultValue={toydata.price}  {...register("price")} placeholder='Toy Price' /> <br />
                <input className='text-input  border border-gray-300 text-gray-900 text-sm  w-50 p-2.5 m-2' defaultValue={toydata.img} {...register("img")} placeholder='image URL' /> <br />
                <input className='text-input  border border-gray-300 text-gray-900 text-sm  w-50 p-2.5 m-2' defaultValue={toydata.description}  {...register("description")} placeholder='Description' /> <br />
                <input className='text-input  border border-gray-300 text-gray-900 text-sm  w-50 p-2.5 m-2' defaultValue={toydata.postedBy}  {...register("postedBy")} placeholder='Posted By Email' /> <br />
                
                {errors.exampleRequired && <span>This field is required</span>}

                <input className='btn' type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateToy;