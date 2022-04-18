import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import {Box, TableCell} from "@mui/material";
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LookupAddModal from "./lookupModal/LookupAddModal";
import {useEffect, useState} from "react";
import LookupData from "./LookupData";
import RequestHandler from "../common/RequestHandler";
import Button from "@mui/material/Button";


function LookupComponent() {
    const [open, setOpen] = useState(false);
    const [lookupRequestData, setLookupRequestData] = useState([])
    const requestHandler = new RequestHandler()

    useEffect(() => {
        requestHandler.handleLookupGetRequest().then(response => setLookupRequestData(response.data));
    }, [])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    function anlegenHandler(neuerEintrag) {
        requestHandler.handleLookupPostRequest(neuerEintrag).then(response => null)
        setLookupRequestData(prevLookupRequestData => {
            return [...prevLookupRequestData, neuerEintrag]
        })
    }

    function loeschenHandler(eintragToDelete) {
        requestHandler.handleLookupDeleteRequest(eintragToDelete).then(response => null)
        setLookupRequestData(lookupRequestData.filter(lookup => lookup.app_name !== eintragToDelete))
    }

    function preFillEditHandler(appName) {
        return requestHandler.handleSpecificLookupGetRequest(appName)
    }

    function editHandler(lookupEntry, app) {
        console.log(lookupEntry)
        requestHandler.handleEditLookupRequest(lookupEntry)
        setLookupRequestData( lookupRequestData.map(lookup => lookup.app_name === app ? lookupEntry:lookup))



    }

    return (
        <TableContainer component={Paper} sx={{width: 0.5, margin: "auto", marginTop: 20, padding: "3%"}} center>
            <Table sx={{minWidth: 400,}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">App Name</TableCell>
                        <TableCell align="center">Api Name</TableCell>
                        <TableCell align="center">Edit</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {lookupRequestData.map(lookup => <LookupData
                        onDelete={loeschenHandler}
                        onPrefill={preFillEditHandler}
                        onEdit={editHandler}
                        key={lookup.app_name}
                        app={lookup.app_name}
                        api={lookup.api_name}/>)}


                </TableBody>
            </Table>

            <Box display="flex" justifyContent="center" mb={3} mt={3}>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Open form dialog
                </Button>
                <LookupAddModal onSubmit={anlegenHandler}  open={open} onClose={handleClose}/>
            </Box>


        </TableContainer>

    );
}

export default LookupComponent;