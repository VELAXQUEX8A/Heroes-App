import { useState, useEffect } from 'react';

export const useForm = (initialForm = {}, storageKey = null) => {
    const [formState, setFormState] = useState(() => {
        if (storageKey) {
            const saved = localStorage.getItem(storageKey);
            return saved ? JSON.parse(saved) : initialForm;
        }
        return initialForm;
    });

    
    useEffect(() => {
        if (storageKey) {
            localStorage.setItem(storageKey, JSON.stringify(formState));
        }
    }, [formState, storageKey]);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const onResetForm = () => {
        setFormState(initialForm);
        if (storageKey) {
            localStorage.removeItem(storageKey);
        }
    };

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    };
};
