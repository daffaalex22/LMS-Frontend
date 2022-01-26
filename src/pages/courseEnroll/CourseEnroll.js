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
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";
import jwt_decode from "jwt-decode";

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
  const modulesRef = useRef(null)
  const { id } = useParams()
  const [filterReview, setFilterReview] = useState(0);
  const [enrollments, setEnrollments] = useState([]);
  const [course, setCourse] = useState({});
  const [courses, setCourses] = useState([]);
  const [reviewItems, setReviewItems] = useState(3);
  const [enrolled, setEnrolled] = useState(false);

  let decode = jwt_decode(localStorage.getItem("token"));

  useEffect(() => {
    decode = jwt_decode(localStorage.getItem("token"));
    console.log("decode", decode)
  }, []);


  const {
    data: courseData,
    isPending: coursePending,
    error: courseError,
  } = useFetch("http://13.59.7.136:8080/api/v1/courses/" + id);
  const {
    data: coursesData,
    isPending: coursesPending,
    error: coursesError,
  } = useFetch("http://13.59.7.136:8080/api/v1/courses/");
  const {
    data: enrollData,
    isPending: enrollmentsPending,
    error: enrollmentsError,
  } = useFetch("http://13.59.7.136:8080/api/v1/courses/" + id + "/enrollments");
  const {
    data: modulesData,
    isPending: modulesPending,
    error: modulesError,
  } = useFetch("http://13.59.7.136:8080/api/v1/courses/" + id + "/modules");


  useEffect(async () => {
    if (enrollData) {
      await setEnrollments(enrollData?.data);
    }
  }, [enrollData]);

  useEffect(() => {
    if (enrollments) {
      console.log("kedetect conditional", enrollments[0]?.studentId, decode?.id)
      for (let i = 0; i < enrollments?.length; i++) {
        if (enrollments[i]?.studentId == decode?.id) {
          setEnrolled(true)
          console.log("Kedetect Trerenroll")
        }
      }
    }
  }, [enrollments]);


  useEffect(() => {
    if (coursesData) {
      setCourses(coursesData?.data);
    }
  }, [coursesData]);

  useEffect(() => {
    if (courseData) {
      setCourse(courseData?.data);
    }
  }, [courseData]);

  useEffect(() => {
    let filtered = enrollData?.data?.filter(
      (enrollment) => enrollment.rating === filterReview
    );
    if (filterReview === 0) {
      filtered = enrollData?.data?.filter((enrollment) => enrollment);
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
              <CourseOverview
                modulesRef={modulesRef}
                course={course}
                enroll={enrollments}
                enrolled={enrolled}
                setEnrolled={setEnrolled}
                studentId={decode?.id}
              />
              <CourseDescription
                modulesRef={modulesRef}
                description={course?.description}
                modules={modulesData?.data}
                enrolled={enrolled}
                setEnrolled={setEnrolled}
              />
              <TheInstructor teacher={course?.teacher} />
              <StudentsFeedback
                setFilterReview={setFilterReview}
                course={course}
              />
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
