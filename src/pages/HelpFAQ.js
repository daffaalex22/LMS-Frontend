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
                                Accordion 1
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography
                                variant="h6"
                                fontWeight="light"
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
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
                                Accordion 2
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography
                                variant="h6"
                                fontWeight="light"
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
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
                                Accordion 2
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography
                                variant="h6"
                                fontWeight="light"
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
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
                                Accordion 2
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography
                                variant="h6"
                                fontWeight="light"
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </Container>
    );
}

export default HelpFAQ;