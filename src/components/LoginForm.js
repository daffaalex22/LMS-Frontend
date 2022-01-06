import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import { Button, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { indigo } from "@mui/material/colors";

const classes = {
  formItem: {
    width: "85%",
    marginBottom: "20px",
  },
  btn: {
    width: "85%",
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
      color: indigo[500],
    },
  },
};

const LoginFormStudent = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  return (
    <form noValidate onSubmit={(e) => props.handleSubmit(e, loginData)}>
      <TextField
        label="Email"
        sx={classes.formItem}
        variant="outlined"
        type="email"
        name="email"
        value={loginData.email}
        onChange={(e) => handleChange(e)}
      />
      <br />
      <FormControl sx={classes.formItem} variant="outlined" name>
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          name="password"
          onChange={(e) => handleChange(e)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <br />
      {props.error?.map((item, key) => (
        <Typography color="red" key={key} marginBottom="5px">
          {item}
        </Typography>
      ))}
      <Button sx={classes.btn} variant="contained" type="submit">
        LOGIN
      </Button>
      <br />
      <Link href={props.registerLink} sx={{ textAlign: "right" }}>
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
          Don't have an account? Register
        </Typography>
      </Link>
      <br />
      <br />
    </form>
  );
};

export default LoginFormStudent;
