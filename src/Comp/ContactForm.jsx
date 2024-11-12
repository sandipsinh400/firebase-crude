import './ContactForm.css';
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { TbInfoTriangleFilled } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { ref, set, push, } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import db from '../firebase'


const ContactForm = () => {
    const { register, handleSubmit, reset } = useForm()
    const [users, setuser] = useState([])


    function submitdata(data) {
        set(push(ref(db, 'rnw/student')), data)
        alert("data has been inserted");
        reset()
        shpowfirebase()
    }
    return (
        <div className="container-fulid ">
            <div className="container my-4 ">

                <div className="contact-form-container">
                    <div className="contact-form-overlay"></div>

                    <div className="contact-form-content">
                        <h2>Contact Information</h2>
                        <form method="post" onSubmit={handleSubmit(submitdata)}>
                            {/* Name Field */}
                            <div className="form-group">
                                <label htmlFor="formName">
                                    Username</label>
                                <input type="text" className="form-control" id="username"  {...register('username')} placeholder="Enter your Username" required />
                            </div>

                            {/* Email Field */}
                            <div className="form-group">
                                <label htmlFor="formEmail">Email</label>
                                <input type="email" className="form-control" id="formEmail"  {...register('email')} placeholder="Enter your email" required />
                            </div>


                            {/* Submit Button */}
                            <button type="submit" className="btn btn-primary me-2 mt-3">
                                Submit <IoCheckmarkDoneCircle />
                            </button>

                            {/* Link Styled as Button */}
                            <Link to="/info" className="btn btn-primary me-2 mt-3">
                                Info <TbInfoTriangleFilled />
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
