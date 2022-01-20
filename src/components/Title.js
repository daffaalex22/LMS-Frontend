import { Button, Grid } from "@mui/material";
import SideBar from "../components/SideBar";
import Typography from "@mui/material/Typography";
import { yellow, indigo } from "@mui/material/colors";

const classes = {
  buttonn: {
    backgroundColor: indigo[500],
    borderRadius: "50%",
    paddingTop: "12px",
    width: "60px",
    height: "60px",
  },
};

const Title = (props) => {
  const { reading } = props;
  console.log("reading", reading);
  return (
    <>
      <Grid item xs={2} md={2}>
        <Button variant="contained" sx={classes.buttonn}>
          <SideBar />
        </Button>
      </Grid>
      <Grid
        item
        xs={10}
        md={10}
        sx={{
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 500,
          }}
        >
          {reading}
        </Typography>
      </Grid>
    </>
  );
};

export default Title;
