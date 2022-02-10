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
import { useState, useEffect } from 'react';
import Discussion from '../../components/Discussion';
import { useLocation } from 'react-router';
import useFetch from '../../customHooks/useFetch';
import { useParams } from 'react-router';
import FilesDescription from '../../components/FilesDescription';
import YellowBarContent from '../../components/YellowBarContent';
import { GeneralContext } from "../../contexts/GeneralContext";
import { useContext } from 'react';
import VideoFormDialogue from "../../components/VideoFormDialogue";

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
    const { video, setVideo, isEditingVideo, setIsEditingVideo } = useContext(GeneralContext);
    const [isTeacher, setIsTeacher] = useState(false);
    const location = useLocation()
    const { videoId } = useParams();
    const {
        data: videoData,
        isPending: videoPending,
        error: videoError,
    } = useFetch("http://52.14.19.229:8080/api/v1/videos/" + videoId);
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

    useEffect(() => {
        if (videoData) {
            setVideo(videoData?.data)
        }
    }, [videoData]);

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
                        <YellowBarContent
                            classes={classes}
                            handleOpenDesc={handleOpenDesc}
                            handleOpenFiles={handleOpenFiles}
                        />
                        <FilesDescription
                            openFiles={openFiles}
                            videoData={videoData}
                        />
                        <Discussion />
                    </Grid>
                </Container>
            </Box >
            <VideoFormDialogue />
        </>
    );
}

export default VideosPage;