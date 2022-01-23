import { Box, Typography, Breadcrumbs, Link, Fab, Stack } from "@mui/material";
import React, { useState } from "react";
import NavSidebar from "../../components/navSideBar/NavSide";
import RequestCard from "../../components/card/requestCard/RequestCard";
import { useGetRequestUser } from "./requestHook";
import AddIcon from "@mui/icons-material/Add";
import CreateRequest from "../../components/card/createRequest/CreateRequest";

export default function RequestMail() {
  const user = localStorage.getItem("user");
  document.title = user + " - Profile";

  const [refresh, setRefresh] = useState(1);
  const [createOpen, setCreateOpen] = useState(false);

  const { requestUser, errorResponse } = useGetRequestUser(refresh);

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "secondary.200" }}>
      <NavSidebar>
        <Box
          sx={{
            margin: "30px",
          }}
        >
          <Typography variant="h3" component="h2" ml={2}>
            Requests Mail
            {user === "Student" && (
              <Fab
                variant="extended"
                onClick={() => setCreateOpen(true)}
                sx={{
                  ml: "15px",
                  mb: "10px",
                  bgcolor: "primary.main",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "secondary.main",
                    color: "primary.main",
                  },
                }}
              >
                <AddIcon sx={{ mr: 1 }} />
                Create
              </Fab>
            )}
          </Typography>
          <hr
            sx={{
              color: "primary.main",
            }}
          />
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{
              ml: "17px",
            }}
          >
            <Link underline="hover" color="inherit" href="/home">
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href={
                user === "Teacher" ? "/teacher/courses" : "/student/courses"
              }
            >
              MyCourse
            </Link>
            <Typography color="text.primary">Requests</Typography>
          </Breadcrumbs>
          <Box
            sx={{ marginLeft: "17px", marginTop: "30px", marginRight: "30px" }}
          >
            <Stack spacing={2}>
              {requestUser.map((item, key) => (
                <RequestCard
                  key={key}
                  teacher={user === "Teacher" ? true : false}
                  data={item}
                />
              ))}
            </Stack>
          </Box>
        </Box>
      </NavSidebar>
      <CreateRequest
        open={createOpen}
        setOpen={setCreateOpen}
        setRefresh={setRefresh}
        refresh={refresh}
      />
    </Box>
  );
}
