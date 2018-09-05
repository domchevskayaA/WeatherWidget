import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ onChange, value }) => (
    <input
        type='text'
        placeholder='Type the name of the city'
        required={true}
        onChange={onChange}
        value={value}
    />
);

Input.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string.isRequired
};

export default Input;