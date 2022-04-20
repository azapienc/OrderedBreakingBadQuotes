import React, { useEffect, useState } from 'react'
import "./effect.css"
import { Message } from './Message';

export const SimpleForm = () => {


    const [formState, setFormState] = useState({
        name: "",
        email: "",
    })

    const { name, email } = formState;

    useEffect(() => {
        console.log("Ahoj");
    },[])

    useEffect(() => {
        console.log("FormState changed!");
    },[formState])

    useEffect(() => {
        console.log("Changing e-mail");
    },[email])

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value,
        })
    }


    return (
        <div>
            <h1>UseEffect</h1>
            <hr />
            <div className='form-group'>
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}

                />
            </div>

            <div className='form-group'>
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder='Tu email'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange}

                />
            </div>
            {name=="123"&&<Message/>}
        </div>
    )
}
