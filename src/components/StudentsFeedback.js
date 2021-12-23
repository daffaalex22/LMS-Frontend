import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { yellow, indigo } from "@mui/material/colors";
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

const classes = {
    yellowBar: {
        height: 'auto',
        width: '100%',
        borderRadius: '10px',
        backgroundColor: yellow[600]
    },
    yellowBarTitle: {
        padding: '20px 30px',
        fontWeight: 500
    },
    lightYellowBar: {
        // height: '200',
        // boxSizing: 'border-box',
        width: '100%',
        borderRadius: '25px',
        backgroundColor: yellow[200],
        margin: '0px 30px 20px 30px',
        padding: '100px auto',
        textAlign: 'center'
    },
}

const StudentsFeedback = () => {
    return (
        <Grid
            item
            xs={12}
            container
            spacing={0}
            sx={{
                width: '100%'
            }}
        >
            <Paper
                sx={{
                    ...classes.yellowBar,
                    marginTop: '40px'
                }}
            >
                <Grid
                    item
                    xs={12}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            ...classes.yellowBarTitle,
                        }}
                    >
                        Student Feedback
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                    container
                    spacing={2}
                    justifyContent="center"
                >
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        lg={3}
                        container
                        spacing={0}
                        justifyContent="center"
                    >

                        <Paper
                            sx={classes.lightYellowBar}
                        >
                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: 500,
                                    lineHeight: '120px'
                                }}
                                component="div"
                            >
                                <StarRateRoundedIcon
                                    sx={{
                                        color: indigo[500],
                                        height: '1.8em',
                                        width: '1.8em',
                                        position: 'relative',
                                        top: '5px',
                                        right: '5px'
                                    }}
                                />
                                4.9
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        lg={3}
                        container
                        spacing={0}
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid
                            item
                            xs={12}
                            container
                            justifyContent="center"
                            sx={{
                                width: '80%',
                                '&.MuiGrid-root': {
                                    paddingLeft: 0
                                }
                            }}
                        >
                            <Paper
                                sx={{
                                    // ...classes.lightYellowBar,
                                    borderRadius: '10px',
                                    width: '100%',
                                    backgroundColor: yellow[200],
                                    margin: '0px 30px 20px 30px',
                                    padding: '100px auto',
                                    textAlign: 'center'
                                }}
                            >
                                <Button
                                    sx={{
                                        width: '100%',
                                        borderRadius: '10px',
                                        fontDecoration: 'none',
                                        color: 'black',
                                        padding: 0
                                    }}
                                >
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            margin: '5.5%'
                                        }}
                                    >
                                        All
                                    </Typography>
                                </Button>
                            </Paper>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            container
                            justifyContent="center"
                            sx={{
                                width: '80%'
                            }}
                        >
                            <Paper
                                sx={{
                                    // ...classes.lightYellowBar,
                                    borderRadius: '10px',
                                    width: '100%',
                                    backgroundColor: yellow[200],
                                    margin: '0px 30px 20px 30px',
                                    padding: '100px auto',
                                    textAlign: 'center'
                                }}
                            >
                                <Button
                                    sx={{
                                        width: '100%',
                                        borderRadius: '10px',
                                        fontDecoration: 'none',
                                        color: 'black',
                                        padding: 0
                                    }}
                                >
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            margin: '5.5%'
                                        }}
                                    >
                                        <StarRateRoundedIcon
                                            sx={{
                                                color: indigo[500],
                                                position: 'relative',
                                                top: '2px',
                                                right: '2px'
                                            }}
                                        />
                                        5.0
                                    </Typography>
                                </Button>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        lg={3}
                        container
                        justifyContent="center"
                    >
                        <Grid
                            item
                            xs={12}
                            container
                            justifyContent="center"
                            sx={{
                                width: '80%'
                            }}
                        >
                            <Paper
                                sx={{
                                    // ...classes.lightYellowBar,
                                    borderRadius: '10px',
                                    width: '100%',
                                    backgroundColor: yellow[200],
                                    margin: '0px 30px 20px 30px',
                                    padding: '100px auto',
                                    textAlign: 'center'
                                }}
                            >
                                <Button
                                    sx={{
                                        width: '100%',
                                        borderRadius: '10px',
                                        fontDecoration: 'none',
                                        color: 'black',
                                        padding: 0
                                    }}
                                >
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            margin: '5.5%'
                                        }}
                                    >
                                        <StarRateRoundedIcon
                                            sx={{
                                                color: indigo[500],
                                                position: 'relative',
                                                top: '2px',
                                                right: '2px'
                                            }}
                                        />
                                        4.0
                                    </Typography>
                                </Button>
                            </Paper>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            container
                            justifyContent="center"
                            sx={{
                                width: '80%'
                            }}
                        >
                            <Paper
                                sx={{
                                    // ...classes.lightYellowBar,
                                    borderRadius: '10px',
                                    width: '100%',
                                    backgroundColor: yellow[200],
                                    margin: '0px 30px 20px 30px',
                                    padding: '100px auto',
                                    textAlign: 'center'
                                }}
                            >
                                <Button
                                    sx={{
                                        width: '100%',
                                        borderRadius: '10px',
                                        fontDecoration: 'none',
                                        color: 'black',
                                        padding: 0
                                    }}
                                >
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            margin: '5.5%'
                                        }}
                                    >
                                        <StarRateRoundedIcon
                                            sx={{
                                                color: indigo[500],
                                                position: 'relative',
                                                top: '2px',
                                                right: '2px'
                                            }}
                                        />
                                        3.0
                                    </Typography>
                                </Button>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        lg={3}
                        container
                        justifyContent="center"
                    >
                        <Grid
                            item
                            xs={12}
                            container
                            justifyContent="center"
                            sx={{
                                width: '80%'
                            }}
                        >
                            <Paper
                                sx={{
                                    // ...classes.lightYellowBar,
                                    borderRadius: '10px',
                                    width: '100%',
                                    backgroundColor: yellow[200],
                                    margin: '0px 30px 20px 30px',
                                    padding: '100px auto',
                                    textAlign: 'center'
                                }}
                            >
                                <Button
                                    sx={{
                                        width: '100%',
                                        borderRadius: '10px',
                                        fontDecoration: 'none',
                                        color: 'black',
                                        padding: 0
                                    }}
                                >
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            margin: '5.5%'
                                        }}
                                    >
                                        <StarRateRoundedIcon
                                            sx={{
                                                color: indigo[500],
                                                position: 'relative',
                                                top: '2px',
                                                right: '2px'
                                            }}
                                        />
                                        2.0
                                    </Typography>
                                </Button>
                            </Paper>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            container
                            justifyContent="center"
                            sx={{
                                width: '80%'
                            }}
                        >
                            <Paper
                                sx={{
                                    // ...classes.lightYellowBar,
                                    borderRadius: '10px',
                                    width: '100%',
                                    backgroundColor: yellow[200],
                                    margin: '0px 30px 20px 30px',
                                    padding: '100px auto',
                                    textAlign: 'center'
                                }}
                            >
                                <Button
                                    sx={{
                                        width: '100%',
                                        borderRadius: '10px',
                                        fontDecoration: 'none',
                                        color: 'black',
                                        padding: 0
                                    }}
                                >
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            margin: '5.5%'
                                        }}
                                    >
                                        <StarRateRoundedIcon
                                            sx={{
                                                color: indigo[500],
                                                position: 'relative',
                                                top: '2px',
                                                right: '2px'
                                            }}
                                        />
                                        1.0
                                    </Typography>
                                </Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
}

export default StudentsFeedback;