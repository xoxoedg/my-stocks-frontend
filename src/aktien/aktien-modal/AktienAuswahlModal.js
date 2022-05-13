import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {useEffect, useState} from "react";
import {Checkbox, FormControlLabel, FormGroup, TableCell} from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import RequestHandler from "../RequestHandler";
import {SelectedAktie} from "../structs/AktienStructs";

function AktienAuswahlModal(props) {
    const [aktienAuswahl, setAktienAuswahl] = useState([])
    const [selectedAktien, setSelectedAktien] = useState([])

    const requestHandler = new RequestHandler()

    useEffect(() => {
        requestHandler.showAktienAuswahl().then(response => {
            setAktienAuswahl(response.data)
        });
    }, [])

    function aktienHinzufuegen(event) {
        event.preventDefault();
        props.onSubmit(selectedAktien)
    }

    function toggleSelectedAktie(event, name) {
        let selectedAktie = new SelectedAktie(name);
        if (event.target.checked) {
            setSelectedAktien(prevSelectedAktien => {
                return [...prevSelectedAktien, selectedAktie]
            })
        } else {
            setSelectedAktien(prevSelectedAktien => {
                return prevSelectedAktien.filter(item => item.name !== selectedAktie.name)
            })
        }
    }

    return (
        <div>
            <Dialog open={props.open} onClose={props.onClose}>
                <form onSubmit={aktienHinzufuegen}>

                    <DialogTitle>Aktien zu Fundamentalanalyse hinzufügen</DialogTitle>
                    <DialogContent>
                        <TableContainer component={Paper}
                                        sx={{width: 1, margin: "auto"}} center>
                            <Table sx={{minWidth: 300,}} aria-label="simple table">
                                <TableBody>
                                    {aktienAuswahl.map((aktie) =>
                                        <TableRow key={aktie.name}>
                                            <TableCell align="center">
                                                <FormGroup>
                                                    <FormControlLabel
                                                        label={aktie.name}
                                                        onChange={e => toggleSelectedAktie(e, aktie.name)}
                                                        control={<Checkbox/>}
                                                    />
                                                </FormGroup>
                                            </TableCell>
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