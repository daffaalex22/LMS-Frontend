import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import { yellow, indigo } from "@mui/material/colors";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from "react";

const FilterFields = () => {
    const [categories, setCategories] = useState('');
    const [difficulties, setDifficulties] = useState('');

    const handleChangeCategory = (event) => {
        setCategories(event.target.value);
    };

    const handleChangeDifficulty = (event) => {
        setDifficulties(event.target.value);
    };


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
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={categories}
                            label="Category"
                            onChange={handleChangeCategory}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="IT">IT</MenuItem>
                            <MenuItem value="Bussiness">Bussiness</MenuItem>
                            <MenuItem value="Science">Science</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Difficulties</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={difficulties}
                            label="Difficulties"
                            onChange={handleChangeDifficulty}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="Beginner">Beginner</MenuItem>
                            <MenuItem value="Intermediate">Intermediate</MenuItem>
                            <MenuItem value="Advanced">Advanced</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Container>
    );
}

export default FilterFields;