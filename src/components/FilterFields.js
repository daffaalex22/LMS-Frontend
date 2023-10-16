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
import { useContext, useState } from "react";
import { GeneralContext } from "../contexts/GeneralContext";
import useFetch from "../customHooks/useFetch";

const FilterFields = () => {
    const [category, setCategory] = useState('')
    const [difficulty, setDifficulty] = useState('')
    const [search, setSearch] = useState('')

    const {
        data: categoriesData,
        isPending: categoriesPending,
        error: categoriesError,
    } = useFetch("https://inedu-backend.onrender.com/api/v1/categories");

    const {
        data: difficultiesData,
        isPending: difficultiesPending,
        error: difficultiesError,
    } = useFetch("https://inedu-backend.onrender.com/api/v1/difficulties");

    const {
        searchQuery,
        setSearchQuery,
        difficultyQuery,
        setDifficultyQuery,
        categoryQuery,
        setCategoryQuery,
    } = useContext(GeneralContext)

    const handleChangeCategory = (event) => {
        setCategory(event.target.value);
    };

    const handleChangeDifficulty = (event) => {
        setDifficulty(event.target.value);
    };

    const handleChangeSearch = (event) => {
        setSearch(event.target.value)
    }

    const handleClick = () => {
        setSearchQuery(search)
        setCategoryQuery(category)
        setDifficultyQuery(difficulty)
    }


    return (
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={handleClick}
                                    >
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        variant="outlined"
                        placeholder="Search Courses"
                        fullWidth
                        value={search}
                        onChange={handleChangeSearch}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={category}
                            label="Category"
                            onChange={handleChangeCategory}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {categoriesData?.data?.map((category) => (
                                <MenuItem value={category?.title}>
                                    {category?.title}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Difficulties</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={difficulty}
                            label="Difficulties"
                            onChange={handleChangeDifficulty}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {difficultiesData?.data?.map((difficulty) => (
                                <MenuItem value={difficulty?.title}>
                                    {difficulty?.title}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Container>
    );
}

export default FilterFields;