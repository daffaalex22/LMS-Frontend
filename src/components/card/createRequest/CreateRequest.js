import { useTheme } from "@emotion/react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  FormControl,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { Box } from "@mui/system";
import { useGetJsonData } from "../../../customHooks/axios/useGetData";

export default function CreateRequest(props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  let decode = jwt_decode(localStorage.getItem("token"));
  const [data, setData] = useState({
    studentId: decode?.id,
    courseId: 0,
    typeId: 0,
    status: "Pending",
    message: "",
  });
  const [errorInput, setErrorInput] = useState({
    courseId: false,
    typeId: false,
    message: false,
  });

  const [error, setError] = useState(null);
  const { jsonData: courseData } = useGetJsonData(
    "http://13.59.7.136:8080/api/v1/courses"
  );
  const { jsonData: typeData } = useGetJsonData(
    "http://13.59.7.136:8080/api/v1/types"
  );

  const closeOnly = () => {
    props.setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    if (value !== "") {
      setErrorInput({ ...errorInput, [name]: false });
    }
    if (value === "") {
      setErrorInput({ ...errorInput, [name]: true });
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    axios
      .post("http://13.59.7.136:8080/api/v1/requests", data)
      .then((resp) => {
        console.log(resp);
        if (resp.data.meta.status !== 200) {
          setError(resp.data.meta.messages);
          setData({
            studentId: decode?.id,
            courseId: 0,
            typeId: 0,
            status: "Pending",
            message: "",
          });
        } else {
          props.setOpen(false);
          props.setRefresh(props.refresh + 1);
        }
      })
      .catch((e) => {
        console.error(e);
        if (e.response) {
          console.log(e.response);
        } else if (e.request) {
          console.log(e.request);
        }
      });
    setData({
      studentId: decode?.id,
      courseId: 0,
      typeId: 0,
      status: "Pending",
      message: "",
    });
    props.setRefresh(1);
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={props.open}
      onClose={closeOnly}
      aria-labelledby="responsive-dialog-title"
    >
      <Box sx={{ backgroundColor: "primary.main" }}>
        <DialogContent sx={{ color: "white" }}>
          <Typography variant="h3" component="h2" mb={2} textAlign="center">
            Add Request Mail
          </Typography>
          <Stack spacing={2}>
            <Typography variant="body1" component="h2">
              Course : <span style={{ color: "red" }}>*</span>
              <FormControl fullWidth>
                <Select
                  id="courseId"
                  value={data?.courseId}
                  name="courseId"
                  onChange={(e) => handleChange(e)}
                  focused
                  color="secondary"
                >
                  {courseData?.map((item, key) => (
                    <MenuItem key={key} value={item.id}>
                      {item.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Typography>
            <Typography variant="body1" component="h2">
              Type : <span style={{ color: "red" }}>*</span>
              <FormControl fullWidth>
                <Select
                  id="typeId"
                  value={data.typeId}
                  name="typeId"
                  onChange={(e) => handleChange(e)}
                  focused
                  color="secondary"
                >
                  {typeData?.map((item, key) => (
                    <MenuItem key={key} value={item.id}>
                      {item.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Typography>
            <Typography variant="body1" component="h2">
              Message :<span style={{ color: "red" }}>*</span>
              <TextField
                fullWidth
                value={data.message}
                name="message"
                error={errorInput.message}
                helperText={errorInput.message ? "please fill the message" : ""}
                onChange={handleChange}
                multiline
                rows={4}
                focused
                color="secondary"
              />
            </Typography>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={closeOnly}
            sx={{
              backgroundColor: "secondary.main",
              "&:hover": {
                backgroundColor: "white",
                color: "black",
              },
            }}
          >
            Cancel
          </Button>
          <Button
            disabled={
              errorInput.message ||
              data.message === "" ||
              data.courseId === 0 ||
              data.typeId === 0
            }
            onClick={handleSave}
            autoFocus
            sx={{
              backgroundColor: "secondary.main",
              "&:hover": {
                backgroundColor: "white",
                color: "black",
              },
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}
