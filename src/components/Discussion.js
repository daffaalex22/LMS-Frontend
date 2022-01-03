import DiscussionTeachers from "./DiscussionTeachers";
import DisscussionStudent from "./DisscussionStudent";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { yellow, indigo } from "@mui/material/colors";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";

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
}
const Discussion = ({ threads, reviewItems, setReviewItems }) => {
    const [maxReview, setMaxReview] = useState(false)
    const [currentCount, setCurrentCount] = useState(3)

    const handleMoreReview = async () => {
        await setCurrentCount(reviewItems)
        setReviewItems(currentCount + 3)
    }

    useEffect(() => {
        if (reviewItems >= threads?.length) {
            setMaxReview(true)
        } else if (threads?.length === 0) {
            setMaxReview(true)
        } else {
            setMaxReview(false)
        }
        console.log(maxReview)
    }, [reviewItems, threads])

    return (
        <>
        <Grid
            item
            xs={12}
            container
            spacing={0}
        >
            <Paper
                sx={classes.yellowBar}
            >
                <Typography
                    variant="h5"
                    sx={classes.yellowBarTitle}
                >
                    Discussion
                </Typography>
            </Paper>
            {threads?.slice(0, reviewItems).map((thread) => (
                <Grid item xs={12}>
                    {thread.userType === "student" ? <DisscussionStudent thread={thread} /> : <DiscussionTeachers thread={thread} />}
                </Grid>
            ))}
            <Grid
                item
                lg={12}
                container
                justifyContent="flex-end"
                sx={{
                    marginTop: '25px'
                }}
            >
                {!maxReview ?
                    <Button
                        variant="contained"
                        sx={classes.btn}
                        onClick={handleMoreReview}
                    >
                        See More
                    </Button>
                    : null
                }
            </Grid>
        </Grid>
        </>
    );
}

export default Discussion;