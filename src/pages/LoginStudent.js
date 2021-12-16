import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { indigo, yellow } from '@mui/material/colors'
import logoInEdu from '../assets/images/logoInEdu.png'
import login from '../assets/images/login.png'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import LoginFormStudent from "../components/LoginFormStudent";
import Grid from "@mui/material/Grid";

const classes = {
    loginPage: {
        height: 'auto',
        backgroundColor: yellow[200],
        padding: '35px 7vw'
    },
    loginSection: {
        width: '100%',
        height: 'auto',
        backgroundColor: yellow[300],
        textAlign: 'center',
        paddingTop: '50px',
        paddingBottom: '20px',
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
            <Grid
                container
                spacing={6}
                justifyContent="center"
                direction="row-reverse"
            >
                <Grid
                    item
                    container
                    xs={12}
                    md={6}
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item>
                        <img src={login}
                            style={{
                                width: '100%',
                                height: 'auto'
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid
                    container
                    item
                    xs={12}
                    md={6}
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={12} sx={{ width: '80%' }}>
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
                    </Grid>
                </Grid>
            </Grid>
        </Box >
    );
}

export default LoginStudent;