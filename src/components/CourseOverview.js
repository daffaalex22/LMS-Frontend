import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import Star from "../assets/images/star.svg"
import { yellow, indigo } from "@mui/material/colors";
import { useState } from "react";
import EnrolledModal from "./EnrolledModal";
import { useNavigate, useParams } from "react-router";
import LaunchIcon from '@mui/icons-material/Launch';
import axios from "axios";

const classes = {
    thumbnail: {
        objectFit: 'cover',
        width: '100%',
        maxHeight: '655px',
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
        }
    },
}

const CourseOverview = ({ course, enroll, enrolled, setEnrolled, modulesRef, studentId }) => {
    const navigate = useNavigate()
    const { id } = useParams()

    const numOfReviews = enroll?.filter((enroll) => {
        return !(enroll?.rating == 0 && enroll?.reviews == "") && enroll
    }).length ?? "0"

    function refreshPage() {
        setTimeout(() => {
            window.location.reload(false);
        }, 500);
        console.log("page to reload");
    }

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        if (!enrolled) {
            setOpen(true)
            setEnrolled(true)
            axios
                .post("https://inedu-backend.onrender.com/api/v1/enrollments", {
                    courseId: parseInt(id),
                    studentId: studentId,
                })
                .then((resp) => {
                    console.log(resp);
                    if (resp.data.meta.status !== 200) {
                        console.log("Error:", resp.data.meta.messages)
                    } else {
                        // refreshPage();
                    }
                })
                .catch((e) => {
                    console.error(e);
                    if (e.response) {
                        console.log(e.response);
                    } else if (e.request) {
                        console.log(e.request);
                    }
                });
        } else {
            modulesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    };

    return (
        <>
            <Grid
                item
                xs={12}
                md={7}
                container
                spacing={0}
            >
                <Grid
                    item
                    xs={12}
                >
                    <img
                        src={course?.thumbnail}
                        alt="A Photo About Studying"
                        style={classes.thumbnail}
                    />
                </Grid>
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
                        <span>{course?.rating}</span>
                        <Typography
                            variant="h5"
                            sx={classes.reviewCount}
                        >
                            {"(" + numOfReviews + " Reviews)"}
                        </Typography>
                    </Typography>
                </Box>
                <Typography
                    variant="h5"
                    sx={{
                        marginTop: '25px'
                    }}
                >
                    {course?.description?.slice(0, 150)}
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        marginTop: '25px'
                    }}
                >
                    Created by: {course?.teacher?.name}
                </Typography>
                <a
                    href="#modules"
                >
                    <Button
                        variant="contained"
                        sx={{
                            ...classes.btn,
                            backgroundColor: enrolled ? "secondary" : "primary",
                            '&:hover': {
                                backgroundColor: enrolled ? "secondary.400" : "primary.400",
                            }
                        }}
                        onClick={handleOpen}
                        color={enrolled ? "secondary" : "primary"}
                    >
                        {enrolled ? <LaunchIcon /> : <AddIcon />}
                        {enrolled ? "Open Course" : "Enroll Course"}
                    </Button>
                </a>
            </Grid>
            <EnrolledModal
                open={open}
                setOpen={setOpen}
            />
        </>

    );
}

export default CourseOverview;