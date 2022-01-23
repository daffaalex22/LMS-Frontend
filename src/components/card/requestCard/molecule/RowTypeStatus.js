import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function RowTypeStatus(props) {
  return (
    <Box sx={{ margin: "10px" }}>
      <Box
        sx={{
          p: "2px",
          px: "20px",
          bgcolor: "primary.400",
          borderRadius: "7px",
        }}
      >
        <Typography variant="body1" color="white">
          {props.type}
        </Typography>
      </Box>
      <Box
        sx={{
          p: "2px",
          px: "20px",
          bgcolor: "#F0F0F0",
          borderRadius: "7px",
        }}
      >
        <Typography variant="body1">{props.status}</Typography>
      </Box>
      <br />
      {props.teacher && (
        <Box>
          <Button variant="contained" fullWidth color="error">
            Reject
          </Button>
          <br />
          <Button variant="contained" fullWidth color="success">
            Accept
          </Button>
        </Box>
      )}
    </Box>
  );
}
