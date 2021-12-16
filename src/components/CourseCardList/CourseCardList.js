import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CourseCard from "../CourseCard";
import Masonry from 'react-masonry-css';
import './CourseCardList.css';

const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1
};

const array = [0, 1, 2, 3, 4]

const CourseCardList = () => {
    return (
        <Container sx={{ paddingTop: '50px' }}>
            <Grid
                container
                spacing={3}
                justifyContent="flex-start"
                alignItems="center"
            >
                {array.map(item => (
                    <Grid item xs={12} md={6} lg={4}>
                        <CourseCard />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default CourseCardList;