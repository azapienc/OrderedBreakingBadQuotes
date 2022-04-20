
import React, { useState } from 'react'

//This is a custom Hook to manage forms

export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const handleInputChange = ({target}) => {
        setValues({
            ...values,
            [target.name]: target.value,
        })
    }

    return [values, handleInputChange];

}
