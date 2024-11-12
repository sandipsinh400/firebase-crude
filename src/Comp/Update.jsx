


import { get, ref, set } from 'firebase/database';
import React, { useEffect } from 'react';
import db from '../firebase';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Update = () => {
    const { id } = useParams();
    const navigate = useNavigate();  // Corrected from redirect to useNavigate
    const { register, handleSubmit, reset } = useForm();

    // Fetch user data and reset form
    async function singleuser() {
        const res = await get(ref(db, `rnw/student/${id}`));  // Ensure the path is correct
        console.log(res.val());
        reset(res.val());  // Reset the form with fetched data
    }

    useEffect(() => {
        singleuser();  // Fetch the data when component mounts or id changes
    }, [id]);

    // Handle form submission and update the user data
    async function submitdata(data) {
        await set(ref(db, `rnw/student/${id}`), data);  // Ensure path matches the fetch path
        navigate('/Form');  // Redirect to home page after update
    }

    return (
        <div className='container'>
            <div className='col-lg-12 mx-auto my-5 p-5 shadow'>
                <form onSubmit={handleSubmit(submitdata)}>
                    <div className='mt-4'>
                        <input 
                            type="text" 
                            {...register('username')} 
                            className='form-control' 
                            placeholder='Enter username' 
                        />
                    </div>
                    <div className='mt-4'>
                        <input 
                            type="email" 
                            {...register('email')} 
                            className='form-control' 
                            placeholder='Enter your email' 
                        />
                    </div>
                    <div className='mt-4'>
                        <button className='btn btn-success'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Update;
