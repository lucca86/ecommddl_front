import React from 'react'

const CustomInput = (props) => {

    const { type, name, placeholder, cus_class} = props

    return (
        <div>
            <input 
                type={type} 
                name={name} 
                placeholder={placeholder} 
                className={`form-control ${cus_class}`} 
            />
        </div>
    )
}

export default CustomInput