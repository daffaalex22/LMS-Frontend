import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { yellow, indigo, white } from "@mui/material/colors";
import AddIcon from '@mui/icons-material/Add';
import { useState, useEffect } from "react";
import SwitchVideoOutlinedIcon from '@mui/icons-material/SwitchVideoOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import useFetch from "use-http";
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import './TitleSideBar/TitleSideBar.css';
import { useCallback } from "react";
import {useReadingData, useVideoData} from './SideBar.Hook';
import axios from "axios";
// import { useParams } from "react-router";

const classes = {
    container: {
        paddingTop: "10px",
        paddingBottom:"10px",
    },
    title: {
        paddingLeft:"20px",
        justify:"center",
    },
    iconVideo: {
        paddingLeft:"20px",
    },
    iconReading: {
        paddingLeft:"20px",
    },
    video: {
        padding:"10px 20px",
        justify:"center"
    },
    reading: {
        padding:"10px 20px",
        justify:"center"
    },
    buttonn: {
        backgroundColor: indigo[500],
        borderRadius: '50%',
        width : '60px',
        height: '60px',
    },
    button: {
        backgroundColor: indigo[600],
        color: "#fff"
    },
    TextField: {
       color: "#fff"
    },
}

const TitleSideBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const openin = Boolean(anchorEl);
    const { videosData, moduleId:moduleV } = useVideoData();
    const { readingsData, moduleId:moduleR } = useReadingData();
    // const [module, setModule] = useState([])

    const [reading, setReading] = useState({
      title: "",
      moduleId: moduleR,
      content:"",
      order: 0,
    });

    const [video, setVideo] = useState({
      title: "",
      moduleId: moduleV,
      url:"",
      caption:"",
      order: 0,
    });

    const [errorInput, setErrorInput] = useState({
      title: false,
    });
    const [error, setError] = useState(null);

   
    
    const handleReading = (e) => {
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
        axios
          .post("http://13.59.7.136:8080/api/v1/readings", {
            ...reading
          })
          .then((resp) => {
            console.log(resp);
            if (resp.data.meta.status !== 200) {
              setError(resp.data.meta.messages);
              setReading({
                title: "",
                content:"",
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
        axios
          .post("http://13.59.7.136:8080/api/v1/videos", {
            ...video
          })
          .then((resp) => {
            console.log(resp);
            if (resp.data.meta.status !== 200) {
              setError(resp.data.meta.messages);
              setVideo({
                title: "",
                url:"",
                caption:"",
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

    // const [readings, setReadings] = useState([])
    // const [titleRead, setTitleRead] = useState("")
    // const [moduleIdRead, setModuleIdRead] = useState(moduleId)
    // const [contentRead, setContentRead] = useState("")
    // const [orderRead, setOrderRead] = useState(0)

    // const [video, setVideo] = useState([])
    // const [videos, setVideos] = useState([])
    // const [titleVid, setTitleVid] = useState("")
    // const [moduleIdVid, setModuleIdVid] = useState(moduleId)
    // const [urlVid, setUrlVid] = useState("")
    // const [captionVid, setCaptionVid] = useState("")
    // const [orderVid, setOrderVid] = useState(0)
    // const { get, post,  response, loading, error } = useFetch('https://13.59.7.136:8080/');
    
    // const loadInitialModule = useCallback(async () => {
    //     const initialModule = await get("/modules/" + moduleId);
    //     if (response.ok) setModule(initialModule);
    //   }, [get, response]);
    
    // const loadInitialReading = useCallback(async () => {
    //     const initialReading = await get("/readings/" + moduleId);
    //     if (response.ok) setReading(initialReading);
    // }, [get, response]);
      
    // const loadInitialVideo = useCallback(async () => {
    //     const initialVideo = await get("/videos/" + moduleId);
    //     if (response.ok) setVideo(initialVideo);
    // }, [get, response]);

    // const loadInitialReadings = useCallback(async () => {
    //     const initialReadings = await get("/readings/");
    //     if (response.ok) setReadings(initialReadings);
    // }, [get, response]);
    
    // const loadInitialVideos = useCallback(async () => {
    //     const initialVideos = await get("/videos/");
    //     if (response.ok) setVideos(initialVideos);
    // }, [get, response]);

    // useEffect(() => {
    //   loadInitialModule();
    // }, [loadInitialModule]);

    // useEffect(() => {
    //    loadInitialModule();
    // }, [loadInitialModule]);

    // useEffect(() => {
    //   loadInitialReading();
    // }, [loadInitialReading]);
  
    // useEffect(() => {
    //   loadInitialVideo();
    // }, [loadInitialVideo]);

    // useEffect(() => {
    //     loadInitialReadings();
    //  }, [loadInitialReadings]);
    
    // useEffect(() => {
    //     loadInitialVideos();
    // }, [loadInitialVideos]);

    // const addNewReadings = useCallback(async () => {
    //     if ((!titleRead) && (!moduleIdRead) && (!contentRead) && (!orderRead))  return;
    //     const newReadings = await post("/readings", { titleRead, moduleIdRead, contentRead, orderRead, body: [titleRead, moduleIdRead, contentRead, orderRead] });
    //     if (response.ok) {
    //       setTitleRead("");
    //       setContentRead("");
    //       setOrderRead(0);
    //       setOpen1(false);
    //       setReadings((readings) => [newReadings, ...readings]);
    //     }
    //   }, [post, response, titleRead, moduleIdRead, contentRead, orderRead]);

    // const addNewVideos = useCallback(async () => {
    //     if ((!titleVid) && (!moduleIdVid) && (!captionVid) && (!orderVid) && (!urlVid))  return;
    //     const newVideos = await post("/videos", { titleVid, moduleIdVid, captionVid, orderVid, urlVid });
    //     if (response.ok) {
    //       setTitleVid("");
    //       setCaptionVid("");
    //       setOrderVid(0);
    //       setUrlVid("");
    //       setOpen(false);
    //       setReadings((videos) => [newVideos, ...videos]);
    //     }
    // }, [post, response, titleVid, moduleIdVid, captionVid, orderVid, urlVid]);
    
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
    }
    return (
        <>
        <Grid container sx={classes.container}>
            <Grid
                item
                xs={7}
                md={7}
            >
                <Typography
                    variant="h6"
                    sx={classes.title}
                >
                {module?.title}
                </Typography>
            </Grid>
            <Grid
                item
                xs={4}
                md={4}
            >
                <Button
                    variant="contained"
                    sx={classes.buttonn}
                >
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
                    color:indigo
                    }}
                    >
                    <MenuItem >
                    <Button variant="text" sx={{color:"black"}} onClick={handleClickOpen}>
                        Create Video
                    </Button>
                    <Dialog open={open} onClose={handleClickClose} >
                    <Grid
                    item
                    xs={12}
                    md={12}
                    sx={{
                    backgroundColor:indigo[500],
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
                             <DialogContent >
                                <TextField
                                multiline
                                margin="dense"
                                fullWidth
                                value={video?.title}
                                name="title"
                                error={errorInput.title}
                                helperText={errorInput.title ? "please fill the title" : ""}
                                onChange={handleVideo}
                                />
                                
                                <TextField
                                multiline
                                margin="dense"
                                fullWidth
                                value={video?.order}
                                name="order"
                                onChange={handleVideo}
                                />
                                <TextField
                                multiline
                                margin="dense"
                                fullWidth
                                value={video?.url}
                                name="url"
                                onChange={handleVideo}
                                />
                                <TextField
                                multiline
                                margin="dense"
                                fullWidth
                                value={video?.caption}
                                name="caption"
                                onChange={handleVideo}
                                />
                        </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClickClose} sx={classes.button}>Cancel</Button>
                                <Button onClick={addNewVideos}  sx={classes.button} >Submit</Button>
                        </DialogActions>
                        </Grid>
                    </Dialog>
                    </MenuItem>
                    <MenuItem>
                    <Button variant="text" sx={{color:"black"}} onClick={handleClickOpen1}>
                        Create Reading
                    </Button>
                    <Dialog open={open1} onClose={handleClickClose1} >
                    <Grid
                    item
                    xs={12}
                    md={12}
                    sx={{
                    backgroundColor:indigo[500],
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
                             <DialogContent >
                                <TextField
                                multiline 
                                margin="dense"
                                fullWidth
                                value={reading?.title}
                                name="title"
                                error={errorInput.title}
                                helperText={errorInput.title ? "please fill the title" : ""}
                                onChange={handleReading}
                                />
                                <TextField
                                multiline
                                margin="dense"
                                fullWidth
                                value={reading?.order}
                                name="order"
                                onChange={handleReading}
                                />
                                <TextField
                                multiline
                                margin="dense"
                                fullWidth
                                value={reading?.content}
                                name="content"
                                onChange={handleReading}
                                />
                        </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClickClose1} sx={classes.button}>Cancel</Button>
                                <Button onClick={addNewReading} sx={classes.button}>Submit</Button>
                        </DialogActions>
                        </Grid>
                    </Dialog>
                    </MenuItem>
                    </Menu>
                </Button>
            </Grid>
        </Grid>
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: yellow[600] }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem
          disablePadding
        //   onClick={}
          >
            <ListItemButton>
              <ListItemIcon>
                <SwitchVideoOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={videosData.title} />
            </ListItemButton>
          </ListItem>
          <ListItem 
          disablePadding
        //   onClick={}
          >
            <ListItemButton>
              <ListItemIcon>
                <MenuBookOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={readingsData.title} />
            </ListItemButton>
          </ListItem>
        </List>
        </nav>
        </Box>
        </>
        

    );
}

export default TitleSideBar;