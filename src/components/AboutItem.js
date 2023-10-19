import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Developer from '../assets/images/developer.png';
import useWindowDimensions from '../customHooks/useWindowDimensions';
import { yellow, indigo } from "@mui/material/colors";

const classes = {
    experienceBar: {
        height: 'auto',
        width: '100%',
        borderRadius: '10px',
        backgroundColor: indigo[400],
        display: 'inline-block',
        position: 'relative',
        top: '15px'
    },
    experienceBarTitle: {
        padding: '20px 30px',
        fontWeight: 500,
        color: 'white',
        textAlign: 'center'
    }
}

const AboutItem = ({ name, school, about, developer }) => {
    const { height, width } = useWindowDimensions();

    return (
        <Grid
            item
            xs={12}
            container
            justifyContent="flex-start"
            spacing={3}
            sx={{
                marginTop: '50px'
            }}
        >
            <Grid
                item
                xs={12}
                lg={4}
                container
                justifyContent="center"
            >
                <Grid
                    item
                    xs={12}
                    lg={6}
                    container
                    justifyContent="center"
                >
                    <Grid
                        item
                    >
                        <img src={developer} alt="Developer's Face" />
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={12}
                    lg={8}
                    container
                    justifyContent="center"
                >
                    <Grid
                        item
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                marginTop: '20px'
                            }}
                            textAlign="center"
                        >
                            {name}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                xs={12}
                lg={7}
                container
                spacing={1}
                direction="column"
            >
                <Grid
                    item
                    xs={1}
                >
                    <Typography
                        variant="h6"
                        fontWeight="medium"
                        textAlign={width >= 1200 ? "left" : "center"}
                    >
                        {school}
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={8}
                >
                    <Paper
                        sx={classes.experienceBar}
                    >
                        <Typography
                            variant="h6"
                            sx={classes.experienceBarTitle}
                        >
                            {about}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default AboutItem;