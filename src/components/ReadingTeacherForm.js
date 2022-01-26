import { indigo } from "@mui/material/colors";
import { Button, Grid } from "@mui/material";
import SideBar from "./SideBar";
import AddEdit from "./AddEditReadingTeacher";
import { useParams } from "react-router";

import { useState, useEffect } from "react";

const classes = {
  buttonn: {
    backgroundColor: indigo[500],
    borderRadius: "50%",
    paddingTop: "12px",
    width: "60px",
    height: "60px",
  },
};

const ReadingTeacherForm = (props) => {
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    if (!id) {
      setIsEditing(true);
    } else {
      setIsEditing(false);
    }
  }, []);

  return (
    <>
      <Grid item xs={2} md={2}>
        <Button variant="contained" sx={classes.buttonn}>
          <SideBar />
        </Button>
      </Grid>
      <Grid item xs={12}>
        {isEditing ? (
          <AddEdit title="Create" isEditing={isEditing} />
        ) : (
          <AddEdit title="Edit" editData={editData} isEditing={isEditing} />
        )}
      </Grid>
    </>
  );
};

export default ReadingTeacherForm;
