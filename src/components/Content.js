import Box from "@mui/material/Box";
import { yellow } from "@mui/material/colors";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import StudentReading from "../pages/StudentReading";
import CourseEnroll from "../pages/courseEnroll/CourseEnroll";
import AppBar from "./responsiveAppBar/ResponsiveAppBar";
import FooterDashboard from "./FooterDashboard";
import ResponsiveAppBar from "./responsiveAppBar/ResponsiveAppBar";

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
      <ResponsiveAppBar />
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
