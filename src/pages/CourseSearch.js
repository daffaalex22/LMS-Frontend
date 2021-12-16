import Grid from "@mui/material/Grid";
import { yellow, indigo } from "@mui/material/colors";
import AppBar from "../components/ResponsiveAppBar";
import NavTabs from "../components/NavTabs";
import FooterDashboard from "../components/FooterDashboard";
import FilterFields from "../components/FilterFields";
import CourseCard from "../components/CourseCard";
import CourseCardList from "../components/CourseCardList/CourseCardList";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';

const CourseSearch = () => {
    return (
        <Box>
            <AppBar />
            <NavTabs />
            <Box sx={{ backgroundColor: yellow[200], padding: '70px', minHeight: '50vh' }}>
                <FilterFields />
                <CourseCardList />
            </Box>
            <FooterDashboard />
        </Box>
    );
}

export default CourseSearch;