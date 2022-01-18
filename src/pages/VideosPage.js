
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ResponsiveAppBar from '../components/responsiveAppBar/ResponsiveAppBar';
import FooterDashboard from '../components/FooterDashboard';
import { yellow, indigo } from '@mui/material/colors';

const VideosPage = () => {
    return (
        <>
            <ResponsiveAppBar />
            <Box
                sx={{
                    padding: '100px 0px',
                    backgroundColor: yellow[200]
                }}
            >
                Ini Content Video Bro!
            </Box>
            <FooterDashboard />
        </>
    );
}

export default VideosPage;