import React from 'react';
import useForm from './useForm/useForm';
import validate from './validationPost';
import './PostForm.css';


const PostSubmit = ({submitForm}) => {

    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
    );

    return (
        <>
    <div className="quick-order">
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-input">
            <label className="address-label"> Adres </label>
                <input
                    id="post"
                    type="code"
                    name="post"
                    className="post-input"
                    placeholder=" Postcode..."
                    value={values.post}
                    onChange={handleChange}
                />
            {errors.post && <p>{errors.post}</p>}
            </div>
            <button
                className="form-input-btn" type="submit"
            >Bestellen</button>
        </form>
    </div>
</>
    )
}

export default PostSubmit;
