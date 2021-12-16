import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import { Button, TextField } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from "@mui/material/IconButton";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import { indigo, yellow } from '@mui/material/colors'
import { alpha, styled } from '@mui/material/styles';


// const CustomTextField = styled(TextField)({
//     '& label.Mui-focused': {
//         color: indigo[500],
//     },
//     '& .MuiInput-underline:after': {
//         borderBottomColor: indigo[500],
//     },
//     '& .MuiOutlinedInput-root': {
//         '&:hover fieldset': {
//             borderColor: indigo[400],
//         },
//         '&.Mui-focused fieldset': {
//             borderColor: indigo[500],
//         },
//     },
// });

// const CustomOutlinedInput = styled(OutlinedInput)({
//     '& label.Mui-focused': {
//         color: indigo[500],
//     },
//     '& .MuiInput-underline:after': {
//         borderBottomColor: indigo[500],
//     },
//     '& .MuiOutlinedInput-root': {
//         '&:hover fieldset': {
//             borderColor: indigo[400],
//         },
//         '&.Mui-focused fieldset': {
//             borderColor: indigo[500],
//         },
//     },
// });


const classes = {
    formItem: {
        width: '85%',
        marginBottom: '20px',
    },
    btn: {
        width: '85%',
        marginBottom: '30px',
        padding: '10px',
        backgroundColor: indigo[500],
        '&:hover': {
            backgroundColor: indigo[400],
        }
    },
    checkbox: {
        color: indigo[500],
        '&.Mui-checked': {
            color: indigo[500],
        },
    }
}



const LoginFormStudent = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState("")

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setError('')
    }

    return (
        <form noValidate onSubmit={handleSubmit}>
            <TextField
                label="Email"
                sx={classes.formItem}
                variant="outlined"
                type="email"
            // inputRef={emailRef}
            />
            <br />
            <FormControl
                sx={classes.formItem}
                variant="outlined"
            >
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                // onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                // inputRef={passwordRef}
                />
            </FormControl>
            <br />
            <FormGroup>
                <FormControlLabel
                    sx={{
                        textAlign: 'left',
                        paddingRight: '40px',
                        paddingLeft: '40px'
                    }}
                    control={<Checkbox sx={classes.checkbox} />}
                    label={
                        <Typography sx={{ color: indigo[600] }}>
                            Remember Me
                        </Typography>
                    }
                />
            </FormGroup>
            <br />
            <Button
                sx={classes.btn}
                variant="contained"
                type="submit"
            // disabled={loading}
            >
                LOGIN
            </Button>
            <br />
            <Link href="/register" sx={{ textAlign: 'right' }}>
                <Typography variant="body2"
                    sx={{
                        paddingRight: '40px',
                        paddingLeft: '40px',
                        color: indigo[300],
                        '&:hover': {
                            color: indigo[500],
                        }
                    }}
                >
                    Don't have an account? Register
                </Typography>
            </Link>
            <br />
            <br />
        </form>
    );
}

export default LoginFormStudent;