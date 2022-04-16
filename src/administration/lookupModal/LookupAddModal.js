import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {useState} from "react";
import {Grid} from "@mui/material";

function LookupAddModal(props) {
    const [fullWidth, setFullWidth] = useState(true);
    const [appName, setAppName] = useState("")
    const [apiName, setApiName] = useState("")
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    function onSubmitHandler() {
        const requestBody = {
            app_name: appName,
            api_name: apiName,
        }
        props.onSubmit(requestBody)
    }

    function apiNameOnChangeHandler(event) {
        setApiName(event.target.value)
    }

    function appNameOnChangeHandler(event) {
        setAppName(event.target.value)
    }

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen} >
                Open form dialog
            </Button>


            <Dialog open={open} onClose={handleClose}
                    fullWidth={fullWidth}>
                <form onSubmit={onSubmitHandler}>


                    <DialogTitle>Enter new Lookup</DialogTitle>
                    <DialogContent>
                        <Grid container spacing={3} direction="column" sx={{marginTop: "3px"}}>
                            <Grid item xs={12} xm={12} xl={12}>
                                <TextField
                                    label="Api Name"
                                    variant="outlined"
                                    fullWidth
                                    onChange={apiNameOnChangeHandler}
                                />
                            </Grid>
                            <Grid item xs={12} xm={12} xl={12}>
                                <TextField
                                    label="App Name"
                                    fullWidth
                                    onChange={appNameOnChangeHandler}/>
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

export default LookupAddModal;