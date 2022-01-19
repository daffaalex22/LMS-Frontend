import FilterFields from "../components/FilterFields";
import Box from "@mui/material/Box";
import CourseCardList from "../components/listCard/CourseCardList";

const CourseSearch = () => {
  return (
    <Box sx={{ padding: "70px 0" }}>
      <FilterFields />
      <CourseCardList />
    </Box>
  );
};

export default CourseSearch;
