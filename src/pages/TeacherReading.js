import ReadingTeacherForm from "../components/ReadingTeacherForm";
import Title from "../components/Title";
import Discussion from "../components/Discussion";
import ReactLoading from "react-loading";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import useFetch from "../customHooks/useFetch";
import { indigo } from "@mui/material/colors";
import { useState, useEffect } from "react";
import { useReadData } from "../components/SideBar.Hook";

const StudentReading = (props) => {
  const { readData: dataRead, errorResponse } = useReadData();
  const [filterReview, setFilterReview] = useState(0);
  const [threads, setThreads] = useState(null);
  const [reviewItems, setReviewItems] = useState(3);

  const { data: threadsData, isPending: threadsPending } = useFetch(
    "https://inedu-backend.onrender.com/threads"
  );

  useEffect(() => {
    if (threadsData) {
      setThreads(threadsData);
    }
  }, [threadsData]);

  useEffect(() => {
    let filtered = threadsData?.filter((threads) => threads);
    setThreads(filtered);
    setReviewItems(3);
  }, [filterReview]);
  console.log(dataRead);
  console.log("title woii ::", dataRead?.title);

  return (
    <>
      {threadsPending ? (
        <Grid container spacing={0} justifyContent="center">
          <ReactLoading
            type="balls"
            color={indigo[500]}
            height="auto"
            width="17%"
          />
        </Grid>
      ) : (
        <>
          <Container>
            <Grid container spacing={5}>
              <ReadingTeacherForm description={dataRead?.content} />
              <Discussion
                threads={threads}
                reviewItems={reviewItems}
                setReviewItems={setReviewItems}
              />
            </Grid>
          </Container>
          <Grid container spacing={0} justifyContent="flex-end"></Grid>
        </>
      )}
    </>
  );
};

export default StudentReading;
