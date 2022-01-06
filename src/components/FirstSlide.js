import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { indigo, yellow } from '@mui/material/colors'
import education from '../assets/images/education.png'
import { Navigate, useNavigate } from 'react-router';

const classes = {
    btn: {
        position: 'relative',
        left: '75%',
        margin: '20px',
        backgroundColor: indigo[500],
        padding: '10px 25px',
        borderRadius: '10px',
        '&:hover': {
            backgroundColor: indigo[400],
            borderColor: indigo[500],
        }
    },
}

const FirstSlide = () => {

    const navigate = useNavigate();


    return (
        <Box
            sx={{
                backgroundColor: indigo[400],
                height: '100%'
            }}
        >
            <Paper
                sx={{
                    display: 'inline-block',
                    backgroundColor: yellow[100],
                    position: 'relative',
                    top: '150px',
                    left: '80px',
                    zIndex: '100'
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        padding: '20px 40px 0px 40px'
                    }}
                    fontWeight={'medium'}
                    fontStyle={'italic'}
                >
                    Learn Everything for Free!
                </Typography>
                <Typography
                    variant="h5"
                    sx={{
                        padding: '20px 40px'
                    }}
                    fontWeight={'light'}
                    fontStyle={'italic'}
                >
                    Get The Taste of High Quality Educational Resources for Free
                </Typography>
                <Button
                    variant="contained"
                    sx={classes.btn}
                    onClick={() => navigate('/courses')}
                >
                    Explore
                </Button>
            </Paper>
            <Paper
                sx={{
                    height: '350px',
                    width: '350px',
                    backgroundColor: indigo[600],
                    position: 'relative',
                    left: '73vw',
                    bottom: '60px'
                }}
            >
            </Paper>
            <img
                src={education}
                alt="educational ilustrations"
                style={{
                    height: '400px',
                    width: 'auto',
                    position: 'relative',
                    bottom: '320px',
                    left: '55vw',
                }}
            />
        </Box>
    );
}

export default FirstSlide;