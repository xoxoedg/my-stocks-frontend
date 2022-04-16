import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import {Box, TableCell} from "@mui/material";
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import LookupModal from "../../lookupModal/LookupModal";


function LookupTable() {

    return (
        <TableContainer component={Paper} sx={{width: 0.5, margin:"auto", marginTop: 20, padding:"3%"}} center>
            <Table sx={{minWidth: 400,  }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Dessert (100g serving)</TableCell>
                        <TableCell align="right">dasa</TableCell>
                        <TableCell align="right">sss</TableCell>
                        <TableCell align="right">123</TableCell>
                        <TableCell align="right">Calories</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align="center">123123</TableCell>
                        <TableCell align="right">123123</TableCell>
                        <TableCell align="right">was</TableCell>
                        <TableCell align="right">das</TableCell>
                        <TableCell align="right">
                            <DeleteIcon sx={{cursor: "pointer"}}/>
                            <EditIcon/>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">123123</TableCell>
                        <TableCell align="right">123123</TableCell>
                        <TableCell align="right">was</TableCell>
                        <TableCell align="right">das</TableCell>
                        <TableCell align="right">
                            <DeleteIcon/>
                            <EditIcon/>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">123123</TableCell>
                        <TableCell align="right">123123</TableCell>
                        <TableCell align="right">was</TableCell>
                        <TableCell align="right">das</TableCell>
                        <TableCell align="right">
                            <DeleteIcon/>
                            <EditIcon/>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">123123</TableCell>
                        <TableCell align="right">123123</TableCell>
                        <TableCell align="right">was</TableCell>
                        <TableCell align="right">das</TableCell>
                        <TableCell align="right">
                            <DeleteIcon/>
                            <EditIcon/>
                        </TableCell>
                    </TableRow>

                </TableBody>
            </Table>

            <Box display="flex" justifyContent="center" mb={3} mt={3}>
                <LookupModal/>
            </Box>


        </TableContainer>

    );
}

export default LookupTable;