import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from '@mui/material/Avatar';
import { yellow, indigo } from "@mui/material/colors";
import useFetch from "../customHooks/useFetch";
const classes = {
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
    ava: {
        width: '17vw',
        height: '17vw',
        maxWidth: 100,
        maxHeight: 100,
        marginTop: '40px',
        display: 'inline-block',
    },
}

const DiscussionItems = ({ thread }) => {
    const { data: student, isPending: studentPending, error: studentError } = useFetch('https://inedu-backend.onrender.com/students/' + thread.userId)
    return (
        <Grid container spacing={1}>
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
                        src={student?.avatar}
                        sx={classes.ava}
                    />
                    <Box
                        sx={{
                            display: 'inline-block',
                            position: 'relative',
                            bottom: '2.5rem',
                            left: '20px'
                        }}
                    >
                        <Typography
                            variant="h5"
                        >
                            {student?.name}
                        </Typography>
                        <Typography
                            variant="h5"
                            component="div"
                        >
                            {thread?.userType}
                        </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={9}
                container
                spacing={0}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid
                    item
                    xs={12}
                >
                    <Paper
                        sx={classes.experienceBar}
                    >
                        <Typography
                            variant="h6"
                            sx={classes.experienceBarTitle}
                        >
                            {thread?.message}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default DiscussionItems;