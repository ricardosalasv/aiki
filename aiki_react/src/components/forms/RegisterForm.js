import React, { useState } from 'react';
import axiosInstance from '../../axios';
import { useNavigate, Link } from 'react-router-dom';
import FormField from './FormField';
import FormSubmit from './FormSubmit';

const RegisterForm = () => {

    const navigate = useNavigate()

    function submit(e) {
        e.preventDefault()
        
        let formData = new FormData(e.target)
        const data = Array.from(formData)
        let payload = Object.fromEntries(data)

        if (payload.password != payload.confirm_password){
            alert("The passwords do not match.")
        }

        payload = Object.freeze(payload)

        console.log(payload)
        axiosInstance
            .post('users/register/', {
                email: payload.email,
                user_name: payload.user_name,
                password: payload.password
            })
            .then ((response) => {
                console.log(1);
                navigate('/login');
                console.log(response);
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error);

                if (error.response){
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.header);
                }
            })
    }

    return (
        <div className="row justify-content-center mt-4">
            <div className='col-6'>
                <fieldset>
                    <legend className='border-bottom mb-4'>Start managing your tasks today!</legend>
                    <form onSubmit={submit}>
                        <FormField name='user_name' />
                        <FormField name='email' />
                        <FormField name='password' />
                        <FormField name='confirm_password' />
                        <FormSubmit />
                    </form>
                    <div className="border-top pt-2">
                        <small className="text-muted">
                            Already have an account? <Link to='/login' className="ml-2">Sign In</Link>
                        </small>
                    </div>
                </fieldset>
            </div>
        </div>
    )

}

export default RegisterForm;