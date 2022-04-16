import {TableCell} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TableRow from "@mui/material/TableRow";


function LookupData(props) {

    return (
        <TableRow>
            <TableCell align="center">{props.app}</TableCell>
            <TableCell align="right">{props.api}</TableCell>
            <TableCell align="right">
                <DeleteIcon sx={{cursor: "pointer"}}/>
                <EditIcon/>
            </TableCell>
        </TableRow>

    )
}

export default LookupData;