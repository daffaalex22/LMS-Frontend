import ReadingDescription from "../components/ReadingDescription";
import Title from "../components/Title";
import Discussion from "../components/Discussion";
import SideBar from "../components/SideBar";
import ReactLoading from 'react-loading';
import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import useFetch from "../customHooks/useFetch";
import { yellow, indigo } from "@mui/material/colors";
import { useState, useEffect } from "react";

const classes = {
    thumbnail: {
        width: '100%',
        height: '100%',
        borderRadius: '20px',
    },
    star: {
        position: 'relative',
        top: '8px',
        marginRight: '10px',
    },
    reviewCount: {
        display: 'inline',
        position: 'relative',
        bottom: '6px',
        left: '10px'
    },
    btn: {
        marginTop: '20px',
        backgroundColor: indigo[500],
        padding: '10px 25px',
        borderRadius: '20px',
        '&:hover': {
            backgroundColor: indigo[400],
            borderColor: indigo[500],
        }
    },
    yellowBar: {
        height: 'auto',
        width: '100%',
        borderRadius: '10px',
        backgroundColor: yellow[600]
    },
    yellowBarTitle: {
        padding: '20px 30px',
        fontWeight: 500
    },
    description: {
        fontWeight: 300,
        marginTop: '30px',
        textAlign: 'justify'
    },
    lightYellowBar: {
        width: '100%',
        borderRadius: '25px',
        backgroundColor: yellow[200],
        margin: '0px 30px 20px 30px',
        padding: '100px auto',
        textAlign: 'center'
    },
}

const StudentReading = () => {
    const [filterReview, setFilterReview] = useState(0)
    const [threads, setThreads] = useState(null)
    const [reviewItems, setReviewItems] = useState(3)

    const { data: reading, isPending: readingPending } = useFetch('http://localhost:8000/readings/' + 1)
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
            {readingPending || threadsPending ?
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

                            <SideBar/>
                            <Title
                                reading={reading}
                            />
                            <ReadingDescription
                                description={reading?.content}
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