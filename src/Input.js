import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ onChange, value }) => (
    <input
        type='search'
        placeholder='City'
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