import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { yellow, indigo } from "@mui/material/colors";
import logoInEdu from '../assets/images/logoInEdu.svg';
import Typography from "@mui/material/Typography";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import WhatsappRoundedIcon from '@mui/icons-material/WhatsappRounded';
import InstagramIcon from '@mui/icons-material/Instagram';

const FooterDashboard = () => {
    return (
        <Container maxWidth="xl" sx={{ backgroundColor: yellow[600], height: 'auto', paddingBottom: '30px' }}>
            <Grid container spacing={3} direction="row" justifyContent="space-around">
                <Grid item xs={9} sm={6} md={4} lg={4} container spacing={2} direction="column">
                    <Grid item xs={1}>
                        <img src={logoInEdu} style={{ maxWidth: '70vw' }} />
                    </Grid>
                    <Grid item xs={1}>
                        <Typography variant="body1" textAlign="justify">
                            Create an online video course, reach<br />
                            students across the globe, and earn<br />
                            money
                        </Typography>
                    </Grid>
                    <Grid item xs={1} sx={{ paddingTop: '40px', paddingBottom: '30px' }}>
                        <Typography variant="h6">
                            Customer Service
                        </Typography>
                        <FacebookRoundedIcon sx={{ width: '30px', height: '30px', paddingRight: '9px', color: indigo[500], paddingTop: '13px' }} />
                        <WhatsappRoundedIcon sx={{ width: '30px', height: '30px', paddingRight: '7px', color: indigo[500], paddingTop: '13px' }} />
                        <InstagramIcon sx={{ width: '30px', height: '30px', paddingRight: '7px', color: indigo[500], paddingTop: '13px' }} />
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={8}
                    sm={4}
                    md={2}
                    lg={2}
                    container
                    spacing={2}
                    direction="column"
                    justifyContent="center"
                    sx={{ textAlign: 'left' }}
                >
                    <Typography variant="h6" sx={{ paddingBottom: '15px', color: indigo[800] }}>
                        Need Help ?
                    </Typography>
                    <Typography variant="body1">
                        InEdu Business
                    </Typography>
                    <Typography variant="body1">
                        Teach on InEdu
                    </Typography>
                    <Typography variant="body1">
                        Get the app
                    </Typography>
                    <Typography variant="body1">
                        About Us
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={8}
                    sm={5}
                    md={4}
                    lg={2}
                    container
                    spacing={2}
                    direction="column"
                    justifyContent="center"
                    sx={{ textAlign: 'left' }}
                >
                    <Typography variant="h6" sx={{ paddingBottom: '15px', color: indigo[800] }}>
                        Partner With Us
                    </Typography>
                    <Typography variant="body1">
                        Collaboration
                    </Typography>
                    <Typography variant="body1">
                        Career
                    </Typography>
                    <Typography variant="body1">
                        Blog
                    </Typography>
                    <Typography variant="body1">
                        Investors
                    </Typography>
                    <Typography variant="body1">
                        Affiliate
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={8}
                    sm={4}
                    md={11}
                    lg={2}
                    container
                    spacing={2}
                    direction="column"
                    justifyContent="center"
                    sx={{ textAlign: 'left' }}
                >
                    <Typography variant="h6" sx={{ paddingBottom: '15px', color: indigo[800] }}>
                        Policy
                    </Typography>
                    <Typography variant="body1">
                        Cookie Setting
                    </Typography>
                    <Typography variant="body1">
                        Privacy Policy
                    </Typography>
                    <Typography variant="body1">
                        Terms of Service
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default FooterDashboard;