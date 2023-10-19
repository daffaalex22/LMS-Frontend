import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import BreadCrumbs from "../components/BreadCrumbs";
import MenuIcon from "@mui/icons-material/Menu";
import TitleSideBar from "./TitleSideBar";
import { yellow, indigo } from "@mui/material/colors";

import { useParams } from 'react-router';
import useFetch from './../customHooks/useFetch';
import { useOneVideoData, useModuleData, useReadData } from './SideBar.Hook';

const SideBar = () => {
  const { readData: dataRead, errorResponse: errorReadData } = useReadData();
  const { videoData: dataVideo, errorResponse: errorVideoData } = useOneVideoData();
  const { moduleData: dataModule } = useModuleData();
  
  const readingName = dataRead?.title
  const videoName = dataVideo?.title

  const moduleName = dataModule?.title
  const courseName = dataModule?.course?.title
  const courseId = dataModule?.course?.id

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      padding={"20px"}
    >
      <BreadCrumbs 
        courseName={courseName}
        moduleName={moduleName}
        readingName={readingName}
        videoName={videoName}
        courseId={courseId}
      />
    </Box>
  );

  return (
    <>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon
            bgcolor="info.main"
            fontSize="large"
            onClick={toggleDrawer(anchor, true)}
            sx={{
              // width: '40px',
              // height: '40px',
              // posisiton: 'relative',
              // top: '20px'
            }}
          >
            {anchor}
          </MenuIcon>

          <Drawer
            sx={{
              "& .MuiDrawer-paper": {
                bgcolor: yellow[600],
                width: "350px",
              },
            }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
            <TitleSideBar />
          </Drawer>
        </React.Fragment>
      ))}
    </>
  );
};
export default SideBar;
