import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { yellow, indigo, white } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import { useState, useEffect } from "react";
import SwitchVideoOutlinedIcon from "@mui/icons-material/SwitchVideoOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import "./TitleSideBar/TitleSideBar.css";
import { Link } from "react-router-dom";
import {
  useReadingData,
  useVideoData,
  useModuleData,
  useRefreshPage,
} from "./SideBar.Hook";
import axios from "axios";
import { useParams } from "react-router";
import { GeneralContext } from "../contexts/GeneralContext";
import { useContext } from "react";
import VideoFormDialogue from "./VideoFormDialogue";
import { useNavigate } from "react-router";

const classes = {
  container: {
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  title: {
    paddingLeft: "20px",
    justify: "center",
  },
  iconVideo: {
    paddingLeft: "20px",
  },
  iconReading: {
    paddingLeft: "20px",
  },
  video: {
    padding: "10px 20px",
    justify: "center",
  },
  reading: {
    padding: "10px 20px",
    justify: "center",
  },
  buttonn: {
    backgroundColor: indigo[500],
    borderRadius: "50%",
    maxWidth: "60px",
    height: "64px",
  },
  button: {
    backgroundColor: indigo[600],
    color: "#fff",
  },
  TextField: {
    color: "#fff",
  },
};

function refreshPage() {
  setTimeout(() => {
    window.location.reload(false);
  }, 200);
  console.log("page to reload");
}

const TitleSideBar = () => {
  const navigate = useNavigate()
  const { video, setVideo } = useContext(GeneralContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const {
    openVideoForm,
    setOpenVideoForm,
    handleOpenVideoForm,
    errorInput,
    setErrorInput,
    handleVideo,
    isEditingVideo,
    setIsEditingVideo,
    error,
    setError
  } = useContext(GeneralContext);
  const [open1, setOpen1] = React.useState(false);
  const openin = Boolean(anchorEl);
  const [contentTitles, setContentTitles] = useState([]);
  const { moduleId, videoId } = useParams();
  // const [module, setModule] = useState([])
  const intModule = parseInt(moduleId);
  const user = localStorage.getItem("user");

  // Get Data
  const { readingsData: dataRead } = useReadingData();
  const { videosData: dataVideo } = useVideoData();
  const { moduleData: dataModule } = useModuleData();

  const [reading, setReading] = useState({
    title: "",
    moduleId: intModule,
    content: "",
    order: 0,
  });

  const handleReading = (e) => {
    console.log(reading);
    const { name, value } = e.target;
    setReading({ ...reading, [name]: value });
    if (value !== "") {
      setErrorInput({ ...errorInput, [name]: false });
    }
    if (value === "") {
      setErrorInput({ ...errorInput, [name]: true });
    }
  };

  const addNewReading = (e) => {
    e.preventDefault();
    console.log("Reading Data: ", reading);

    console.log("Reading Data moduke: ", moduleId);
    console.log("order :", reading.order);
    axios
      .post("https://inedu-backend.onrender.com/api/v1/readings", {
        // ...reading,
        title: reading?.title,
        moduleId: intModule,
        content: reading?.content,
        order: parseInt(reading?.order),
      })
      .then((resp) => {
        console.log(resp);
        if (resp.data.meta.status !== 200) {
          setError(resp.data.meta.messages);
          setReading({
            title: "",
            content: "",
            order: 0,
          });
          setOpen1(false);
        }
      })
      .catch((e) => {
        console.error(e);
        if (e.response) {
          console.log(e.response);
        } else if (e.request) {
          console.log(e.request);
        }
      });
  };

  const submitVideoForm = (e) => {
    e.preventDefault();
    if (!video?.title) {
      setErrorInput({ ...errorInput, title: true })
    } else if (!video?.url) {
      setErrorInput({ ...errorInput, url: true })
    } else if (!video?.order) {
      setErrorInput({ ...errorInput, order: true })
    } else if (isEditingVideo) {
      axios
        .put("https://inedu-backend.onrender.com/api/v1/videos/" + videoId, {
          title: video?.title,
          moduleId: intModule,
          url: video?.url,
          caption: video?.caption,
          order: parseInt(video?.order),
          attachment: video?.attachment,
          quiz: video?.quiz
        })
        .then((resp) => {
          console.log(resp);
          if (resp.data.meta.status !== 200) {
            setError(resp.data.meta.messages);
            setVideo({
              title: "",
              moduleId,
              url: "",
              caption: "",
              order: 0,
            });
          }
          setOpenVideoForm(false);
          refreshPage()
        })
        .catch((e) => {
          console.error(e);
          if (e.response) {
            console.log(e.response);
          } else if (e.request) {
            console.log(e.request);
          }
        });
    } else {
      axios
        .post("https://inedu-backend.onrender.com/api/v1/videos", {
          title: video?.title,
          moduleId: intModule,
          url: video?.url,
          caption: video?.caption,
          order: parseInt(video?.order),
          attachment: video?.attachment,
          quiz: video?.quiz
        })
        .then((resp) => {
          console.log(resp);
          if (resp.data.meta.status !== 200) {
            setError(resp.data.meta.messages);
            setVideo({
              title: "",
              moduleId,
              url: "",
              caption: "",
              order: 0,
            });
          }
          setOpenVideoForm(false);
          refreshPage()
        })
        .catch((e) => {
          console.error(e);
          if (e.response) {
            console.log(e.response);
          } else if (e.request) {
            console.log(e.request);
          }
        });
    }
  };

  const handleClickOpen1 = () => {
    navigate("/modules/" + intModule + "/readings-teacher")
    // setOpen1(true);
  };
  const handleClickClose1 = () => {
    setOpen1(false);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  let dataContent = [];

  useEffect(() => {
    let length = dataRead.length >= dataVideo.length ? dataRead.length : dataVideo.length
    if (dataRead && dataVideo) {
      for (let i = 0; i < length; i++) {
        if (dataRead[i]) {
          dataContent.push(dataRead[i])
        }
        if (dataVideo[i]) {
          dataContent.push(dataVideo[i])
        }
      }
    }
    console.log("dataContent", dataContent)
    console.log("dataVideo", dataVideo)
    setContentTitles(dataContent?.map((item, key) => (
      item?.url ?
        <ListItem
          key={item.id}
          disablePadding
        >
          <ListItemButton>
            <ListItemIcon>
              <SwitchVideoOutlinedIcon />
            </ListItemIcon>
            <Link
              to={`/modules/${moduleId}/videos/${item.id}`}
              style={{ textDecoration: "none", color: "black" }}
              onClick={refreshPage}
            >
              <ListItemText primary={item.title} />
            </Link>
          </ListItemButton>
        </ListItem>
        :
        <ListItem
          key={key}
          disablePadding
        //   onClick={}
        >
          <ListItemButton
            sx={{
              width: '100%'
            }}
          >
            <ListItemIcon>
              <MenuBookOutlinedIcon />
            </ListItemIcon>
            <Link
              to={`/modules/${moduleId}/readings/${item.id}`}
              style={{ textDecoration: "none", color: "black" }}
              onClick={refreshPage}
            >
              <ListItemText primary={item.title} />
            </Link>
          </ListItemButton>

        </ListItem>
    )))
  }, [dataRead, dataVideo]);

  return (
    <>
      <Grid container sx={classes.container}>
        <Grid item xs={7} md={7}>
          <Typography variant="h6" sx={classes.title}>
            {dataModule?.title}
          </Typography>
        </Grid>
        {user == "Teacher" ?
          <Grid item xs={4} md={4}>
            <Button variant="contained" sx={classes.buttonn}>
              <AddIcon
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={openin ? "true" : undefined}
                onClick={handleClick}
              />
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={openin}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                  color: indigo,
                }}
              >
                <MenuItem>
                  <Button
                    variant="text"
                    sx={{ color: "black" }}
                    onClick={handleOpenVideoForm}
                  >
                    Create Video
                  </Button>
                  <VideoFormDialogue />
                </MenuItem>
                <MenuItem>
                  <Button
                    variant="text"
                    sx={{ color: "black" }}
                    onClick={handleClickOpen1}
                  >
                    Create Reading
                  </Button>
                  <Dialog open={open1} onClose={handleClickClose1}>
                    <Grid
                      item
                      xs={12}
                      md={12}
                      sx={{
                        backgroundColor: indigo[500],
                      }}
                    >
                      <DialogTitle>
                        <Typography
                          variant="h4"
                          sx={{
                            fontWeight: 500,
                            color: "#fff",
                          }}
                        >
                          Create Reading
                        </Typography>
                      </DialogTitle>
                      <DialogContent>
                        <TextField
                          id="title"
                          label="title"
                          type="title"
                          multiline
                          margin="dense"
                          fullWidth
                          value={reading?.title}
                          name="title"
                          error={errorInput.title}
                          helperText={
                            errorInput.title ? "please fill the title" : ""
                          }
                          onChange={handleReading}
                        />
                        <TextField
                          id="order"
                          label="order"
                          type="order"
                          multiline
                          margin="dense"
                          fullWidth
                          value={reading?.order}
                          name="order"
                          onChange={handleReading}
                        />
                        <TextField
                          id="content"
                          label="content"
                          type="content"
                          multiline
                          margin="dense"
                          fullWidth
                          value={reading?.content}
                          name="content"
                          onChange={handleReading}
                        />
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClickClose1} sx={classes.button}>
                          Cancel
                        </Button>
                        <Button onClick={addNewReading} sx={classes.button}>
                          Submit
                        </Button>
                      </DialogActions>
                    </Grid>
                  </Dialog>
                </MenuItem>
              </Menu>
            </Button>
          </Grid>
          : null
        }
      </Grid>
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: yellow[600] }}>
        <nav aria-label="main mailbox folders">
          <List>
            {contentTitles}
          </List>
        </nav>
      </Box>
    </>
  );
};

export default TitleSideBar;
