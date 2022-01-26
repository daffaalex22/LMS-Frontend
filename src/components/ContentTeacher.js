import Box from "@mui/material/Box";
import { yellow } from "@mui/material/colors";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import TeacherReading from "../pages/TeacherReading";
import AppBar from "./responsiveAppBar/ResponsiveAppBar";
import FooterDashboard from "./FooterDashboard";

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

export default function Content() {
  return (
    <>
      <AppBar />
      <Box sx={{ width: "100%", backgroundColor: yellow[600] }}>
        <TabPanel>
          <TeacherReading />
        </TabPanel>
      </Box>
      <FooterDashboard />
    </>
  );
}
