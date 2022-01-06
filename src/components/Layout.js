import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { yellow, indigo } from "@mui/material/colors";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import useWindowDimensions from "../customHooks/useWindowDimensions";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import CourseSearch from "../pages/CourseSearch";
import CourseEnroll from "../pages/courseEnroll/CourseEnroll";
import AppBar from "./ResponsiveAppBar";
import FooterDashboard from "./FooterDashboard";
import { useLocation } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";

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

export default function Layout() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const { height, width } = useWindowDimensions();
  const [openEnrollment, setOpenEnrollment] = useState(false);

  const handleChange = (event, newValue) => {
    navigate(valueToPathname[newValue]);
    setValue(newValue);
  };

  useEffect(() => {
    setValue(pathnameToValue[location.pathname]);
  }, []);

  useEffect(() => {
    if (location.pathname === "/courses") {
      setOpenEnrollment(false);
    }
  }, [location]);

  const pathnameToValue = {
    "/home": 0,
    "/courses": 1,
    "/courses/enroll": 2,
    "/about-us": 3,
  };

  const valueToPathname = {
    0: "/home",
    1: "/courses",
    2: "/courses/enroll",
    3: "/about-us",
  };

  return (
    <>
      <AppBar />
      <Box sx={{ width: "100%", backgroundColor: yellow[600] }}>
        <Box>
          <Tabs
            centered={width >= 389 ? true : false}
            variant={width > 370 ? "standard" : "scrollable"}
            scrollButtons="auto"
            allowScrollButtonsMobile
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
            centered
          >
            <Tab
              label="Home"
              sx={{ paddingLeft: "5%", paddingRight: "5%" }}
              {...a11yProps(0)}
            />
            <Tab
              label="Courses"
              sx={{ paddingLeft: "5%", paddingRight: "5%" }}
              {...a11yProps(0)}
            />
            <Tab
              label="Help"
              sx={{ paddingLeft: "5%", paddingRight: "5%" }}
              {...a11yProps(0)}
            />
            <Tab
              label="About Us"
              sx={{ paddingLeft: "5%", paddingRight: "5%" }}
              {...a11yProps(0)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <HomePage />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <>
            <CourseSearch />
          </>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <CourseEnroll />
        </TabPanel>
      </Box>
      <FooterDashboard />
    </>
  );
}
