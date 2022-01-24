import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Button, Grid } from "@mui/material";
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
// import { useParams } from "react-router";

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
    width: "60px",
    height: "60px",
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const openin = Boolean(anchorEl);
  const [contentTitles, setContentTitles] = useState([]);
  const { moduleId } = useParams();
  // const [module, setModule] = useState([])
  const intModule = parseInt(moduleId);

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

  const [video, setVideo] = useState({
    title: "",
    moduleId: 0,
    url: "",
    caption: "",
    order: 0,
  });

  const [errorInput, setErrorInput] = useState({
    title: false,
  });
  const [error, setError] = useState(null);

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

  const handleVideo = (e) => {
    const { name, value } = e.target;
    setVideo({ ...video, [name]: value });
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
      .post("http://13.59.7.136:8080/api/v1/readings", {
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

  const addNewVideos = (e) => {
    e.preventDefault();
    console.log("video Data: ", video);
    console.log("order :", video.order);
    axios
      .post("http://13.59.7.136:8080/api/v1/videos", {
        title: video?.title,
        moduleId: intModule,
        url: video?.url,
        caption: video?.caption,
        order: parseInt(video?.order),
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
          setOpen(false);
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

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickClose = () => {
    setOpen(false);
  };
  const handleClickOpen1 = () => {
    setOpen1(true);
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
                  onClick={handleClickOpen}
                >
                  Create Video
                </Button>
                <Dialog open={open} onClose={handleClickClose}>
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
                        Create Video
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
                        value={video?.title}
                        name="title"
                        error={errorInput.title}
                        helperText={
                          errorInput.title ? "please fill the title" : ""
                        }
                        onChange={handleVideo}
                      />

                      <TextField
                        id="order"
                        label="order"
                        type="order"
                        multiline
                        margin="dense"
                        fullWidth
                        value={video?.order}
                        name="order"
                        onChange={handleVideo}
                      />
                      <TextField
                        id="url"
                        label="url"
                        type="url"
                        multiline
                        margin="dense"
                        fullWidth
                        value={video?.url}
                        name="url"
                        onChange={handleVideo}
                      />
                      <TextField
                        id="caption"
                        label="caption"
                        type="caption"
                        multiline
                        margin="dense"
                        fullWidth
                        value={video?.caption}
                        name="caption"
                        onChange={handleVideo}
                      />
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClickClose} sx={classes.button}>
                        Cancel
                      </Button>
                      <Button onClick={addNewVideos} sx={classes.button}>
                        Submit
                      </Button>
                    </DialogActions>
                  </Grid>
                </Dialog>
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
