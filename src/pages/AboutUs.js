import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { yellow, indigo } from "@mui/material/colors";
import useWindowDimensions from '../customHooks/useWindowDimensions'
import AboutItem from "../components/AboutItem";
import ImageDaffa from "../assets/images/daffa.png"
import ImageKrisna from "../assets/images/krisna.png"
import ImageIlham from "../assets/images/ilham.png"

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
    description: {
        fontWeight: 300,
        marginTop: '30px',
        lineHeight: '1.5em',
        textAlign: 'justify'
    },
    experienceBar: {
        height: 'auto',
        width: '100%',
        borderRadius: '10px',
        backgroundColor: indigo[400],
        display: 'inline-block',
        position: 'relative',
        top: '15px'
    },
    experienceBarTitle: {
        padding: '20px 30px',
        fontWeight: 500,
        color: 'white',
        textAlign: 'center'
    },
}

const AboutUs = () => {
    const { height, width } = useWindowDimensions();

    return (
        <Container
            sx={{
                paddingTop: '70px',
                paddingBottom: '100px'
            }}
        >
            <Grid
                container
                spacing={0}
            >
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
                        variant="h5"
                        sx={classes.description}
                    >
                        InEdu's mission is to create new possibilities for people and organizations everywhere. Our service provides high quality educational resources For Free. For Everyone. Forever. You can take courses across a wide range of categories, some of which include: business & entrepreneurship, programming, academics, the arts, health & fitness, language, music, and more!
                        
                        
                        InEdu is a Learning Management System Fullstack WebApp initially developed for personal project by a team of three people (see the Developers section below). Now, I, Daffa Alexander maintaned, made the adjustments and bugfixes to the project in an attempt to showcase my own capability in regard to Fullstack Development.
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sx={{
                        marginTop: '75px'
                    }}
                >
                    <Paper
                        sx={classes.yellowBar}
                    >
                        <Typography
                            variant="h4"
                            sx={classes.yellowBarTitle}
                        >
                            Developers
                        </Typography>
                    </Paper>
                </Grid>
                <AboutItem
                    name="Daffa' Alexander"
                    school="A Software Developer"
                    about="Leading a three-person team through a demanding 2-month fullstack web application project was no small feat. It involved relentless hard work, moments of exhaustion, and a few missed deadlines. However, the joy of ultimately delivering the project was immeasurable, and the experience was a profound learning opportunity. We're now better equipped for future endeavors."
                    developer={ImageDaffa}
                />

                <AboutItem
                    name="Ilham Tri Wibowo"
                    school="A Student of Sriwijaya University"
                    about="Working as part of a three-person team on a demanding 2-month fullstack web application project was an incredible journey filled with dedication, hard work, moments of exhaustion, and a few unexpected bumps along the way. The path may be demanding, but the destination is worth every effort."
                    developer={ImageIlham}
                />
 
                <AboutItem
                    name="I Kadek Krisna Dwi Payana"
                    school="A Student of Udayana University"
                    about="Being part of a three-person team on a challenging 2-month fullstack web application project was a transformative experience, marked by unwavering dedication, moments of sheer exhaustion, and occasional deviations from our planned timeline. Nevertheless, the sense of accomplishment upon delivering our project was unparalleled. The path might be arduous, but the rewards are immeasurable."
                    developer={ImageKrisna}
                />
            </Grid>
        </Container >
    );
}

export default AboutUs;