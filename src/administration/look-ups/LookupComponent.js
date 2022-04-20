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
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import LookupEditModal from "./lookupModal/LookupEditModal";


function LookupComponent() {
    const [openAddModal, setAddModalOpen] = useState(false);
    const [openEditModal, setEditModalOpen] = useState(false);
    const [lookupRequestspecificData, setLookupRequestSpecificData] = useState({})
    const [clickedAktie, setClickedAktie] = useState("")


    const lookupContext = useContext(LookupContext)

    const handleClickAddModalOpen = () => {
        setAddModalOpen(true);
    };

    const handleAddModalClose = () => {
        setAddModalOpen(false);
    };


    const handleClickEditModalOpen = (lookup) => {
        lookupContext.onPrefill(lookup.app_name).then(res => {
            setLookupRequestSpecificData(res.data)
            setEditModalOpen(true)})
        setClickedAktie(lookup.app_name)
    };

    const handleEditModalClose = () => {
        setEditModalOpen(false);
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

                    {lookupContext.requestData.map(data =>
                            <TableRow key={data.app_name}>
                                <TableCell align="center">{data.app_name}</TableCell>
                                <TableCell align="center">{data.api_name}</TableCell>
                                <TableCell align="center">
                                    <DeleteIcon onClick={() => lookupContext.onLoeschen(data.app_name)}
                                                sx={{cursor: "pointer"}}/>
                                    <EditIcon
                                        onClick={() => handleClickEditModalOpen(data)} sx={{cursor: "pointer"}}/>
                                </TableCell>
                            </TableRow>)
                    }

                </TableBody>
            </Table>
            <Box display="flex" justifyContent="center" mb={3} mt={3}>
                <Button variant="outlined" onClick={handleClickAddModalOpen}>
                    Open form dialog
                </Button>
                <LookupAddModal onSubmit={lookupContext.onAnlegen} open={openAddModal} onClose={handleAddModalClose}/>
                <LookupEditModal clickedAktie={clickedAktie} specificData={lookupRequestspecificData} onSubmit={lookupContext.onEdit}
                                 open={openEditModal} onClose={handleEditModalClose}/>
            </Box>
        </TableContainer>
    );
}

export default LookupComponent;