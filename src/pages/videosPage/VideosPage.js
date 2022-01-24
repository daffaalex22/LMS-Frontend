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
import Discussion from '../../components/Discussion';
import { useLocation } from 'react-router';
import useFetch from '../../customHooks/useFetch';
import { useParams } from 'react-router';

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
    const location = useLocation()
    const { videoId } = useParams();
    const {
        data: videoData,
        isPending: videoPending,
        error: videoError,
    } = useFetch("http://13.59.7.136:8080/api/v1/videos/" + videoId);
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

    console.log("videoData", videoData)
    console.log("videoId", videoId)

    return (
        <>
            <Box
                sx={{
                    padding: '50px 0px',
                    backgroundColor: yellow[200]
                }}
            >
                <Container>
                    <Grid
                        container
                        spacing={1}
                        justifyContent="center"
                    >
                        <Grid
                            item
                            xs={9}
                            sx={{
                                marginBottom: '40px'
                            }}
                        >
                            <Typography
                                variant="h3"
                                fontWeight="medium"
                                textAlign="center"
                            >
                                {videoData?.data?.title}
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sx={{
                                height: '770px'
                            }}
                        >
                            {videoData?.data?.url ?
                                <YouTube
                                    videoId={videoData?.data?.url}
                                    opts={opts}
                                    onReady={onVideoReady}
                                />
                                :
                                null
                            }
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
                                {videoData?.data?.attachment ?
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
                                                <Link to={videoData?.data?.attachment}>
                                                    Slides
                                                </Link>
                                            </Typography>
                                        </Paper>
                                    </Grid>
                                    : null
                                }
                                {videoData?.data?.quiz ?
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
                                                <Link to={videoData?.data?.quiz}>
                                                    Quiz
                                                </Link>
                                            </Typography>
                                        </Paper>
                                    </Grid>
                                    : null
                                }
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
                                    {videoData?.data?.caption}
                                </Typography>
                            </Grid>
                        }
                        <Discussion />
                    </Grid>
                </Container>
            </Box >
        </>
    );
}

export default VideosPage;