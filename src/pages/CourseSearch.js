import FilterFields from "../components/FilterFields";
import CourseCardList from "../components/courseCardList/CourseCardList";
import Box from "@mui/material/Box";

const CourseSearch = () => {
    return (
        <Box sx={{ padding: '70px 0', }}>
            <FilterFields />
            <CourseCardList />
        </Box>
    );
}

export default CourseSearch;