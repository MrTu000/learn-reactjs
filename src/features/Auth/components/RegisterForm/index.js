import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-controls/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Avatar, Button, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PasswordField from '../../../../components/form-controls/passwordField';

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

function RegisterForm(props) {
    const schema = yup.object().shape({
        fullName: yup.string().required("Full name can not empty")
            .test('should has at least two words', 'Please enter at least two words', value => {
                return value.split(' ').length >= 2
            })
    })

    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        resolver: yupResolver(schema),
    })

    const handelSubmit = values => {
        const { onSubmit } = props
        if (onSubmit) onSubmit(values)

        form.reset()
    }
    return (
        <>
            <Avatar sx={{ margin: '0 auto', backgroundColor: '#9c27b0' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h5" component="h2" sx={{ textAlign: 'center', color: '#9c27b0' }}>
                Sign up
            </Typography>

            <form onSubmit={form.handleSubmit(handelSubmit)}>
                <InputField name="fullName" label="Full name" form={form} />
                <InputField name="email" label="Email" form={form} />
                <PasswordField name="password" label="Password" form={form} />
                <PasswordField name="confirmPassword" label="Confirm password" form={form} />
                <Button variant='contained' fullWidth sx={{ mt: 1 }} type="submit">Register</Button>
            </form>
        </>
    );
}

export default RegisterForm;