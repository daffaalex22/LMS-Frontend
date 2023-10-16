import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { yellow, indigo } from "@mui/material/colors";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

const classes = {
  yellowBar: {
    height: "auto",
    width: "100%",
    borderRadius: "10px",
    backgroundColor: yellow[600],
  },
  yellowContent: {
    height: "auto",
    width: "100%",
    borderRadius: "10px",
    backgroundColor: yellow[300],
    marginTop: '50px'
  },
  yellowBarTitle: {
    padding: "20px 30px",
    fontWeight: 500,
  },
  description: {
    fontWeight: 300,
    padding: "20px 30px",
    lineHeight: "1.5em",
  },
};

function refreshPage() {
  setTimeout(() => {
    window.location.reload(false);
  }, 500);
  console.log("page to reload");
}

const ReadingDescription = ({ description }) => {
  const { moduleId, id } = useParams();
  const onDelete = () => {
    axios
      .delete(`https://inedu-backend.onrender.com/api/v1/readings/${id}`)
      .then((resp) => {
        console.log(resp);
        refreshPage();
        if (resp.data.meta.status !== 200) {
          console.log(resp);
        } else {
          console.log(resp);
        }
      })
      .catch((e) => {
        console.error(e);
        refreshPage();
        if (e.response) {
          console.log(e.response);
        } else if (e.request) {
          console.log(e.request);
        }
      });
  };
  const user = localStorage.getItem("user");

  return (
    <>
      {/* <Grid container item xs={12}>
        <Paper sx={classes.yellowBar}>
          <Grid container spacing={10} item xs={12}>
            <Grid item xs={2} md={2}>
              <Typography variant="h5" sx={classes.yellowBarTitle}>
                Content
              </Typography>
            </Grid>
            <Grid item xs={10} md={10} sx={{ justifyContent: "flex-end" }}>
              <Button
                variant="contained"
                endIcon={<ModeEditIcon />}
                href={`/modules/${moduleId}/readings-teacher/${id}`}
              >
                Edit
              </Button>
            </Grid>
          </Grid>
        </Paper>
        <Box sx={classes.yellowContent}>
          <Typography variant="h6" sx={classes.description}>
            {description}
          </Typography>
        </Box>
      </Grid> */}
      <Grid item xs={12} container spacing={1}>
        <Grid item xs={12}>
          <Paper sx={classes.yellowBar}>
            <Grid container spacing={1} justifyContent="space-between">
              <Grid
                item
                xs={8}
                sm={10}
                md={10}
                container
                columns={{ xs: 12, sm: 14, md: 13 }}
              >
                <Grid item xs={6} sm={4} md={3}>
                  <Typography variant="h5" sx={classes.yellowBarTitle}>
                    Content
                  </Typography>
                </Grid>
              </Grid>
              {user == "Teacher" ?
                <Grid
                  item
                  xs={4}
                  sm={2}
                  md={2}
                  container
                  justifyContent="flex-end"
                  alignItems="center"
                  direction="row"
                  spacing={0}
                >
                  <Grid
                    item
                    xs={6}
                    // sm={5}
                    md={6}
                    lg={5}
                    container
                  >
                    <IconButton
                      sx={{
                        height: "50px",
                        width: "50px",
                        color: "#4fc3f7",
                      }}
                      component={Link}
                      to={`/modules/${moduleId}/readings-teacher/${id}`}
                    >
                      <EditIcon
                        sx={{
                          height: "100%",
                          width: "100%",
                          color: "#4fc3f7",
                        }}
                      />
                    </IconButton>
                  </Grid>
                  <Grid item xs={6} md={6} lg={5} container>
                    <IconButton
                      sx={{
                        height: "50px",
                        width: "50px",
                        color: "red",
                      }}
                      onClick={onDelete}
                    >
                      <DeleteForeverIcon
                        sx={{
                          height: "100%",
                          width: "100%",
                          color: "red",
                        }}
                      />
                    </IconButton>
                  </Grid>
                </Grid>
                : null
              }
            </Grid>
          </Paper>
        </Grid>
        <Box sx={classes.yellowContent}>
          <Typography variant="h6" sx={classes.description}>
            {description}
          </Typography>
        </Box>
      </Grid>
    </>
  );
};

export default ReadingDescription;
