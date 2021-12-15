import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import yellow from "@mui/material/colors/yellow"
import indigo from "@mui/material/colors/indigo"
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import secureLogin from '../assets/images/secureLogin.svg'
import logoInEdu from '../assets/images/logoInEdu.svg'
import RegistForm from "../components/RegistForm";

const classes = {
    registPage: {
        backgroundColor: yellow[200],
        padding: '40px 140px'
    },
    registContent: {
        backgroundColor: yellow[300],
        height: 'auto',
        padding: '70px'
    },
    registText: {
        fontWeight: 600,
        justifyContent: 'center',
        color: indigo[500]
    }
}

const RegisterStudent = () => {
    return (
        <Box sx={classes.registPage}>
            <Paper elevation={0} sx={classes.registContent}>
                <Grid container spacing={2}>
                    <Grid
                        item
                        container
                        xs={6}
                        direction="column"
                        spacing={3}
                        sx={{
                            textAlign: 'center'
                        }}
                    >
                        <Grid item xs={2}>
                            <img src={logoInEdu} />
                        </Grid>
                        <Grid item xs={2} >
                            <Typography variant="h3" sx={classes.registText}>
                                Register Your<br />Account
                            </Typography>
                        </Grid>
                        <Grid item xs={5}>
                            <img src={secureLogin} />
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <RegistForm />
                    </Grid>
                </Grid>
            </Paper>
        </Box >
    );
}

export default RegisterStudent;