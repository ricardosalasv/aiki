import React, { useState } from 'react';
import axiosInstance from '../../axios';
import { useHistory } from 'react-router-dom';

const FormSubmit = () => {

    return (
        <div className='row mt-3'>
            <input className="btn btn-outline-info" type='submit' />
        </div>
    )

}

export default FormSubmit;

