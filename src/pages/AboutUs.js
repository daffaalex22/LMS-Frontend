import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { yellow, indigo } from "@mui/material/colors";
import useWindowDimensions from '../customHooks/useWindowDimensions'
import AboutItem from "../components/AboutItem";

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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, amet repellendus, in necessitatibus sed numquam reprehenderit hic architecto, doloremque perspiciatis accusamus. Porro culpa sapiente praesentium deleniti alias excepturi cupiditate perferendis.
                        Molestiae illo aperiam ea commodi cupiditate quaerat quos dignissimos fugiat sapiente a expedita atque neque cumque eius, deserunt beatae soluta. Autem molestiae quibusdam architecto aliquam neque accusantium minima blanditiis optio?
                        Ad sit, quas necessitatibus, earum ratione amet, quod incidunt voluptatibus dolores quibusdam sint optio adipisci eveniet harum numquam quaerat eaque perspiciatis. Minus nobis, quidem tempora similique inventore repellendus. Sed, harum!
                        Illum inventore magni, molestiae ipsam assumenda ex molestias ducimus eos odit perspiciatis quam aperiam recusandae debitis deleniti laudantium earum voluptatum veniam nemo natus quas sapiente. Ipsa recusandae nam dolore odit.
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
                    name="Ilham Tri Wibowo"
                    school="A Student of Sriwijaya University"
                    about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis alias hic eos eius
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis alias hic eos eius
                    Lorem ipsum dolor"
                />
                <AboutItem
                    name="Daffa' Alexander"
                    school="A Student of Bandung Institute of Technology"
                    about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis alias hic eos eius
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis alias hic eos eius
                    Lorem ipsum dolor"
                />
                <AboutItem
                    name="I Kadek Krisna Dwi Payana"
                    school="A Student of Udayana University"
                    about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis alias hic eos eius
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis alias hic eos eius
                    Lorem ipsum dolor"
                />
            </Grid>
        </Container >
    );
}

export default AboutUs;