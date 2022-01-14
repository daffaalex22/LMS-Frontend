import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import FirstSlide from "../../components/FirstSlide";
import education from "../../assets/images/education.png";
import Security from "../../assets/images/security.png";
import Vault from "../../assets/images/vault.png";
import Webshop from "../../assets/images/webshop.png";
import { indigo, yellow } from "@mui/material/colors";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper-bundle.css";
import "./HomePage.css";
import CarouselHome from "../../components/CarouselHome";
import InEduDesc from "../../components/InEduDesc";
import ValuesHome from "../../components/ValuesHome";
import CourseCarousel from "../../components/courseCarousel/CourseCarousel";
import useFetch from "../../customHooks/useFetch";

SwiperCore.use([Navigation, Pagination]);

const HomePage = () => {
  const {
    data: courses,
    isPending: coursesPending,
    error: coursesError,
  } = useFetch("http://13.59.7.136:8080/courses");

  return (
    <Box
      sx={{
        paddingBottom: "50px",
      }}
    >
      <CarouselHome />
      <Container maxWidth="xl">
        <InEduDesc />
        <ValuesHome />
      </Container>
      <Grid
        container
        justifyContent="flex-end"
        sx={{
          marginTop: "200px",
          marginBottom: "200px",
        }}
      >
        <CourseCarousel title="Courses" courses={courses} />
      </Grid>
    </Box>
  );
};

export default HomePage;
