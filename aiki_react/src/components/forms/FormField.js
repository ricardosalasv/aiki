import React, { useState } from 'react';
import axiosInstance from '../../axios';
import { useHistory } from 'react-router-dom';

const FormField = ({name}) => {

    // Capitalizing each word inside of the name property to put it as span
    let spanText = name;
    let arr = spanText.split(/[\ \_]/);

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    const capitalizedSpanText = arr.join(" ");

    // If the field is a password field, specify it in the type
    var inputType = 'text'
    if (name.includes('password')) {
        inputType = 'password'
    }

    return (
        <div className='row mt-3'>
            <span>{capitalizedSpanText}</span>
            <input type={inputType} name={name} />
        </div>
    )
}

export default FormField;

