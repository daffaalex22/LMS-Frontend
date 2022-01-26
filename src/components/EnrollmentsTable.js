import Box from "@mui/material/Box";
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useFetch from "../customHooks/useFetch";
import { useParams } from "react-router";
import { useState } from "react";
import { yellow, indigo } from "@mui/material/colors";
import { jsPDF } from "jspdf";
import { useEffect } from "react";

const classes = {
    tableCell: {
        borderBottom: '1px solid black'
    }
}

const EnrollmentsTable = () => {

    const doc = new jsPDF({ putOnlyUsedFonts: true, orientation: "landscape" });

    function createHeaders(keys) {
        var result = [];
        for (var i = 0; i < keys.length; i += 1) {
            result.push({
                id: keys[i],
                name: keys[i],
                prompt: keys[i],
                width: 65,
                align: "center",
                padding: 0
            });
        }
        return result;
    }

    const headers = createHeaders([
        "Name",
        "Email",
        "Phone",
        "Address",
        "Rating",
        "Review",
    ]);

    const { id } = useParams()
    const [studentData, setStudentData] = useState([]);

    const {
        data: enrollData,
        isPending: enrollmentsPending,
        error: enrollmentsError,
    } = useFetch("http://13.59.7.136:8080/api/v1/courses/" + id + "/enrollments");

    useEffect(async () => {
        if (enrollData) {
            let array = []
            for (let i = 0; i < enrollData?.data?.length; i++) {
                let item = {
                    Name: enrollData?.data[i].student.name,
                    Email: enrollData?.data[i].student.email,
                    Phone: enrollData?.data[i].student.phone != 0 ? enrollData?.data[i].student.phone : "unavailable",
                    Address: enrollData?.data[i].student.address ? enrollData?.data[i].student.address : "unavailable",
                    Rating: enrollData?.data[i].rating.toString(),
                    Review: enrollData?.data[i].review ? enrollData?.data[i].review.slice(0, 20) + "..." : "unavailable",
                }
                console.log("item", item)
                array.push(item)
            }
            setStudentData(array)
        }
        console.log("studentData", studentData)
    }, [enrollData]);

    const generatePdf = () => {
        doc.table(1, 1, studentData, headers, { autoSize: true });
        doc.save("Students.pdf")
    }



    return (
        <Box
            sx={{
                borderRadius: '15px'
            }}
        >
            <Button
                sx={{
                    color: 'white',
                    marginTop: '20px',
                    marginBottom: "25px",
                    backgroundColor: indigo[500],
                    padding: '10px 25px',
                    borderRadius: '20px',
                    '&:hover': {
                        backgroundColor: indigo[400],
                    }
                }}
                onClick={generatePdf}
            >
                Download Table as PDF
            </Button>
            <TableContainer component={Paper} sx={{ backgroundColor: yellow[300] }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={classes.tableCell}>Name</TableCell>
                            <TableCell sx={classes.tableCell}>Email</TableCell>
                            <TableCell sx={classes.tableCell}>Phone</TableCell>
                            <TableCell sx={classes.tableCell}>Address</TableCell>
                            <TableCell sx={classes.tableCell}>Rating</TableCell>
                            <TableCell sx={classes.tableCell}>Review</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {enrollData?.data?.map((row) => (
                            <TableRow
                                key={row.studentId}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell sx={classes.tableCell} component="th" scope="row">
                                    {row.student.name}
                                </TableCell>
                                <TableCell sx={classes.tableCell}>{row.student.email}</TableCell>
                                <TableCell sx={classes.tableCell}>{row.student.phone != 0 ? row.student.phone : <i>unavailable</i>}</TableCell>
                                <TableCell sx={classes.tableCell}>{row.student.address ? row.student.address : <i>unavailable</i>}</TableCell>
                                <TableCell sx={classes.tableCell}>{row.rating}</TableCell>
                                <TableCell sx={classes.tableCell}>{row.review ? row.review.slice(0, 20) + "..." : <i>unavailable</i>}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box >
    );
}

export default EnrollmentsTable;