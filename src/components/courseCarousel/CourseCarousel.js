import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { yellow, indigo } from "@mui/material/colors";
import CourseCard from "../CourseCard";
import Carousel from "react-elastic-carousel";
import './CourseCarousel.css'
import useFetch from "../../customHooks/useFetch";


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 600, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1000, itemsToShow: 3 },
];

const classes = {
    yellowBar: {
        height: 'auto',
        width: '100%',
        borderRadius: '40px 0 0 40px',
        backgroundColor: yellow[600]
    },
    yellowBarTitle: {
        padding: '50px 80px',
        fontWeight: 500
    },
}

const CourseCarousel = ({ title }) => {

    const {
        data: courses,
        isPending: coursesPending,
        error: coursesError,
    } = useFetch("https://inedu-backend.onrender.com/api/v1/courses");

    return (
        <Grid
            item
            xs={12}
            md={10}
            container
            spacing={0}
            sx={{
                marginTop: '50px',
                width: '100%'
            }}
        >
            <Paper
                sx={classes.yellowBar}
            >
                <Grid
                    container
                    spacing={1}
                    sx={{
                        width: '100%'
                    }}
                >
                    <Grid
                        item
                        xs={12}
                        container
                        justifyContent="flex-start"
                    >
                        <Typography
                            variant="h2"
                            sx={classes.yellowBarTitle}
                        >
                            {title}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        container
                        justifyContent="space-around"
                        sx={{
                            margin: '0 20px 50px 20px',
                        }}
                    >
                        <Carousel breakPoints={breakPoints}>
                            {courses?.data?.slice(0, 10).map(course => (
                                <Box
                                    sx={{
                                        margin: '50px'
                                    }}
                                >
                                    <CourseCard
                                        course={course}
                                    />
                                </Box>
                            ))}
                        </Carousel>
                    </Grid>
                </Grid>
            </Paper >
        </Grid >
    );
}

export default CourseCarousel;