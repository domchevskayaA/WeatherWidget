import React from 'react';

const Button = (props) => (
    <button
        type='submit'
        disabled={props.disabled}
    >
        Search
    </button>
);

export default Button;