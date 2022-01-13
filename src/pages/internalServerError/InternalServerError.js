import { Box } from "@mui/system";
import React from "react";

export default function InternalServerError() {
  return (
    <Box
      sx={{
        bgcolor: "secondary",
      }}
    >
      <Box
        sx={{
          width: "100px",
          height: "100px",

          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          bgcolor: "red",

          margin: "auto",
        }}
      >
        Centered element
      </Box>
    </Box>
  );
}
