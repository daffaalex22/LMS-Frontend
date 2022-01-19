import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ResponsiveAppBar from '../../components/responsiveAppBar/ResponsiveAppBar';
import FooterDashboard from '../../components/FooterDashboard';
import { yellow, indigo } from '@mui/material/colors';
import YoutubeEmbed from '../../components/youtubeEmbed/youtubeEmbed';
import YouTube from 'react-youtube';
import useWindowDimensions from '../../customHooks/useWindowDimensions';
import { Link } from 'react-router-dom'
import './VideosPage.css'
import { useState } from 'react';

const classes = {
    yellowBar: {
        height: 'auto',
        width: '100%',
        borderRadius: '10px',
        backgroundColor: yellow[600]
    },
    yellowBarTitle: {
        margin: '20px 0px 20px 30px',
        width: 'fit-content',
        fontWeight: 500
    },
}

const VideosPage = () => {
    const { width, height } = useWindowDimensions()
    const [openFiles, setOpenFiles] = useState(false)

    const onVideoReady = (e) => {
        // access to player in all event handlers via event.target
        e.target.pauseVideo();
    }

    const handleOpenFiles = () => {
        setOpenFiles(true)
    }

    const handleOpenDesc = () => {
        setOpenFiles(false)
    }

    const opts = {
        height: '720px',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    return (
        <>
            <ResponsiveAppBar />
            <Box
                sx={{
                    padding: '100px 0px',
                    backgroundColor: yellow[200]
                }}
            >
                <Container>
                    <Grid
                        container
                        spacing={1}
                    >
                        <Grid
                            item
                            xs={12}
                            sx={{
                                height: '770px'
                            }}
                        >
                            <YouTube
                                videoId="_nBlN9yp9R8"
                                opts={opts}
                                onReady={onVideoReady}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sx={{
                                marginBottom: '40px'
                            }}
                        >
                            <Typography
                                variant="h3"
                                fontWeight="medium"
                                textAlign="center"
                            >
                                Video : Complete Blender Creator:
                                Learn 3D Modelling for Beginners
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            container
                            spacing={1}
                        >
                            <Grid
                                item
                                xs={12}
                            >
                                <Paper
                                    sx={classes.yellowBar}
                                >
                                    <Grid
                                        container
                                        spacing={1}
                                        columns={{ xs: 12, sm: 16, md: 18 }}
                                    >
                                        <Grid
                                            item
                                            xs={4}
                                            sm={4}
                                            md={3}
                                        >
                                            <Typography
                                                variant="h5"
                                                sx={classes.yellowBarTitle}
                                            >
                                                <Link to="#" onClick={handleOpenDesc}>
                                                    Description
                                                </Link>
                                            </Typography>
                                        </Grid>
                                        <Grid
                                            item
                                            xs={4}
                                            sm={3}
                                            md={3}
                                        >
                                            <Typography
                                                variant="h5"
                                                sx={classes.yellowBarTitle}
                                            >
                                                <Link to="#" onClick={handleOpenFiles}>
                                                    Files
                                                </Link>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                        </Grid>
                        {openFiles ?
                            <Grid
                                item
                                xs={12}
                                container
                                spacing={1}
                                justifyContent="center"
                                sx={{
                                    marginTop: '15px',
                                    marginBottom: '28px'
                                }}
                            >
                                {[0, 1, 2, 3].map((item) => (
                                    <Grid
                                        item
                                        xs={12}
                                        md={6}
                                    >
                                        <Paper
                                            sx={{
                                                height: 'auto',
                                                width: '100%',
                                                borderRadius: '10px',
                                                backgroundColor: yellow[400],
                                                paddingTop: '1px',
                                                paddingBottom: '1px'
                                            }}
                                        >
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    margin: '15px auto 15px auto',
                                                    width: 'fit-content',
                                                    fontWeight: "regular"
                                                }}
                                                textAlign="center"
                                            >
                                                <Link to="#">
                                                    {`Slides ${item + 1}`}
                                                </Link>
                                            </Typography>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>
                            :
                            <Grid
                                item
                                xs={12}
                                container
                                spacing={1}
                            >
                                <Typography
                                    variant="h5"
                                    fontWeight="light"
                                    margin="40px 20px"
                                    lineHeight="1.5em"
                                    textAlign="justify"
                                >
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled
                                    it to make a type specimen book. It has survived not
                                    only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged. It was
                                    popularised in the 1960s with the release of Letraset
                                    sheets containing Lorem Ipsum passages, and more recently
                                    with desktop publishing software like Aldus PageMaker
                                    including versions of Lorem Ipsum
                                </Typography>
                            </Grid>
                        }
                        <Grid
                            item
                            xs={12}
                            container
                            spacing={1}
                        >
                            <Paper
                                sx={classes.yellowBar}
                            >
                                <Typography
                                    variant="h4"
                                    sx={{
                                        ...classes.yellowBarTitle
                                    }}
                                >
                                    Discussions
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box >
            <FooterDashboard />
        </>
    );
}

export default VideosPage;