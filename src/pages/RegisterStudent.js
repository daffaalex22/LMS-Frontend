import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import yellow from "@mui/material/colors/yellow"
import indigo from "@mui/material/colors/indigo"
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import secureLogin from '../assets/images/secureLogin.svg'
import logoInEdu from '../assets/images/logoInEdu.svg'
import RegistForm from "../components/RegistFormStudent";

const classes = {
    registPage: {
        // height: 'auto',
        backgroundColor: yellow[200],
        padding: '5% 10%',
        // minWidth: '300px'
        minHeight: '80vh'
    },
    registContent: {
        backgroundColor: yellow[300],
        // height: '100%',
        padding: '7% 2%'
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
                        xs={12}
                        lg={6}
                        direction="column"
                        spacing={2}
                        sx={{
                            textAlign: 'center'
                        }}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item xs={2}>
                            <img src={logoInEdu} />
                        </Grid>
                        <Grid item xs={2} >
                            <Typography variant="h3" sx={classes.registText}>
                                Register Your<br />Account
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <img src={secureLogin} style={{ width: '80%' }} />
                        </Grid>
                    </Grid>
                    <RegistForm />
                </Grid>
            </Paper>
        </Box >
    );
}

export default RegisterStudent;