import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Ava from "../assets/images/avatar.jpg";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { yellow, indigo } from "@mui/material/colors";
import useFetch from "../customHooks/useFetch";
const classes = {
  experienceBar: {
    height: "auto",
    width: "100%",
    borderRadius: "10px",
    backgroundColor: indigo[400],
    display: "inline-block",
    position: "relative",
    top: "15px",
  },
  experienceBarTitle: {
    padding: "20px 30px",
    fontWeight: 500,
    color: "white",
    textAlign: "center",
  },
  ava: {
    width: "17vw",
    height: "17vw",
    maxWidth: 100,
    maxHeight: 100,
    marginTop: "40px",
    display: "inline-block",
  },
};

const ReviewItem = ({ enroll }) => {
  const {
    data: student,
    isPending: studentPending,
    error: studentError,
  } = useFetch("http://13.59.7.136:8080/students/" + enroll.studentId);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={7} md={4} lg={3}>
        <Box>
          <Avatar alt="Remy Sharp" src={student?.avatar} sx={classes.ava} />
          <Box
            sx={{
              display: "inline-block",
              position: "relative",
              bottom: "1.2rem",
              left: "20px",
            }}
          >
            <Typography variant="h5">{student?.name}</Typography>
            <Typography variant="h5" component="div">
              <StarRateRoundedIcon
                sx={{
                  color: indigo[500],
                  position: "relative",
                  top: "3px",
                  right: "2px",
                }}
              />
              {enroll?.rating}
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={9}
        container
        spacing={0}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Paper sx={classes.experienceBar}>
            <Typography variant="h6" sx={classes.experienceBarTitle}>
              {enroll?.review}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ReviewItem;
