import ReviewItem from "./ReviewItem";
import Grid from "@mui/material/Grid";
import { yellow, indigo } from "@mui/material/colors";
import Button from "@mui/material/Button";

const classes = {
    btn: {
        marginTop: '20px',
        backgroundColor: indigo[500],
        padding: '10px 30px',
        borderRadius: '15px',
        '&:hover': {
            backgroundColor: indigo[400],
            borderColor: indigo[500],
        }
    },
}

const StudentsReview = () => {
    return (
        <Grid
            item
            xs={12}
            container
            spacing={0}
        >
            <Grid item xs={12}>
                <ReviewItem />
            </Grid>
            <Grid item xs={12}>
                <ReviewItem />
            </Grid>
            <Grid item xs={12}>
                <ReviewItem />
            </Grid>
            <Grid
                item
                lg={11}
                container
                justifyContent="flex-end"
                sx={{
                    marginTop: '25px'
                }}
            >
                <Button
                    variant="contained"
                    sx={classes.btn}
                >
                    See More
                </Button>
            </Grid>
        </Grid>
    );
}

export default StudentsReview;