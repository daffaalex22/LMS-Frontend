import {
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import RowTypeStatus from "./molecule/RowTypeStatus";
import TypeStatusMolecules from "./molecule/TypeStatusMolecules";

export default function RequestCard(props) {
  const mobileVersion = useMediaQuery("(max-width:600px)");

  const updateReq = (status) => {
    axios
      .put(`http://13.59.7.136:8080/api/v1/requests/` + props.id, {
        status: status,
      })
      .then((resp) => {
        console.log(resp);
        props.setOpen(false);
        props.setRefresh(props.refresh + 1);
      })
      .catch((e) => {
        console.error(e);
        if (e.response) {
          console.log(e.response);
        } else if (e.request) {
          console.log(e.request);
        }
      });
  };
  return (
    <Card
      sx={{
        bgcolor: "secondary.400",
        borderRadius: "20px",
        padding: mobileVersion ? "" : "10px",
      }}
    >
      <CardContent>
        <Typography
          variant="h4"
          color="primary.main"
          gutterBottom
          sx={{ fontWeight: 600 }}
        >
          {props.teacher ? props.data?.student.name : props.data?.course.title}
        </Typography>
        <Typography variant="h6" component="div" sx={{ fontWeight: 300 }}>
          {props.data?.message}
        </Typography>

        {!mobileVersion && (
          <TypeStatusMolecules
            teacher={props.teacher}
            type={props.data?.type.title}
            status={props.data?.status}
          />
        )}
        {mobileVersion && (
          <RowTypeStatus
            teacher={props.teacher}
            status={props.data?.status}
            type={props.data?.type.title}
          />
        )}
      </CardContent>
    </Card>
  );
}
