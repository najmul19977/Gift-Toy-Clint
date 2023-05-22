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

    }; 
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='text-input' /* defaultValue="Toy Name" */ {...register("title")} placeholder='Toy Name' /> <br />
                <input className='text-input' /* defaultValue="Toy Price" */ {...register("price")} placeholder='Toy Price' /> <br />
                <input className='text-input' /* defaultValue="Toy Price" */ {...register("image")} placeholder='image URL' /> <br />
                <input className='text-input' /* defaultValue="Toy Price" */ {...register("description")} placeholder='Description' /> <br />
                <input className='text-input' defaultValue="email" /* defaultValue="Toy Price" */ {...register("postedBy")} placeholder='Posted By' /> <br />
                
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default Addtoy;