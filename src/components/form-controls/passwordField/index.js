import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

PasswordField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function PasswordField(props) {
    const { form, name, label, disabled } = props
    const { errors, formState } = form
    const hasError = formState.touched[name] && errors[name]
    const [showPassword, setShowPassword] = useState(false)

    const handleTogglePassword = () => {
        setShowPassword(x => !x)
    }

    return (
        <FormControl fullWidth variant="outlined" margin="normal" >
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <Controller
                name={name}
                control={form.control}
                as={OutlinedInput}
                fullWidth
                id={name}
                label={label}
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleTogglePassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    );
}

export default PasswordField;