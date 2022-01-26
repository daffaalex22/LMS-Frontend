import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { yellow, indigo } from "@mui/material/colors";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LaunchIcon from '@mui/icons-material/Launch';
import { useNavigate } from "react-router";
import { useState } from "react";
import EnrollmentsTable from "./EnrollmentsTable";

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
    },
    accordion: {
        color: 'black',
        backgroundColor: yellow[300],
        '&:first-child': {
            borderRadius: '13px 13px 0 0'
        },
        '&:last-child': {
            borderRadius: '0 0 13px 13px'
        },
        padding: '10px 20px'
    }
}

const CourseDescription = ({ description, modules, enrolled, setEnrolled, modulesRef }) => {
    const navigate = useNavigate()
    const [openTables, setOpenTables] = useState(false);
    const user = localStorage.getItem("user");
    const handleOpenTables = () => {
        let currentValue = openTables;
        setOpenTables(!currentValue)
        console.log(openTables)
    }

    return (
        <>
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
                    {description}
                </Typography>
            </Grid>
            <Grid
                item
                xs={12}
            >
                <Paper
                    sx={{
                        ...classes.yellowBar,
                    }}
                    ref={modulesRef}
                >
                    <Grid
                        container
                        spacing={1}
                    >
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={5}
                            lg={4}
                        >
                            <Typography
                                variant="h4"
                                sx={{
                                    ...classes.yellowBarTitle,
                                }}
                            >
                                This Course Includes
                            </Typography>
                        </Grid>
                        {user == "Teacher" ?
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={4}
                            >
                                <Typography
                                    variant="h4"
                                    sx={{
                                        ...classes.yellowBarTitle,
                                        '&:hover': {
                                            color: indigo[800],
                                            textDecoration: 'underline',
                                            cursor: 'pointer'
                                        }
                                    }}
                                    onClick={handleOpenTables}
                                >
                                    Students Enrolled
                                </Typography>
                            </Grid>
                            :
                            null
                        }
                    </Grid>
                </Paper>

                <br />
                <br />
                <Box>
                    {openTables ?
                        <EnrollmentsTable />
                        :
                        <>
                            {modules?.map((module) => (
                                <Accordion
                                    sx={classes.accordion}
                                    key={module?.id}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon sx={{ color: 'black' }} />}
                                        aria-controls={"panel" + module?.id + "a-content"}
                                        id={"panel" + module?.id + "a-header"}
                                    >

                                        <Typography
                                            variant="h6"
                                            fontWeight="medium"
                                        >
                                            {module?.title}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Button
                                            sx={{
                                                width: '100%',
                                                height: '45px',
                                                color: 'white',
                                                backgroundColor: indigo[500],
                                                '&:hover': {
                                                    color: 'white',
                                                    backgroundColor: indigo[400],
                                                },
                                                '&:disabled': {
                                                    backgroundColor: indigo[100]
                                                }
                                            }}
                                            disabled={enrolled ? false : true}
                                            onClick={() => {
                                                navigate("/modules/" + module?.id + "/readings/1")
                                            }}
                                        >
                                            <LaunchIcon sx={{ marginRight: '12px' }} />
                                            {`Open ${module?.title}`}
                                        </Button>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </>
                    }
                </Box>


            </Grid>
        </>
    );
}

export default CourseDescription;