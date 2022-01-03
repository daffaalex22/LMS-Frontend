import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { yellow, indigo } from "@mui/material/colors";

const classes = {
    yellowBar: {
        height: 'auto',
        width: '100%',
        borderRadius: '10px',
        backgroundColor: yellow[600]
    },
    yellowContent: {
        height: 'auto',
        width: '100%',
        borderRadius: '10px',
        backgroundColor: yellow[300]
    },
    yellowBarTitle: {
        padding: '20px 30px',
        fontWeight: 500
    },
    description: {
        fontWeight: 300,
        padding: '20px 30px',
        marginTop: '30px',
        lineHeight: '1.5em',
    }
}

const ReadingDescription = ({ description}) => {
    return (
        <>
            <Grid
                item
                xs={12}
            >
                <Paper
                    sx={classes.yellowBar}
                >
                    <Typography
                        variant="h5"
                        sx={classes.yellowBarTitle}
                    >
                        Content
                    </Typography>
                </Paper>
                <Box sx={classes.yellowContent}>
                <Typography
                    variant="h6"
                    sx={classes.description}
                >
                    {description}
                </Typography>
                </Box>
            </Grid>
        </>
    );
}

export default ReadingDescription;