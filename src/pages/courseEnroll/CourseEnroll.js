import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Avatar from '@mui/material/Avatar';
import Thumbnail from "../../assets/images/white_laptop.jpg"
import Ava from "../../assets/images/avatar.jpg"
import Star from "../../assets/images/star.svg"
import { yellow, indigo } from "@mui/material/colors";
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import StudentsFeedback from "../../components/StudentsFeedback";
import TheInstructor from "../../components/TheInstructor";
import CourseDescription from "../../components/CourseDescription";
import StudentsReview from "../../components/StudentsReview";
import CourseCarousel from "../../components/courseCarousel/CourseCarousel";
import AddIcon from '@mui/icons-material/Add';
import useFetch from "../../customHooks/useFetch";
import ReactLoading from 'react-loading';

const classes = {
    thumbnail: {
        width: '100%',
        height: '100%',
        borderRadius: '20px',
    },
    star: {
        position: 'relative',
        top: '8px',
        marginRight: '10px',
    },
    reviewCount: {
        display: 'inline',
        position: 'relative',
        bottom: '6px',
        left: '10px'
    },
    btn: {
        marginTop: '20px',
        backgroundColor: indigo[500],
        padding: '10px 25px',
        borderRadius: '20px',
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
    description: {
        fontWeight: 300,
        marginTop: '30px',
        textAlign: 'justify'
    },
    lightYellowBar: {
        width: '100%',
        borderRadius: '25px',
        backgroundColor: yellow[200],
        margin: '0px 30px 20px 30px',
        padding: '100px auto',
        textAlign: 'center'
    },
    smallRatingBar: {}
}


const CourseEnroll = () => {
    const { data: course, isPending: coursePending, error: courseError } = useFetch('http://localhost:8000/courses/' + 1)
    const { data: courses, isPending: coursesPending, error: coursesError } = useFetch('http://localhost:8000/courses')

    return (
        <>
            {coursePending || coursesPending ?
                <Grid
                    container
                    spacing={0}
                    justifyContent="center"
                >
                    <ReactLoading
                        type="balls"
                        color={indigo[500]}
                        height="auto"
                        width="17%"
                    />
                </Grid> :
                <>
                    <Container>
                        <Grid
                            container
                            spacing={5}
                        >
                            <Grid
                                item
                                xs={12}
                                md={7}
                            >
                                <img
                                    src={course?.thumbnail}
                                    alt="A Photo About Studying"
                                    style={classes.thumbnail}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                md={5}
                            >
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontWeight: 500
                                    }}
                                >
                                    {course?.title}
                                </Typography>
                                <Box
                                    sx={{
                                        marginTop: '20px'
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            display: 'inline'
                                        }}
                                        variant="h3"
                                        component="div"
                                    >
                                        <img
                                            src={Star}
                                            alt="a star"
                                            style={classes.star}
                                        />
                                        <span>4.9</span>
                                        <Typography
                                            variant="h5"
                                            sx={classes.reviewCount}
                                        >
                                            (557 Reviews)
                                        </Typography>
                                    </Typography>
                                </Box>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        marginTop: '25px'
                                    }}
                                >
                                    {course?.description}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        marginTop: '25px'
                                    }}
                                >
                                    Created by: {course?.teacher?.name}
                                </Typography>
                                <Button
                                    variant="contained"
                                    sx={classes.btn}
                                >
                                    <AddIcon />
                                    Enroll Course
                                </Button>
                            </Grid>
                            <CourseDescription
                                description={course?.description}
                                syllabus={course?.syllabus}
                            />
                            <TheInstructor
                                teacher={course?.teacher}
                            />
                            <StudentsFeedback />
                            <StudentsReview />
                        </Grid >
                    </Container >
                    <Grid
                        container
                        spacing={0}
                        justifyContent="flex-end"
                    >
                        <CourseCarousel
                            courses={courses}
                        />
                    </Grid>
                </>
            }
        </>
    );
}

export default CourseEnroll;