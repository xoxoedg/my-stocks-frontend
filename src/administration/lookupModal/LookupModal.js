import axios from "axios";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {useState} from "react";
import {Grid} from "@mui/material";

function LookupModal() {
    const [fullWidth, setFullWidth] = useState(true);
    // const [appName, setAppName] = useState("")
    // const [apiName, setApiName] = useState("")
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    //
    // function onSubmitHandler() {
    //     const url = "http://127.0.0.1:5000/administration//lookups/anlegen"
    //     const requestBody = {
    //         app_name: appName,
    //         api_name: appName,
    //     }
    //     axios.post(url, {body: requestBody})
    // }
    //
    // function apiNameChangeHandler(event) {
    //     setApiName(event.target.value)
    // }


    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
            </Button>

            <Dialog open={open} onClose={handleClose}
                    fullWidth={fullWidth}>
                <form>


                    <DialogTitle>Enter new Lookup</DialogTitle>
                    <DialogContent>
                        <Grid container spacing={3} direction="column" sx={{marginTop: "3px"}}>
                            <Grid item xs={12} xm={12} xl={12}>
                                <TextField
                                    label="Api Name"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} xm={12} xl={12}>
                                <TextField
                                    label="App Name"
                                    fullWidth/>
                            </Grid>
                        </Grid>
                    </DialogContent>


                    <DialogActions>
                        <Button onClick={handleClose} variant="contained">Cancel</Button>
                        <Button type="submit" onClick={handleClose} variant="contained">Add</Button>
                    </DialogActions>

                </form>
            </Dialog>

        </div>
    );
}

export default LookupModal;