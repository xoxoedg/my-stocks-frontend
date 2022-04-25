import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {useContext, useState} from "react";
import {Checkbox, TableCell} from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import AktienContext from "../data-store/AktienContext";

function AktienAuswahlModal(props) {
    const [fullWidth, setFullWidth] = useState(true);
    const [selectedAktien, setSelectedAktien] = useState("")

    const aktienContext = useContext(AktienContext)

    function onSubmitHandler(event) {
        // event.preventDefault();
        // const requestBody = {
        //     app_name: appName,
        //     api_name: apiName,
        // }
        // props.onSubmit(requestBody)
    }

    // function apiNameOnChangeHandler(event) {
    //     setApiName(event.target.value)
    // }
    //
    // function appNameOnChangeHandler(event) {
    //     setAppName(event.target.value)
    // }

    return (
        <div>
            <Dialog open={props.open} onClose={props.onClose} fullWidth={fullWidth}>
                <form onSubmit={onSubmitHandler}>

                    <DialogTitle>Enter new Lookup</DialogTitle>
                    <DialogContent>
                        <TableContainer component={Paper}
                                        sx={{width: 0.5, margin: "auto", marginTop: 20, padding: "3%"}} center>
                            <Table sx={{minWidth: 400,}} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">Hinzufügen</TableCell>
                                        <TableCell align="center">Aktie</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                        <TableRow>
                                            <TableCell align="center">
                                                <Checkbox defaultChecked/>
                                            </TableCell>
                                            <TableCell align="center">ABC</TableCell>
                                        </TableRow>
                                </TableBody>
                                <TableBody>
                                    {aktienContext.aktienAuswahl.map((aktie) =>
                                        <TableRow key={aktie.name}>
                                            <TableCell align="center">
                                                <Checkbox defaultChecked/>
                                            </TableCell>
                                            <TableCell align="center">{aktie.name}</TableCell>
                                        </TableRow>)
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={props.onClose} variant="contained">Abbrechen</Button>
                        <Button type="submit" onClick={props.onClose} variant="contained">Bestätigen</Button>
                    </DialogActions>

                </form>
            </Dialog>

        </div>
    );
}

export default AktienAuswahlModal;