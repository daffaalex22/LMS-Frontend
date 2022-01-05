import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Teaching from '../assets/images/teaching.png'

const InEduDesc = () => {
    return (
        <Grid
            container
            spacing={3}
            justifyContent="space-evenly"
            sx={{
                marginTop: '300px'
            }}
        >
            <Grid
                item
                container
                xs={6}
                justifyContent="center"
                alignItems="center"
            >
                <Grid
                    item
                    container
                    xs={9}
                    justifyContent="flex-start"
                >
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 'medium',
                        }}
                        textAlign="left"
                    >
                        Why InEdu Works?
                    </Typography>
                    <Typography
                        variant="h6"
                        textAlign="left"
                        sx={{
                            marginTop: '20px'
                        }}
                    >
                        Why would you choose another place to learn
                        when you can get access to high quality
                        educational resources for free, only in InEdu
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                item
                xs={6}
            >
                <img
                    src={Teaching}
                    alt="Teaching Illustrations"
                    style={{
                        width: '90%',
                        borderRadius: '10%',
                        position: 'relative',
                    }}
                />
            </Grid>
        </Grid>);
}

export default InEduDesc;