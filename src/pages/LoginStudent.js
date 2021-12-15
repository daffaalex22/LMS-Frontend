import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { yellow_200, yellow_300 } from "../assets/pallete/colors";
import { indigo } from '@mui/material/colors'
import logoInEdu from '../assets/images/logoInEdu.png'
import login from '../assets/images/login.png'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import LoginFormStudent from "../components/LoginFormStudent";

const classes = {
    loginPage: {
        height: '100vh',
        // width: '100%',
        backgroundColor: yellow_200,
        padding: '35px 7vw'
    },
    loginSection: {
        width: '500px',
        height: '640px',
        backgroundColor: yellow_300,
        textAlign: 'center',
        paddingTop: '50px',
        display: 'inline-block'
    },
    loginText: {
        color: indigo[500],
        marginTop: '40px',
        marginBottom: '70px',
        fontWeight: 600
    }
}

const LoginStudent = () => {

    return (
        <Box sx={classes.loginPage}>
            <Paper sx={classes.loginSection} elevation={0}>
                <img src={logoInEdu} />
                <Typography sx={classes.loginText} variant="h4">
                    Login
                </Typography>
                <LoginFormStudent />
                <Typography variant="body2" color="textSecondary">
                    Copyright ©InEdu 2021
                </Typography>
            </Paper>
            <img src={login}
                style={{
                    position: 'relative',
                    // marginLeft: '100px',
                    // verticalAlign: 'super',
                    // display: "inline-block"
                    left: '100px',
                    bottom: '65px'
                }} />
        </Box>
    );
}

export default LoginStudent;