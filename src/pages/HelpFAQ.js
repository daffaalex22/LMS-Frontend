import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Questions from '../assets/images/questions.png'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { yellow, indigo } from "@mui/material/colors";

const classes = {
    accordion: {
        color: 'white',
        backgroundColor: indigo[400],
        '&:first-child': {
            borderRadius: '20px 20px 0 0'
        },
        '&:last-child': {
            borderRadius: '0 0 20px 20px'
        },
        padding: '10px 20px'
    }
}

const HelpFAQ = () => {
    return (
        <Container
            sx={{
                paddingTop: '70px',
                paddingBottom: '150px'
            }}
        >
            <Grid
                container
                spacing={2}
            >
                <Grid
                    item
                    xs={12}
                    container
                    justifyContent="center"
                >
                    <img
                        src={Questions}
                        alt="Questions Illustrations"
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    container
                    justifyContent="center"
                >
                    <Typography
                        variant="h2"
                        fontWeight="medium"
                        sx={{
                            marginTop: '30px'
                        }}
                        textAlign="center"
                    >
                        Frequently Asked Questions
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                    container
                    justifyContent="center"
                    sx={{
                        marginTop: '40px'
                    }}
                >
                    <Accordion
                        sx={classes.accordion}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography
                                variant="h6"
                                fontWeight="medium"
                            >
                                What is InEdu?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography
                                variant="h6"
                                fontWeight="light"
                            >
                                InEdu's mission is to create new possibilities for people and organizations everywhere. Our service provides high quality educational resources For Free. For Everyone. Forever. You can take courses across a wide range of categories, some of which include: business & entrepreneurship, programming, academics, the arts, health & fitness, language, music, and more!
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        sx={classes.accordion}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography
                                variant="h6"
                                fontWeight="medium"
                            >
                                Is InEdu ACTUALLY Free?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography
                                variant="h6"
                                fontWeight="light"
                            >
                                Yes InEdu is completely free to use. You can enroll to any available courses you want. The catches here is to make sure you provide feedback in the form of rating to a course at the time you finish the course or in the process of completing one.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        sx={classes.accordion}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography
                                variant="h6"
                                fontWeight="medium"
                            >
                                How do I create a Course in InEdu?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography
                                variant="h6"
                                fontWeight="light"
                            >
                                To create a course in InEdu, you can sign-up as a InEdu Teacher from the Teacher's page. On teacher's page, you can upload your own courses with materials that includes readings, videos, assignments and quizzes.                                           
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        sx={classes.accordion}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography
                                variant="h6"
                                fontWeight="medium"
                            >
                                Do I have to start or complete my course by a certain time?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography
                                variant="h6"
                                fontWeight="light"
                            >
                                No. Our courses are completely free and you can start or end any course anytime you want. Make sure you add add review to a Course so it helps other people to find a good course that might helps them as well.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </Container>
    );
}

export default HelpFAQ;