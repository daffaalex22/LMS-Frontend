import Grid from "@mui/material/Grid";
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
    yellowBarTitle: {
        padding: '20px 30px',
        fontWeight: 500
    },
    description: {
        fontWeight: 300,
        marginTop: '30px',
        lineHeight: '1.5em',
    }
}

const CourseDescription = () => {
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
                        variant="h4"
                        sx={classes.yellowBarTitle}
                    >
                        What You'll Learn
                    </Typography>
                </Paper>
                <Typography
                    variant="h5"
                    sx={classes.description}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta recusandae laborum natus soluta fuga optio similique nam voluptate impedit quo? Eaque vitae sint voluptas error dignissimos maiores at non aliquid!
                </Typography>
            </Grid>
            <Grid
                item
                xs={12}
            >
                <Paper
                    sx={classes.yellowBar}
                >
                    <Typography
                        variant="h4"
                        sx={classes.yellowBarTitle}
                    >
                        This Course Includes
                    </Typography>
                </Paper>
                <Typography
                    variant="h5"
                    sx={classes.description}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta recusandae laborum natus soluta fuga optio similique nam voluptate impedit quo? Eaque vitae sint voluptas error dignissimos maiores at non aliquid!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate repudiandae tempora aut facere ratione quis. Doloremque culpa veritatis expedita ipsam asperiores, corrupti, obcaecati earum modi exercitationem voluptas repellendus totam recusandae!
                </Typography>
            </Grid>
        </>
    );
}

export default CourseDescription;