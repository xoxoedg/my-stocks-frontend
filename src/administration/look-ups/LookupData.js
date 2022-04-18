import {TableCell} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import TableRow from "@mui/material/TableRow";
import LookupEditModal from "./lookupModal/LookupEditModal";


function LookupData(props) {

    function deleteHandler() {
        props.onDelete(props.app)
    }

    function editHandler(lookupEntry, app) {
        props.onEdit(lookupEntry, app)
    }

    function prefillHandler(appName) {
        return props.onPrefill(appName)
    }

    return (
        <TableRow>
            <TableCell align="center">{props.app}</TableCell>
            <TableCell align="center">{props.api}</TableCell>
            <TableCell align="center">
                <DeleteIcon onClick={deleteHandler} sx={{cursor: "pointer"}}/>
                <LookupEditModal
                    app={props.app}
                    onPrefill={prefillHandler}
                    onEdit={editHandler}
                />
            </TableCell>
        </TableRow>

    )
}

export default LookupData;