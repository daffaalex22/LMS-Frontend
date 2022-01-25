import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { yellow, indigo, white } from "@mui/material/colors";
import { GeneralContext } from "../contexts/GeneralContext";
import { useContext } from 'react';

const YellowBarContent = ({ handleOpenDesc, handleOpenFiles, classes }) => {
    const {
        isEditingVideo,
        setIsEditingVideo,
        setOpenVideoForm,
    } = useContext(GeneralContext);

    const handleEdit = () => {
        setIsEditingVideo(true)
        setOpenVideoForm(true)
    }

    return (
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
                        justifyContent="space-between"
                    >
                        <Grid
                            item
                            xs={8}
                            sm={10}
                            md={10}
                            container
                            columns={{ xs: 12, sm: 14, md: 13 }}
                        >
                            <Grid
                                item
                                xs={6}
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
                                xs={6}
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
                        <Grid
                            item
                            xs={4}
                            sm={2}
                            md={2}
                            container
                            justifyContent="flex-end"
                            alignItems="center"
                            direction="row"
                            spacing={0}
                        >
                            <Grid
                                item
                                xs={6}
                                // sm={5}
                                md={6}
                                lg={5}
                                container
                            >
                                <IconButton
                                    sx={{
                                        height: '50px',
                                        width: '50px',
                                        color: '#4fc3f7'
                                    }}
                                    onClick={handleEdit}
                                >
                                    <EditIcon
                                        sx={{
                                            height: '100%',
                                            width: '100%',
                                            color: '#4fc3f7'
                                        }}
                                    />
                                </IconButton>
                            </Grid>
                            <Grid
                                item
                                xs={6}
                                // sm={5}
                                md={6}
                                lg={5}
                                container
                            >
                                <IconButton
                                    sx={{
                                        height: '50px',
                                        width: '50px',
                                        color: 'red'
                                    }}
                                >
                                    <DeleteForeverIcon
                                        sx={{
                                            height: '100%',
                                            width: '100%',
                                            color: 'red'
                                        }}
                                    />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default YellowBarContent;