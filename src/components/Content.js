import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import { useState } from "react";
import { yellow, indigo } from "@mui/material/colors";
import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import useWindowDimensions from "../customHooks/useWindowDimensions";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import StudentReading from "../pages/StudentReading";
import CourseEnroll from "../pages/courseEnroll/CourseEnroll";
import AppBar from "./responsiveAppBar/ResponsiveAppBar";
import FooterDashboard from "./FooterDashboard";
import ResponsiveAppBar from "./responsiveAppBar/ResponsiveAppBar";
import { useLocation } from "react-router-dom";
import SideBar from "./SideBar";
import VideosPage from "../pages/videosPage/VideosPage";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            backgroundColor: yellow[200],
            padding: "70px 0",
            minHeight: "50vh",
          }}
        >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const classes = {
  buttonn: {
    backgroundColor: indigo[500],
    borderRadius: "50%",
    padding: "14px",
    width: "60px",
    height: "64px",
    position: 'relative',
    top: '135px',
    left: '190px'
  },
};

export default function Layout() {
  const location = useLocation();
  const [openReadings, setOpenReadings] = useState(true);

  useEffect(() => {
    if (location.pathname.includes("/readings/")) {
      setOpenReadings(true);
    } else {
      setOpenReadings(false);
    }
  }, [location]);


  return (
    <>
      <ResponsiveAppBar />
      <Box sx={{ width: "100%", backgroundColor: yellow[600] }}>
        <Button variant="contained" sx={classes.buttonn}>
          <SideBar />
        </Button>
        {openReadings ?
          <StudentReading /> :
          <VideosPage />
        }
      </Box>
      <FooterDashboard />
    </>
  );
}
