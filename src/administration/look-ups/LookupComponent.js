import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import {Box, TableCell} from "@mui/material";
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LookupAddModal from "./lookupModal/LookupAddModal";
import {useContext, useState} from "react";
import LookupData from "./LookupData";

import Button from "@mui/material/Button";
import LookupContext from "./data-store/lookup-context";


function LookupComponent() {
    const [open, setOpen] = useState(false);
    const lookupContext = useContext(LookupContext)
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
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
                    {lookupContext.requestData.map(lookup=> <LookupData
                        onDelete={lookupContext.onLoeschen}
                        onPrefill={lookupContext.onPrefill}
                        onEdit={lookupContext.onEdit}
                        key={lookup.app_name}
                        app={lookup.app_name}
                        api={lookup.api_name}/>)}
                </TableBody>
            </Table>
            <Box display="flex" justifyContent="center" mb={3} mt={3}>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Open form dialog
                </Button>
                <LookupAddModal onSubmit={lookupContext.onAnlegen}  open={open} onClose={handleClose}/>
            </Box>
        </TableContainer>
    );
}
export default LookupComponent;