import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Box,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React, { useState } from "react";

//props : label, name, handleChange, error
export default function PasswordInput(props) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box>
      <FormControl variant="outlined" sx={{ width: "50%" }}>
        <InputLabel htmlFor="outlined-adornment-password" error={props.error}>
          {props.label}
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          name={props.name}
          onChange={props.handleChange}
          error={props.error}
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
          required
        />
        {props.error && (
          <FormHelperText
            id="outlined-adornment-password"
            sx={{ color: "error.main", textAlign: "left", marginLeft: 0, marginRight: 0}}
          >
            Please Fill Password with Minimum 6 Characters
          </FormHelperText>
        )}
      </FormControl>
    </Box>
  );
}
