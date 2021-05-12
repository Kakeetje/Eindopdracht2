function ValidationPost(values) {
    let errors = {}

    if(!values.post.trim()) {
        errors.post = "Postcode is verplicht";
    } else if(!/^[0-9]{4}[A-Z]{2}$/i.test(values.post)) {
        errors.post = "Postcode klopt niet";
    }
    return errors;
}

export default ValidationPost;
