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
import { useNavigate } from "react-router";

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

const CourseOverview = ({ course }) => {
    const navigate = useNavigate()
    const [enrolled, setEnrolled] = useState(false)
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        if (enrolled) {
            navigate("/modules/1/videos/1")
        }
        setOpen(true)
        setEnrolled(true)
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
                    <AddIcon />
                    {enrolled ? "Open Course" : "Enroll Course"}
                </Button>
            </Grid>
            <EnrolledModal
                open={open}
                setOpen={setOpen}
            />
        </>

    );
}

export default CourseOverview;