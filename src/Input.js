import React from 'react';

const Input = ({ onChange, value }) => (
    <input
        type='search'
        placeholder='City'
        required={true}
        onChange={onChange}
        value={value}
    />
)

export default Input;