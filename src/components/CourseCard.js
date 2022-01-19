import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { yellow, indigo } from "@mui/material/colors";
import {
  Button,
  CardActionArea,
  CardActions,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
} from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { GeneralContext } from "../contexts/GeneralContext";
import { useContext } from "react";
import { useNavigate } from "react-router";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import CreateIcon from "@mui/icons-material/Create";
import { useState } from "react";
import useFetch from "../customHooks/useFetch";

const CourseCard = ({ course, role, openEdit, onDelete }) => {
  const [deleteAlert, setDeleteAlert] = useState(false);
  const { setOpenEnrollment, openEnrollment } = useContext(GeneralContext);
  const navigate = useNavigate();
  const {
    data: enrollData,
    isPending: enrollmentsPending,
    error: enrollmentsError,
  } = useFetch("http://13.59.7.136:8080/api/v1/courses/" + 1 + "/enrollments");

  const handleClickCard = () => {
    navigate("/courses/enroll/" + course?.id);
    setOpenEnrollment(true);
  };

  let lineMultiplier = 1;
  let descMultiplier = 1;

  const openAlert = () => {
    setDeleteAlert(true);
  };
  const closeAlert = () => {
    setDeleteAlert(false);
  };

  return (
    <>
      <Card
        sx={{
          width: 345,
          maxWidth: "55vw",
          margin: "auto",
          borderRadius: "25px",
          backgroundColor: yellow[400],
        }}
      >
        <CardActionArea
          onClick={handleClickCard}
          sx={{
            height: "89%",
          }}
        >
          <CardMedia
            component="img"
            height="240"
            image={course?.thumbnail}
            alt="Course Thumbnail"
          />
          <CardContent
            sx={{
              height: "40%",
            }}
          >
            <Box
              sx={{
                overflowY: "hidden",
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  height: "2.5em",
                  fontWeight: 600,
                  color: indigo[500],
                }}
              >
                {course?.title}
              </Typography>
            </Box>
            <Box
              sx={{
                height: "40px",
                overflowY: "hidden",
              }}
            >
              <Typography
                variant="body2"
                color="text.primary"
                textAlign="justify"
              >
                {course?.description?.length >= 88
                  ? course?.description?.substring(0, 85) + "..."
                  : course?.description}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ textAlign: "center", height: "9%" }}>
          <Grid container sx={{ paddingLeft: "12px" }}>
            <Grid container item xs={5}>
              <Grid item xs={4}>
                <StarRoundedIcon
                  sx={{
                    color: indigo[500],
                    position: "relative",
                    top: "10%",
                  }}
                />
                <Typography
                  variant="body2"
                  component="span"
                  sx={{
                    fontWeight: 600,
                    color: indigo[500],
                    position: "relative",
                    top: "-10%",
                  }}
                >
                  {course.rating ? course.rating : "0"}
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Button
                  size="small"
                  sx={{
                    fontWeight: 600,
                    color: indigo[500],
                    marginLeft: "5px",
                  }}
                >
                  See More
                </Button>
              </Grid>
            </Grid>
            {role === "Teacher" && (
              <Grid container item xs={7} justifyContent="flex-end">
                <IconButton
                  onClick={openAlert}
                  sx={{
                    color: "error.main",
                  }}
                >
                  <DeleteSweepIcon />
                </IconButton>
                <IconButton
                  size="small"
                  onClick={() => openEdit(course)}
                  sx={{
                    color: "info.main",
                  }}
                >
                  <CreateIcon />
                </IconButton>
              </Grid>
            )}
          </Grid>
        </CardActions>
      </Card>
      <Dialog
        open={deleteAlert}
        onClose={closeAlert}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Delete Alert</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Apakah anda yakin akan menghapus course {course.title} ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeAlert} color="error">
            Tidak
          </Button>
          <Button
            onClick={() => {
              closeAlert();
              onDelete(course.id);
            }}
            color="success"
            autoFocus
          >
            Iya
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CourseCard;
