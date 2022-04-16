import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import {Box, TableCell} from "@mui/material";
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LookupModal from "../../lookupModal/LookupModal";
import {useEffect, useState} from "react";
import axios from "axios";
import LookupData from "./LookupData";


function LookupTable() {
    const [lookupRequestData, setLookupRequestData] = useState([])
    const url = "http://127.0.0.1:5000/administration/lookups"
    const url2 = "http://127.0.0.1:5000/administration/lookups/anlegen"

    useEffect(() => {
        axios.get(url).then(response => setLookupRequestData(response.data));
        }, [])

    function anlegenHandler(neuerEintrag) {
        axios.post(url2, neuerEintrag);
        setLookupRequestData(prevLookupRequestData => {
            return [...prevLookupRequestData, neuerEintrag]
        })
    }

    console.log(lookupRequestData)

    return (
        <TableContainer component={Paper} sx={{width: 0.5, margin:"auto", marginTop: 20, padding:"3%"}} center>
            <Table sx={{minWidth: 400,  }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">App Name</TableCell>
                        <TableCell align="center">Api Name</TableCell>
                        <TableCell align="center">Edit</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {lookupRequestData.map(lookup => <LookupData
                        key={lookup.app_name}
                        app={lookup.app_name}
                        api={lookup.api_name}/>)}


                </TableBody>
            </Table>

            <Box display="flex" justifyContent="center" mb={3} mt={3}>
                <LookupModal onSubmit={anlegenHandler}/>
            </Box>


        </TableContainer>

    );
}

export default LookupTable;