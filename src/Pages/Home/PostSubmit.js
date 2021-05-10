import React from 'react';
import useForm from './useForm/useForm';

const PostSubmit = () => {

    const { handleChange, values, handleSubmit, errors } = useForm();

    return (
        <>
        <div>

        </div>
    <div className="quick-order">
        <form className="form" onSubmit={handleSubmit}>
            <h3>
                Voer hier uw adres in
            </h3>
            <label>
                Adres
                <input
                    id="post"
                    type="text"
                    name="post"
                    className="post-input"
                    placeholder=" Postcode..."
                    value={values.post}
                    onChange={handleChange}
                />
            </label>
            <button
                className="form-input-btn" type="submit"
            >Bestellen</button>
        </form>
    </div>
</>
    )
}

export default PostSubmit;
