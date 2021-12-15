import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import { Box, Button, TextField } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from "@mui/material/IconButton";
import { indigo } from '@mui/material/colors'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const classes = {
    formItem: {
        width: '85%',
        marginBottom: '20px',
        '&:focus': {
            // color: '500px'
        }
    },
    btn: {
        width: '85%',
        marginBottom: '30px',
        padding: '10px',
        backgroundColor: indigo[500],
        '&:hover': {
            backgroundColor: indigo[400],
        }
    }
}

const RegistForm = () => {
    return (
        <Box sx={{ paddingTop: '75px' }}>
            <form noValidate>
                <TextField
                    required
                    label="Full Name"
                    sx={classes.formItem}
                    variant="outlined"
                    type="text"
                // inputRef={emailRef}
                />
                <br />
                <TextField
                    required
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
                    <InputLabel htmlFor="outlined-adornment-password" required>Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        // type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    // onClick={handleClickShowPassword}
                                    // onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
                                    <Visibility />
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                        required
                    // inputRef={passwordRef}
                    />
                </FormControl>
                <br />
                <FormGroup>
                    <FormControlLabel
                        sx={{ width: '90%' }}
                        control={<Checkbox />}
                        label="I want to receive inspiration, marketing
                        promotions and updates via email."
                    />
                </FormGroup>
                <br />
                <Button
                    sx={classes.btn}
                    variant="contained"
                    type="submit"
                // disabled={loading}
                >
                    REGISTER
                </Button>
                <br />
                <Link href="#">
                    <Typography variant="body2" sx={{
                        // paddingRight: '40px',
                        // paddingLeft: '40px'
                    }}>
                        Already have an account? Login
                    </Typography>
                </Link>
            </form>
        </Box>
    );
}

export default RegistForm;