import ReadingDescription from "../components/ReadingDescription";
import Title from "../components/Title";
import Discussion from "../components/Discussion";
import ReactLoading from 'react-loading';
import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import useFetch from "../customHooks/useFetch";
import { yellow, indigo } from "@mui/material/colors";
import { useState, useEffect } from "react";

import {useReadingData} from '../components/SideBar.Hook';
// import { useParams } from "react-router";


const StudentReading = () => {
    // const { id } = useParams();
    const {readingsData: dataRead, errorResponse} = useReadingData();
    const [filterReview, setFilterReview] = useState(0)
    const [threads, setThreads] = useState(null)
    const [reviewItems, setReviewItems] = useState(3)

    const { data: threadsData, isPending: threadsPending } = useFetch('http://localhost:8000/threads')

    useEffect(() => {
        if (threadsData) {
            setThreads(threadsData)
        }
    }, [threadsData])

    useEffect(() => {
        let filtered = threadsData?.filter(threads => threads)
        setThreads(filtered)
        setReviewItems(3)
    }, [filterReview])

    return (
        <>
            { threadsPending ?
                <Grid
                    container
                    spacing={0}
                    justifyContent="center"
                >
                    <ReactLoading
                        type="balls"
                        color={indigo[500]}
                        height="auto"
                        width="17%"
                    />
                </Grid> :
                <>
                    <Container>
                        <Grid
                            container
                            spacing={5}
                        >
                            <Title
                                reading={dataRead?.title}
                            />
                            <ReadingDescription
                                description={dataRead?.content}
                            />
                            <Discussion
                                threads={threads}
                                reviewItems={reviewItems}
                                setReviewItems={setReviewItems}
                            />
                        </Grid >
                    </Container >
                    <Grid
                        container
                        spacing={0}
                        justifyContent="flex-end"
                    >
                    </Grid>
                </>
            }
        </>
    );
}

export default StudentReading;