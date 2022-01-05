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
import React, { useState } from "react";
import { useGetAllCategoryData } from "./Course.hook";

export default function AddEditCard(props) {
  const [data, setData] = useState({
    title: "",
    thumbnail: "",
    description: "",
    categoryId: 0,
    difficultyId: 0,
  });

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { categoryData } = useGetAllCategoryData();

  const closeOnly = () => {
    props.setCreateOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={props.createOpen}
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
            <TextField fullWidth value={data.title} />
          </Typography>
          <Typography variant="body1" component="h2">
            Thumbnail (link Only) :
            <TextField fullWidth />
            helper: can upload image{" "}
            <a href="https://id.imgbb.com/" target="_blank">
              here
            </a>
          </Typography>
          <Typography variant="body1" component="h2">
            Description :
          </Typography>
          <TextareaAutosize minRows={3} style={{ width: 200 }} />
          <Typography variant="body1" component="h2">
            Category :
            <FormControl fullWidth>
              <Select
                id="categoryId"
                value={data.categoryId}
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
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={closeOnly}>
          Cancel
        </Button>
        <Button onClick={closeOnly} autoFocus>
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
}
