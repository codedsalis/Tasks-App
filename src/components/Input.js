import React from 'react'

const Input = ({ type, className, placeholder }) => {
    return (
        <>
            <input type={type} className={className} placeholder={placeholder} />
        </>
    );
}


export default Input
