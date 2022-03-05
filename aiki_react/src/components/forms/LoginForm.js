import React, { useState } from 'react';
import axiosInstance from '../../axios';
import { useNavigate, Link } from 'react-router-dom';
import FormField from './FormField';
import FormSubmit from './FormSubmit';

const LoginForm = () => {

    const navigate = useNavigate()

    function submit(e) {
        e.preventDefault()
        
        let formData = new FormData(e.target)
        const data = Array.from(formData)
        let payload = Object.fromEntries(data)

        payload = Object.freeze(payload)

        console.log(payload)
        axiosInstance
            .post('token/', {
                email: payload.email,
                password: payload.password
            })
            .then ((response) => {
                localStorage.setItem('access_token', response.data.access);
                localStorage.setItem('refresh_token', response.data.refresh);
                localStorage.setItem('userIsAuthenticated', true);
                axiosInstance.defaults.headers['Authorization'] =
                    'JWT ' + localStorage.getItem('access_token');
                navigate('/');
                console.log(response);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
                localStorage.setItem('userIsAuthenticated', false);

                if (error.response){
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.header);
                }
            })
    }

    return (
        <div className="row justify-content-center mt-4">
            <div className='col-4'>
                <fieldset>
                    <legend className='border-bottom mb-4'>Login</legend>
                    <form onSubmit={submit}>
                        <FormField name='email' />
                        <FormField name='password' />
                        <FormSubmit />
                    </form>
                    <div className="border-top pt-2">
                        <small className="text-muted">
                            Need an account? <Link to='/register' className="ml-2">Sign Up</Link>
                        </small>
                    </div>
                </fieldset>
            </div>
        </div>
    )

}

export default LoginForm;