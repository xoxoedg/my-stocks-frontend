import {TableCell} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TableRow from "@mui/material/TableRow";


function LookupData(props) {

    function deleteHandler() {
        console.log(props.app)
        props.onDelete(props.app)
    }

    return (
        <TableRow>
            <TableCell align="center">{props.app}</TableCell>
            <TableCell align="center">{props.api}</TableCell>
            <TableCell align="center">
                <DeleteIcon onClick={deleteHandler} sx={{cursor: "pointer"}}/>
                <EditIcon/>
            </TableCell>
        </TableRow>

    )
}

export default LookupData;