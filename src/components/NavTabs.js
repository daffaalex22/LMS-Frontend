import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import { yellow, indigo } from '@mui/material/colors';
import { Grid } from '@mui/material';
import { useEffect } from 'react';
import useWindowDimensions from '../customHooks/useWindowDimensions';

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

export default function NavTabs() {
    const [value, setValue] = useState(0);
    const { height, width } = useWindowDimensions();

    // useEffect(() => {
    //     setHeight(useHeight)
    //     setWidth(useWidth)
    // }, [useHeight, useWidth])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', backgroundColor: yellow[600] }}>
            <Tabs
                centered={width >= 389 ? true : false}
                variant={width > 370 ? "standard" : "scrollable"}
                scrollButtons="auto"
                allowScrollButtonsMobile
                value={value}
                onChange={handleChange}
                aria-label="nav tabs example"
                centered
            >
                <LinkTab label="Home" href="/drafts" sx={{ paddingLeft: '5%', paddingRight: '5%' }} />
                <LinkTab label="Courses" href="/trash" sx={{ paddingLeft: '5%', paddingRight: '5%' }} />
                <LinkTab label="Help" href="/spam" sx={{ paddingLeft: '5%', paddingRight: '5%' }} />
                <LinkTab label="About Us" href="/mantap" sx={{ paddingLeft: '5%', paddingRight: '5%' }} />
            </Tabs>
        </Box>
    );
}
