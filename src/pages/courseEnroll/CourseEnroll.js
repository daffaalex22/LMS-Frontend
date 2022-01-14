import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { yellow, indigo } from "@mui/material/colors";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import StudentsFeedback from "../../components/StudentsFeedback";
import TheInstructor from "../../components/TheInstructor";
import CourseDescription from "../../components/CourseDescription";
import StudentsReview from "../../components/StudentsReview";
import CourseCarousel from "../../components/courseCarousel/CourseCarousel";
import useFetch from "../../customHooks/useFetch";
import ReactLoading from "react-loading";
import CourseOverview from "../../components/CourseOverview";
import { useState, useEffect } from "react";

const classes = {
  thumbnail: {
    width: "100%",
    height: "100%",
    borderRadius: "20px",
  },
  star: {
    position: "relative",
    top: "8px",
    marginRight: "10px",
  },
  reviewCount: {
    display: "inline",
    position: "relative",
    bottom: "6px",
    left: "10px",
  },
  btn: {
    marginTop: "20px",
    backgroundColor: indigo[500],
    padding: "10px 25px",
    borderRadius: "20px",
    "&:hover": {
      backgroundColor: indigo[400],
      borderColor: indigo[500],
    },
  },
  yellowBar: {
    height: "auto",
    width: "100%",
    borderRadius: "10px",
    backgroundColor: yellow[600],
  },
  yellowBarTitle: {
    padding: "20px 30px",
    fontWeight: 500,
  },
  description: {
    fontWeight: 300,
    marginTop: "30px",
    textAlign: "justify",
  },
  lightYellowBar: {
    width: "100%",
    borderRadius: "25px",
    backgroundColor: yellow[200],
    margin: "0px 30px 20px 30px",
    padding: "100px auto",
    textAlign: "center",
  },
};

const CourseEnroll = () => {
  const [filterReview, setFilterReview] = useState(0);
  const [enrollments, setEnrollments] = useState(null);
  const [reviewItems, setReviewItems] = useState(3);

  const {
    data: course,
    isPending: coursePending,
    error: courseError,
  } = useFetch("http://13.59.7.136:8080/courses/" + 1);
  const {
    data: courses,
    isPending: coursesPending,
    error: coursesError,
  } = useFetch("http://13.59.7.136:8080/courses");
  const {
    data: enrollData,
    isPending: enrollmentsPending,
    error: enrollmentsError,
  } = useFetch("http://13.59.7.136:8080/enrollments");

  useEffect(() => {
    if (enrollData) {
      setEnrollments(enrollData);
    }
  }, [enrollData]);

  useEffect(() => {
    let filtered = enrollData?.filter(
      (enrollment) => enrollment.rating === filterReview
    );
    if (filterReview === 0) {
      filtered = enrollData?.filter((enrollment) => enrollment);
    }
    setEnrollments(filtered);
    setReviewItems(3);
  }, [filterReview]);

  return (
    <Box sx={{ padding: "70px 0" }}>
      {coursePending || coursesPending || enrollmentsPending ? (
        <Grid container spacing={0} justifyContent="center">
          <ReactLoading
            type="balls"
            color={indigo[500]}
            height="auto"
            width="17%"
          />
        </Grid>
      ) : (
        <>
          <Container>
            <Grid container spacing={5}>
              <CourseOverview course={course} />
              <CourseDescription
                description={course?.description}
                syllabus={course?.syllabus}
              />
              <TheInstructor teacher={course?.teacher} />
              <StudentsFeedback setFilterReview={setFilterReview} />
              <StudentsReview
                enrollments={enrollments}
                reviewItems={reviewItems}
                setReviewItems={setReviewItems}
              />
            </Grid>
          </Container>
          <Grid container spacing={0} justifyContent="flex-end">
            <CourseCarousel title="Students Also Bought" courses={courses} />
          </Grid>
        </>
      )}
    </Box>
  );
};

export default CourseEnroll;
