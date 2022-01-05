import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Security from '../assets/images/security.png'
import Vault from '../assets/images/vault.png'
import Webshop from '../assets/images/webshop.png'

const ValuesHome = () => {
    return (
        <Grid
            container
            spacing={1}
            justifyContent="space-evenly"
            sx={{
                marginTop: '300px'
            }}
        >
            <Grid
                item
                xs={8}
                md={4}
                container
                justifyContent="center"
            >
                <img src={Webshop} alt="Personalized" />
                <Typography
                    variant="h4"
                    sx={{
                        marginTop: '30px',
                        fontWeight: 'medium',
                        textAlign: 'center',
                        marginBottom: '20px'
                    }}
                >
                    Personalized Learning
                </Typography>
                <Typography
                    variant="h6"
                    fontWeight="regular"
                    sx={{
                        width: '75%',
                        textAlign: 'justify',
                        marginBottom: '100px'
                    }}
                >
                    Students practice at their own pace,
                    first filling in gaps in their understanding
                    and then accelerating their learning.
                </Typography>
            </Grid>
            <Grid
                item
                xs={8}
                md={4}
                container
                justifyContent="center"
            >
                <img src={Vault} alt="Trusted" />
                <Typography
                    variant="h4"
                    sx={{
                        marginTop: '30px',
                        fontWeight: 'medium',
                        textAlign: 'center',
                        marginBottom: '20px'
                    }}
                >
                    Trusted Contents
                </Typography>
                <Typography
                    variant="h6"
                    fontWeight="regular"
                    sx={{
                        width: '75%',
                        textAlign: 'justify',
                        marginBottom: '100px'
                    }}
                >
                    Created by experts, InEdu's library of
                    trusted practice and lessons covers
                    math, science, and more. Always free for
                    learners and teachers.
                </Typography>
            </Grid>
            <Grid
                item
                xs={8}
                md={4}
                container
                justifyContent="center"
            >
                <img src={Security} alt="Secure" />
                <Typography
                    variant="h4"
                    sx={{
                        marginTop: '30px',
                        fontWeight: 'medium',
                        textAlign: 'center',
                        marginBottom: '20px'
                    }}
                >
                    Empowering Teachers
                </Typography>
                <Typography
                    variant="h6"
                    fontWeight="regular"
                    sx={{
                        width: '75%',
                        textAlign: 'justify',
                        marginBottom: '100px'
                    }}
                >
                    With InEdu, teachers can identify gaps in
                    their students’ understanding, tailor
                    instruction, and meet the needs of every
                    student.
                </Typography>
            </Grid>
        </Grid>
    );
}

export default ValuesHome;