import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Avatar from '@mui/material/Avatar';
import Thumbnail from "../../assets/images/white_laptop.jpg"
import Ava from "../../assets/images/avatar.jpg"
import Star from "../../assets/images/star.svg"
import { yellow, indigo } from "@mui/material/colors";
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import './CourseEnroll.css'

const classes = {
    thumbnail: {
        width: '100%',
        height: '100%',
        borderRadius: '20px',
    },
    star: {
        position: 'relative',
        top: '8px',
        marginRight: '10px',
    },
    reviewCount: {
        display: 'inline',
        position: 'relative',
        bottom: '6px',
        left: '10px'
    },
    btn: {
        marginTop: '20px',
        backgroundColor: indigo[500],
        padding: '10px 25px',
        borderRadius: '20px',
        '&:hover': {
            backgroundColor: indigo[400],
            borderColor: indigo[500],
        }
    },
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
    ava: {
        width: '17vw',
        height: '17vw',
        maxWidth: 100,
        maxHeight: 100,
        marginTop: '40px',
        display: 'inline-block',
    },
    description: {
        fontWeight: 300,
        marginTop: '30px',
        textAlign: 'justify'
    },
    experienceBar: {
        height: 'auto',
        width: 'auto',
        borderRadius: '10px',
        backgroundColor: indigo[400],
        display: 'inline-block',
        position: 'relative',
        top: '15px'
    },
    experienceBarTitle: {
        padding: '15px 30px',
        fontWeight: 500,
        color: 'white'
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
    smallRatingBar: {}
}


const CourseEnroll = () => {
    return (
        <Container>
            <Grid
                container
                spacing={5}
            >
                <Grid
                    item
                    xs={12}
                    md={7}
                >
                    <img
                        src={Thumbnail}
                        alt="A Photo About Studying"
                        style={classes.thumbnail}
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={5}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 500
                        }}
                    >
                        Complete Blender
                        Creator: Learn 3D
                        Modelling for
                        Beginners
                    </Typography>
                    <Box
                        sx={{
                            marginTop: '20px'
                        }}
                    >
                        <Typography
                            sx={{
                                display: 'inline'
                            }}
                            variant="h3"
                            component="div"
                        >
                            <img
                                src={Star}
                                alt="a star"
                                style={classes.star}
                            />
                            <span>4.9</span>
                            <Typography
                                variant="h5"
                                sx={classes.reviewCount}
                            >
                                (557 Reviews)
                            </Typography>
                        </Typography>
                    </Box>
                    <Typography
                        variant="h5"
                        sx={{
                            marginTop: '25px'
                        }}
                    >
                        Use Blender to Create Beautiful 3D
                        models for Video Games, 3D Printing
                        & More. Beginners Level Course
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            marginTop: '25px'
                        }}
                    >
                        Created by: Ilham T. W.
                    </Typography>
                    <Button
                        variant="contained"
                        sx={classes.btn}
                    >
                        Enroll Course
                    </Button>
                </Grid>
                <Grid
                    item
                    xs={12}
                >
                    <Paper
                        sx={classes.yellowBar}
                    >
                        <Typography
                            variant="h4"
                            sx={classes.yellowBarTitle}
                        >
                            What You'll Learn
                        </Typography>
                    </Paper>
                    <Typography
                        variant="h4"
                        sx={classes.description}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta recusandae laborum natus soluta fuga optio similique nam voluptate impedit quo? Eaque vitae sint voluptas error dignissimos maiores at non aliquid!
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                >
                    <Paper
                        sx={classes.yellowBar}
                    >
                        <Typography
                            variant="h4"
                            sx={classes.yellowBarTitle}
                        >
                            This Course Includes
                        </Typography>
                    </Paper>
                    <Typography
                        variant="h4"
                        sx={classes.description}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta recusandae laborum natus soluta fuga optio similique nam voluptate impedit quo? Eaque vitae sint voluptas error dignissimos maiores at non aliquid!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate repudiandae tempora aut facere ratione quis. Doloremque culpa veritatis expedita ipsam asperiores, corrupti, obcaecati earum modi exercitationem voluptas repellendus totam recusandae!
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                >
                    <Paper
                        sx={classes.yellowBar}
                    >
                        <Typography
                            variant="h4"
                            sx={classes.yellowBarTitle}
                        >
                            The Instructor
                        </Typography>
                    </Paper>
                    <Grid container spacing={3}>
                        <Grid
                            item
                            xs={12}
                            sm={7}
                            md={4}
                            lg={3}
                        >
                            <Box>
                                <Avatar
                                    alt="Remy Sharp"
                                    src={Ava}
                                    sx={classes.ava}
                                />
                                <Box
                                    sx={{
                                        display: 'inline-block',
                                        position: 'relative',
                                        bottom: '1.2rem',
                                        left: '20px'
                                    }}
                                >
                                    <Typography
                                        variant="h5"
                                    >
                                        Ilham T. W.
                                    </Typography>
                                    <Typography
                                        variant="h5"
                                        component="div"
                                    >
                                        <StarRateRoundedIcon
                                            sx={{
                                                color: indigo[500],
                                                position: 'relative',
                                                top: '3px',
                                                right: '2px'
                                            }}
                                        />
                                        5.0
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={10}
                            md={8}
                            lg={7}
                            container
                            spacing={0}
                            direction="column"
                            justifyContent="center"
                        >
                            <Grid item>
                                <Paper
                                    sx={classes.experienceBar}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={classes.experienceBarTitle}
                                    >
                                        Career Coach with 14+ years in the Video Game Industry
                                    </Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={12}
                    container
                    spacing={2}
                    sx={{
                        width: '100%'
                    }}
                >
                    <Paper
                        sx={{
                            ...classes.yellowBar,
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
                        // alignItems="center"
                        // alignContent="center"
                        >
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={4}
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
                                            lineHeight: '85px'
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
                                lg={3}
                                container
                                spacing={0}
                                justifyContent="center"
                                // justifyItems="center"
                                direction="row"
                                sx={{
                                    '&.MuiGrid-root': {
                                        paddingLeft: 0
                                    }
                                }}
                            >
                                <Grid
                                    item
                                    xs={10}
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
                                        <Typography
                                            variant="h5"
                                        >
                                            All
                                        </Typography>
                                    </Paper>
                                </Grid>
                                <Grid
                                    item
                                    xs={10}
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
                                        <Typography
                                            variant="h5"
                                        >
                                            All
                                        </Typography>
                                    </Paper>
                                </Grid>
                            </Grid>
                            <Grid
                                item
                                lg={3}
                                container
                                justifyContent="center"
                                sx={{
                                    '&.MuiGrid-root': {
                                        paddingLeft: 0
                                    }
                                }}
                            >
                                <Grid
                                    item
                                    xs={10}
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
                                        <Typography
                                            variant="h5"
                                        >
                                            All
                                        </Typography>
                                    </Paper>
                                </Grid>
                                <Grid
                                    item
                                    xs={10}
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
                                        <Typography
                                            variant="h5"
                                        >
                                            All
                                        </Typography>
                                    </Paper>
                                </Grid>
                            </Grid>
                            <Grid
                                item
                                lg={3}
                                container
                                justifyContent="center"
                                sx={{
                                    '&.MuiGrid-root': {
                                        paddingLeft: 0
                                    }
                                }}
                            >
                                <Grid
                                    item
                                    xs={10}
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
                                        <Typography
                                            variant="h5"
                                        >
                                            All
                                        </Typography>
                                    </Paper>
                                </Grid>
                                <Grid
                                    item
                                    xs={10}
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
                                        <Typography
                                            variant="h5"
                                        >
                                            All
                                        </Typography>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid >
        </Container >
    );
}

export default CourseEnroll;