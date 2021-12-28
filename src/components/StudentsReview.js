import ReviewItem from "./ReviewItem";
import Grid from "@mui/material/Grid";
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
}

const StudentsReview = ({ enrollments, reviewItems, setReviewItems }) => {
    const [maxReview, setMaxReview] = useState(false)
    const [currentCount, setCurrentCount] = useState(3)

    const handleMoreReview = async () => {
        await setCurrentCount(reviewItems)
        setReviewItems(currentCount + 3)
    }

    useEffect(() => {
        if (reviewItems >= enrollments?.length) {
            setMaxReview(true)
        } else if (enrollments?.length === 0) {
            setMaxReview(true)
        } else {
            setMaxReview(false)
        }
        console.log(maxReview)
    }, [reviewItems, enrollments])

    return (
        <Grid
            item
            xs={12}
            container
            spacing={0}
        >
            {enrollments?.slice(0, reviewItems).map((enroll) => (
                <Grid item xs={12}>
                    <ReviewItem
                        enroll={enroll}
                    />
                </Grid>
            ))}
            <Grid
                item
                lg={11}
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
    );
}

export default StudentsReview;