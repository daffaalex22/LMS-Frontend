import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  Alert,
  Avatar,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  LinearProgress,
  OutlinedInput,
  Snackbar,
  TextField,
} from "@mui/material";
import { storage } from "../../firebase/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import axios from "axios";
import AlertPopUp from "../../components/alertPopUp/AlertPopUp";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import PasswordInput from "../../components/costumInput/PasswordInput";
import { GeneralContext } from "../../contexts/GeneralContext";

export default function FormEdit(props) {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: 1,
    address: "",
    password: "",
    newPassword: "",
  });
  const [error, setError] = useState({
    name: false,
    email: false,
    phone: false,
    avatar: false,
    address: false,
    password: true,
    newPassword: false,
    confirmPassword: false,
  });

  const token = localStorage.getItem("token");
  const { refresh, setRefresh } = useContext(GeneralContext);
  const [openAlert, setOpenAlert] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [errorResponse, setErrorResponse] = useState("");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const closeAlert = () => {
    setErrorAlert(false);
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleClickShowConfirm = () => {
    setShowConfirm(!showConfirm);
  };

  const handleOpenAlert = () => {
    setOpenAlert(true);
  };
  const handleSave = () => {
    setOpenAlert(false);
    axios
      .put(`https://inedu-backend.onrender.com/api/v1/students/profile`, data, config)
      .then((resp) => {
        setRefresh(refresh + 1);
        console.log(resp);
        if (resp.data.meta.status !== 200) {
          console.log(resp);
          setErrorAlert(true);
          setErrorResponse(resp.data.meta.messages);
        } else {
          console.log(resp);
          setErrorAlert(true);
          setErrorResponse("Success Update Data");
        }
      })
      .catch((e) => {
        console.error(e);
        setErrorAlert(true);
        setErrorResponse("Error Update, Please Check Your Requirement");
        if (e.response) {
          console.log(e.response);
        } else if (e.request) {
          console.log(e.request);
        }
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    if (value !== "") {
      if (name === "newPassword" && value.length < 6) {
        setError({ ...error, [name]: true, confirmPassword: true });
      } else if (name === "confirmPassword" && data.newPassword !== value) {
        setError({ ...error, [name]: true });
      } else {
        setError({ ...error, [name]: false });
      }
    }
    if (value === "") {
      if (name === "newPassword" || name === "confirmPassword") {
        setError({ ...error, [name]: false });
      } else {
        setError({ ...error, [name]: true });
      }
    }
  };

  const handleFile = (e) => {
    if (e.target.files[0] !== undefined) {
      setLoadingUpload(true);
      const profileRef = ref(storage, "/profile/" + e.target.files[0].name);
      uploadBytes(profileRef, e.target.files[0]).then((snapshot) => {
        console.log("uploading file");
        console.log(snapshot);
        getDownloadURL(profileRef).then((url) => {
          console.log("downloadURL", url);
          setData({
            ...data,
            avatar: url,
          });
          setLoadingUpload(false);
        });
      });
    }
  };

  useEffect(() => {
    if (props.teacher === null) {
      setData({
        name: "",
        email: "",
        phone: 1,
        address: "",
        background: "",
        password: "",
        newPassword: "",
      });
    } else {
      setData(props.teacher);
    }
    console.log(data);
  }, [props.teacher]);

  return (
    <div>
      <Box marginBottom="10px">
        <Typography variant="h5" fontWeight="medium">
          Basic
        </Typography>
      </Box>
      <Box marginRight="30px">
        <form>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextField
                fullWidth
                label="Name"
                onChange={handleChange}
                name="name"
                value={data.name}
                error={error.name}
                helperText={error.name ? "please fill name field" : ""}
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                label="Email"
                onChange={handleChange}
                name="email"
                value={data.email}
                error={error.email}
                helperText={error.email ? "please fill email field" : ""}
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                label="Phone Number"
                type="number"
                onChange={handleChange}
                name="phone"
                value={data.phone}
                error={error.phone}
                helperText={error.phone ? "please fill phone number field" : ""}
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                label="Address"
                onChange={handleChange}
                name="address"
                value={data.address}
                error={error.address}
                helperText={error.address ? "please fill address field" : ""}
              />
            </Grid>
          </Grid>
          <Box my="25px">
            <Typography variant="h5" fontWeight="medium">
              Password
            </Typography>
          </Box>
          <Box my="25px">
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <FormControl variant="outlined" sx={{ width: "50%" }}>
                  <InputLabel
                    htmlFor="outlined-adornment-password"
                    error={error.newPassword}
                  >
                    New Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    name="newPassword"
                    onChange={handleChange}
                    error={error.newPassword}
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
                  {error.newPassword && (
                    <FormHelperText
                      id="outlined-adornment-password"
                      sx={{ color: "error.main" }}
                    >
                      please fill password minimum 6 length
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl variant="outlined" sx={{ width: "50%" }}>
                  <InputLabel
                    htmlFor="outlined-adornment-password"
                    error={error.confirmPassword}
                  >
                    Confirm Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showConfirm ? "text" : "password"}
                    name="confirmPassword"
                    onChange={handleChange}
                    error={error.confirmPassword}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowConfirm}
                          edge="end"
                        >
                          {showConfirm ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                    required
                  />
                  {error.confirmPassword && (
                    <FormHelperText
                      id="outlined-adornment-password"
                      sx={{ color: "error.main" }}
                    >
                      please fill same with new password
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
            </Grid>
          </Box>
          <Box my="25px">
            <Typography variant="h5" fontWeight="medium">
              Preview Image
            </Typography>
          </Box>
          <Box my="25px">
            <Box
              width="300px"
              mb="10px"
              p="10px"
              sx={{
                justifyContent: "center",
                display: "flex",
                bgcolor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              <Avatar
                alt="avatar"
                src={data.avatar ? data.avatar : null}
                sx={{ width: "150px", height: "150px", margin: "0" }}
              />
            </Box>
            {loadingUpload && (
              <Box maxWidth="300px">
                <LinearProgress />
              </Box>
            )}

            <label htmlFor="contained-button-file">
              <Input
                accept="image/*"
                id="contained-button-file"
                type="file"
                onChange={(e) => handleFile(e)}
              />
              {/* <Button variant="contained" component="span">
                Upload
              </Button> */}
            </label>
          </Box>
          <Button
            disabled={
              error.address ||
              error.avatar ||
              error.email ||
              error.name ||
              error.phone ||
              data.address === "" ||
              data.name === "" ||
              data.avatar === "" ||
              data.email === "" ||
              data.phone === ""
            }
            variant="contained"
            onClick={handleOpenAlert}
          >
            SAVE CHANGE
          </Button>
        </form>
      </Box>
      <AlertPopUp
        title="Save Change"
        description={
          <>
            Please Fill The Password to Confirm
            <Box 
              p="10px"
            >
              <PasswordInput
                label="password"
                name="password"
                handleChange={handleChange}
                error={error.password}
              />
            </Box>
          </>
        }
        open={openAlert}
        setOpen={setOpenAlert}
        handleSubmit={handleSave}
        disabled={error.password}
      />
      {errorResponse && (
        <Snackbar
          open={errorAlert}
          autoHideDuration={6000}
          onClose={closeAlert}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert
            onClose={closeAlert}
            severity={
              errorResponse === "Success Update Data" ? "success" : "error"
            }
            sx={{
              width: "100%",
              bgcolor:
                errorResponse === "Success Update Data" ? "green" : "red",
              color: "white",
            }}
          >
            {errorResponse}
          </Alert>
        </Snackbar>
      )}
    </div>
  );
}
