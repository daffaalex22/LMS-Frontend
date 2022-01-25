import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { yellow, indigo } from "@mui/material/colors";

const FilesDescription = ({ openFiles, videoData }) => {
    return (
        <>
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
                                    <a href={videoData?.data?.attachment} target="_blank" >
                                        Slides
                                    </a>
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
                                    <a href={videoData?.data?.quiz} target="_blank">
                                        Quiz
                                    </a>
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
        </>
    );
}

export default FilesDescription;