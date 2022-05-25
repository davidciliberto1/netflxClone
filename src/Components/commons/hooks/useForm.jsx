import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useForm = (initialValue) => {
    const navigate = useNavigate();
    const [form, setForm] = useState(initialValue);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/page2', {
            replace: true,
            state: {
                form: form,
            },
        });
        console.log(form);
    };

    return {
        form,
        handleChange,
        handleSubmit,
    };
};

export default useForm;
