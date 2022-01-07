import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import { Box, Button, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { indigo } from "@mui/material/colors";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const classes = {
  formItem: {
    width: "100%",
    marginBottom: "20px",
    "&:focus": {
      // color: '500px'
    },
  },
  btn: {
    width: "100%",
    marginBottom: "30px",
    padding: "10px",
    backgroundColor: indigo[500],
    "&:hover": {
      backgroundColor: indigo[400],
    },
  },
  checkbox: {
    color: indigo[500],
    "&.Mui-checked": {
      color: "indigo[500],",
    },
  },
};

const RegistForm = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <Grid
      item
      container
      xs={12}
      lg={6}
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12} sx={{ width: "80%" }}>
        <Box sx={{ paddingTop: "75px", textAlign: "center" }}>
          <form onSubmit={(e) => props.handleSubmit(e, data)}>
            <TextField
              required
              label="Full Name"
              sx={classes.formItem}
              variant="outlined"
              type="text"
              name="name"
              onChange={handleChange}
            />
            <br />
            <TextField
              required
              label="Email"
              sx={classes.formItem}
              variant="outlined"
              type="email"
              name="email"
              onChange={handleChange}
              // inputRef={emailRef}
            />
            <br />
            <FormControl sx={classes.formItem} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password" required>
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      // onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                required

                // inputRef={passwordRef}
              />
            </FormControl>
            <br />
            <FormGroup>
              <FormControlLabel
                sx={{ width: "90%" }}
                control={<Checkbox sx={classes.checkbox} />}
                label={
                  <Typography sx={{ color: indigo[600] }}>
                    I want to receive inspiration, marketing promotions and
                    updates via email."
                  </Typography>
                }
              />
            </FormGroup>
            <br />
            {props.error?.map((item, key) => (
              <Typography color="red" key={key} marginBottom="5px">
                {item}
              </Typography>
            ))}
            <Button
              sx={classes.btn}
              variant="contained"
              type="submit"
              // disabled={loading}
            >
              REGISTER
            </Button>
            <br />
            <Link href={props.loginLink}>
              <Typography
                variant="body2"
                sx={{
                  paddingRight: "40px",
                  paddingLeft: "40px",
                  color: indigo[300],
                  "&:hover": {
                    color: indigo[500],
                  },
                }}
              >
                Already have an account? Login
              </Typography>
            </Link>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default RegistForm;
