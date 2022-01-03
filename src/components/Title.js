import { Grid } from "@mui/material";

import Typography from "@mui/material/Typography";

const Title = ({ reading }) => {
    return (
        <>
            <Grid
                item
                xs={12}
                md={12}
                sx={{
                textAlign: 'center'
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 500
                    }}
                >
                    {reading?.title}
                </Typography>
            </Grid>
        </>

    );
}

export default Title;