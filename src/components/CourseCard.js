import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import { yellow, indigo } from "@mui/material/colors";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { GeneralContext } from "../contexts/GeneralContext";
import { useContext } from "react";
import { useNavigate } from "react-router";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import CreateIcon from "@mui/icons-material/Create";

const CourseCard = ({ course, role }) => {
  const { setOpenEnrollment, openEnrollment } = useContext(GeneralContext);
  const navigate = useNavigate();

  const handleClickCard = () => {
    navigate("/courses/enroll");
    setOpenEnrollment(true);
  };

  let lineMultiplier = 1;
  let descMultiplier = 1;

  if (course?.id === 1) {
    lineMultiplier = 2;
    descMultiplier = 4;
  }

  return (
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
          height="200"
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
              height: "80px",
              overflowY: "hidden",
            }}
          >
            <Typography
              variant="body2"
              color="text.primary"
              textAlign="justify"
              sx={
                {
                  // overflow: 'auto'
                }
              }
            >
              {course?.description?.length >= 175
                ? course?.description?.substring(0, 177) + "..."
                : course?.description}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ textAlign: "center", height: "9%" }}>
        <Grid container sx={{ paddingLeft: "12px" }}>
          <Grid item>
            <StarRoundedIcon
              sx={{ color: indigo[500], marginBottom: "-5px" }}
            />
            <Typography
              variant="body2"
              component="span"
              sx={{ fontWeight: 600, color: indigo[500], lineHeight: "2em" }}
            >
              {course?.rating}
            </Typography>
            <Button
              size="small"
              sx={{ fontWeight: 600, color: indigo[500], marginLeft: "5px" }}
            >
              See More
            </Button>
          </Grid>
          {role === "teacher" && (
            <Grid item direction="row-reverse">
              <Button
                size="small"
                sx={{
                  fontWeight: 600,
                  color: "error.main",
                  marginLeft: "5px",
                }}
              >
                <DeleteSweepIcon />
              </Button>
              <Button
                size="small"
                sx={{
                  fontWeight: 600,
                  color: "info.main",
                  marginLeft: "5px",
                }}
              >
                <CreateIcon />
              </Button>
            </Grid>
          )}
        </Grid>
      </CardActions>
    </Card>
  );
};

export default CourseCard;
