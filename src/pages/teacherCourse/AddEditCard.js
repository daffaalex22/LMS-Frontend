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
  TextareaAutosize,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  useGetAllCategoryData,
  useGetAllDifficultiesData,
} from "./Course.hook";
import jwt_decode from "jwt-decode";
import axios from "axios";

export default function AddEditCard(props) {
  const [data, setData] = useState({
    title: "",
    thumbnail: "",
    description: "",
    categoryId: null,
    difficultyId: null,
  });
  const [error, setError] = useState(null);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { categoryData } = useGetAllCategoryData();
  const { difficultiesData } = useGetAllDifficultiesData();

  let decode = jwt_decode(localStorage.getItem("token"));

  const closeOnly = () => {
    props.setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (props.title === "Create") {
      axios
        .post("http://localhost:8080/api/v1/courses", {
          ...data,
          teacherId: decode.idt,
        })
        .then((resp) => {
          console.log(resp);
          if (resp.data.meta.status !== 200) {
            setError(resp.data.meta.messages);
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
    } else {
      axios
        .put("http://localhost:8080/api/v1/courses/" + data.id, data)
        .then((resp) => {
          console.log(resp);
          if (resp.data.meta.status !== 200) {
            setError(resp.data.meta.messages);
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
    }
  };

  useEffect(() => {
    if (props.editData !== null) {
      setData(props.editData);
    } else {
      setData({
        title: "",
        thumbnail: "",
        description: "",
        categoryId: null,
        difficultyId: null,
      });
    }
  }, [props.editData]);


  return (
    <Dialog
      fullScreen={fullScreen}
      open={props.createOpen || props.editOpen}
      onClose={closeOnly}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogContent>
        <Typography variant="h3" component="h2" mb={2} textAlign="center">
          {props.title} Course
        </Typography>
        <Stack spacing={2}>
          <Typography variant="body1" component="h2">
            Title :
            <TextField
              fullWidth
              value={data?.title}
              name="title"
              onChange={handleChange}
            />
          </Typography>
          <Typography variant="body1" component="h2">
            Thumbnail (link Only) :
            <TextField
              fullWidth
              value={data?.thumbnail}
              name="thumbnail"
              onChange={handleChange}
            />
            helper: can upload image{" "}
            <a href="https://id.imgbb.com/" target="_blank">
              here
            </a>
          </Typography>
          <Typography variant="body1" component="h2">
            Description :
          </Typography>
          <TextareaAutosize
            minRows={3}
            style={{ width: 200 }}
            value={data?.description}
            name="description"
            onChange={handleChange}
          />
          <Typography variant="body1" component="h2">
            Category :
            <FormControl fullWidth>
              <Select
                id="categoryId"
                value={data?.categoryId}
                name="categoryId"
                onChange={(e) => handleChange(e)}
              >
                {categoryData?.map((item, key) => (
                  <MenuItem key={key} value={item.id}>
                    {item.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Typography>
          <Typography variant="body1" component="h2">
            Difficulties :
            <FormControl fullWidth>
              <Select
                name="difficultyId"
                value={data?.difficultyId}
                onChange={(e) => handleChange(e)}
              >
                {difficultiesData?.map((item, key) => (
                  <MenuItem key={key} value={item.id}>
                    {item.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Typography>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={closeOnly}>
          Cancel
        </Button>
        <Button onClick={handleSave} autoFocus>
          {props.title}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
