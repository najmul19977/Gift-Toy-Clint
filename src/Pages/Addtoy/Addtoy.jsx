import { Result } from 'postcss';
import React from 'react';
import { useForm } from "react-hook-form";

const Addtoy = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
        fetch('http://localhost:5000/products',{
            method:'POST',
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
        alert('Add New Toy Successfully');

    }; 
    return (
        <div className='text-center m-10'>
            <div className='text-center'>
                <h2 className='text-3xl mb-10'><u>Add New Toy</u></h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='text-input border border-gray-300 text-gray-900 text-sm  w-50 p-2.5 m-2' /* defaultValue="Toy Name" */ {...register("title")} placeholder='Toy Name' /> <br />
                <input className='text-input  border border-gray-300 text-gray-900 text-sm  w-50 p-2.5 m-2' /* defaultValue="Toy Price" */ {...register("price")} placeholder='Toy Price' /> <br />
                <input className='text-input  border border-gray-300 text-gray-900 text-sm  w-50 p-2.5 m-2' /* defaultValue="Toy Price" */ {...register("img")} placeholder='image URL' /> <br />
                <input className='text-input  border border-gray-300 text-gray-900 text-sm  w-50 p-2.5 m-2' /* defaultValue="Toy Price" */ {...register("description")} placeholder='Description' /> <br />
                <input className='text-input  border border-gray-300 text-gray-900 text-sm  w-50 p-2.5 m-2'  /* defaultValue="Toy Price" */ {...register("postedBy")} placeholder='Posted By Email' /> <br />
                <input className='text-input  border border-gray-300 text-gray-900 text-sm  w-50 p-2.5 m-2'  /* defaultValue="Toy Price" */ {...register("rating")} placeholder='Rating' /> <br />
                
                {errors.exampleRequired && <span>This field is required</span>}

                <input className='btn' type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default Addtoy;