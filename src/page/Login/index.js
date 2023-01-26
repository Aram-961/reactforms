import React from 'react'
import { useState } from 'react'
const Login = () => {
    const [active, isActive] = useState(false)
    const [formData, setFormData] = useState(
        {
            firstName: '',
            lastName: '',
            email: '',
            isChecked: true,
            employment: '',
            color: '',
        }
    )
    console.log(formData.employment);
    console.log(formData.color);

    const handleData = (event) => {
        const { name, value, type, checked } = event.target  // checking name value and type of input
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value
            }

        })
        console.log(formData);
    }

    // button text change onClick
    // const handleClick = () => {
    //     isActive(!active)
    //     console.log(active);
    // }
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <form>
                <input
                    type="text"
                    placeholder='First Name'
                    onChange={handleData}
                    name='firstName'
                    value={formData.firstName}
                />

                <input
                    type="text"
                    placeholder='First Name'
                    onChange={handleData}
                    name='lastName'
                    value={formData.lastName}
                />

                <input
                    type="email"
                    placeholder='Email@.com'
                    onChange={handleData}
                    name='email'
                    value={formData.email}
                />
                <input
                    type="checkbox"
                    name="isChecked"
                    id=""
                    checked={formData.isChecked}
                    onClick={handleData}
                />

                <fieldset>
                    <legend>Current Application status</legend>
                    <input
                        type="radio"
                        name="employment"
                        value='unemployed'
                        onChange={handleData}
                        checked={formData.employment === 'unemployed'}
                        id="unemployed" />

                    <input
                        type="radio"
                        name="employment"
                        value='employed'
                        checked={formData.employment === 'employed'}
                        onChange={handleData}
                        id="tech interview" />

                    <input
                        type="radio"
                        name="employment"
                        value='Accepted'
                        checked={formData.employment === 'Accepted'}
                        onChange={handleData}
                        id="Accepted" />
                </fieldset>
                <select
                    value={formData.color}
                    name='color'
                    onChange={handleData}
                    id="color">
                    <option value="">Choose Your Color Amigoo</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                </select>
            </form>
        </div>
    )
}

export default Login