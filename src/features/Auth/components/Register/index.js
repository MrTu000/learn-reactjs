import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm';

Register.propTypes = {

};

function Register(props) {
    const handelSubmit = (values) => {
        console.log("form submit:", values);
    }

    return (
        <div>
            <RegisterForm onSubmit={handelSubmit} />
        </div>
    );
}

export default Register;