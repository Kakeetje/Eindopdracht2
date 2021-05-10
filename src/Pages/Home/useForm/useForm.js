import React, {useState, useEffect} from 'react';

const UseForm = () => {

    const [values, setValues] = useState({
        post:" "
    })
    const [errors, setErrors] = useState({})

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        });
        const handleSubmit = e => {
            e.preventDefault();
        }
    }
    return { handleChange, values, handleSubmit }
}

export default UseForm;
