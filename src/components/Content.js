import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { yellow, indigo } from "@mui/material/colors";
import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import useWindowDimensions from "../customHooks/useWindowDimensions";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import CourseSearch from "../pages/CourseSearch";
import StudentReading from "../pages/StudentReading";
import CourseEnroll from "../pages/courseEnroll/CourseEnroll";
import AppBar from "./ResponsiveAppBar";
import FooterDashboard from "./FooterDashboard";
import { useLocation } from "react-router-dom";

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
  return (
    <>
      <AppBar />
      <Box sx={{ width: "100%", backgroundColor: yellow[600] }}>
        <TabPanel>
          <StudentReading />
        </TabPanel>
        {/* <TabPanel value={value} index={1}>
          <StudentReading />
        </TabPanel> */}
        {/* component video */}
        {/* <TabPanel value={value} index={2}>
          <StudentReading />
        </TabPanel> */}
      </Box>
      <FooterDashboard />
    </>
  );
}
