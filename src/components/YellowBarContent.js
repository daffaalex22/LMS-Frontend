import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { yellow, indigo } from "@mui/material/colors";

const YellowBarContent = ({ handleOpenDesc, handleOpenFiles, classes }) => {
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
    );
}

export default YellowBarContent;