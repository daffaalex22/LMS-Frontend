import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from '@mui/material/Avatar';
import Ava from "../assets/images/avatar.jpg"
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { yellow, indigo } from "@mui/material/colors";

const classes = {
    experienceBar: {
        height: 'auto',
        width: 'auto',
        borderRadius: '10px',
        backgroundColor: indigo[400],
        display: 'inline-block',
        position: 'relative',
        top: '15px'
    },
    experienceBarTitle: {
        padding: '15px 30px',
        fontWeight: 500,
        color: 'white'
    },
    ava: {
        width: '17vw',
        height: '17vw',
        maxWidth: 100,
        maxHeight: 100,
        marginTop: '40px',
        display: 'inline-block',
    },
}

const ReviewItem = () => {
    return (
        <Grid container spacing={1}>
            <Grid
                item
                xs={12}
                sm={7}
                md={4}
                lg={3}
            >
                <Box>
                    <Avatar
                        alt="Remy Sharp"
                        src={Ava}
                        sx={classes.ava}
                    />
                    <Box
                        sx={{
                            display: 'inline-block',
                            position: 'relative',
                            bottom: '1.2rem',
                            left: '20px'
                        }}
                    >
                        <Typography
                            variant="h5"
                        >
                            Ilham T. W.
                        </Typography>
                        <Typography
                            variant="h5"
                            component="div"
                        >
                            <StarRateRoundedIcon
                                sx={{
                                    color: indigo[500],
                                    position: 'relative',
                                    top: '3px',
                                    right: '2px'
                                }}
                            />
                            5.0
                        </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid
                item
                xs={12}
                sm={10}
                md={8}
                lg={7}
                container
                spacing={0}
                direction="column"
                justifyContent="center"
            >
                <Grid item>
                    <Paper
                        sx={classes.experienceBar}
                    >
                        <Typography
                            variant="h6"
                            sx={classes.experienceBarTitle}
                        >
                            Career Coach with 14+ years in the Video Game Industry
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ReviewItem;