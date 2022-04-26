import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {useEffect, useState} from "react";
import {Checkbox, TableCell} from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import RequestHandler from "../RequestHandler";

function AktienAuswahlModal(props) {
    const [aktienAuswahl, setAktienAuswahl] = useState([])

    const requestHandler = new RequestHandler()

    useEffect(() => {
        requestHandler.showAktienAuswahl().then(response => {
            setAktienAuswahl(response.data)
        });
    }, [])

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
            <Dialog open={props.open} onClose={props.onClose} wi>
                <form onSubmit={onSubmitHandler}>

                    <DialogTitle>Aktien zu Fundamentalanalyse hinzufügen</DialogTitle>
                    <DialogContent>
                        <TableContainer component={Paper}
                                        sx={{width: 1, margin: "auto"}} center>
                            <Table sx={{minWidth: 300,}} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">Hinzufügen</TableCell>
                                        <TableCell align="center">Aktie</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {aktienAuswahl.map((aktie) =>
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