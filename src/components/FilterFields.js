import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import { yellow, indigo } from "@mui/material/colors";

const FilterFields = () => {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton>
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        variant="outlined"
                        placeholder="Search Courses"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <TextField
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton>
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        variant="outlined"
                        placeholder="Search Courses"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <TextField
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton>
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        variant="outlined"
                        placeholder="Search Courses"
                        fullWidth
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

export default FilterFields;