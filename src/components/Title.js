import { Button, Grid } from "@mui/material";
import SideBar from "../components/SideBar";
import Typography from "@mui/material/Typography";
import { yellow, indigo } from "@mui/material/colors";



const Title = (props) => {
  const { reading } = props;
  console.log("reading", reading);
  return (
    <>
      <Grid
        item
        xs={9}
        md={9}
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
