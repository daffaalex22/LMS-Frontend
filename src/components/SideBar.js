import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import BreadCrumbs from '../components/BreadCrumbs';
import MenuIcon from '@mui/icons-material/Menu';
import TitleSideBar from './TitleSideBar'
import { yellow, indigo } from "@mui/material/colors";

const SideBar = () => {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
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
      <BreadCrumbs ></BreadCrumbs>
    </Box>
  );

  return (
    <div >
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon bgcolor = 'info.main'  fontSize="large" onClick={toggleDrawer(anchor, true)}>{anchor}</MenuIcon>
          
          <Drawer  sx={{"& .MuiDrawer-paper": {
              bgcolor: yellow[600],
              width: '350px'
            },
 }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
           
            {list(anchor)}
            <TitleSideBar
            />
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
export default SideBar;