import Grid from "@mui/material/Grid";
import { yellow, indigo } from "@mui/material/colors";
import AppBar from "../components/ResponsiveAppBar";
import FooterDashboard from "../components/FooterDashboard";
import FilterFields from "../components/FilterFields";
import CourseCard from "../components/CourseCard";
import CourseCardList from "../components/courseCardList/CourseCardList";
import Layout from '../components/Layout'
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import Box from "@mui/material/Box";

const CourseSearch = () => {
    return (
        <Box sx={{ padding: 0 }}>
            {/* <Layout></Layout> */}
            <FilterFields />
            <CourseCardList />
            {/* </Layout> */}
        </Box>
    );
}

export default CourseSearch;