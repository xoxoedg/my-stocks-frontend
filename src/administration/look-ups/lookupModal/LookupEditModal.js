import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {useState} from "react";
import {Grid} from "@mui/material";

function LookupEditModal(props) {
    const [fullWidth, setFullWidth] = useState(true);
    const [appName, setAppName] = useState("")
    const [apiName, setApiName] = useState("")


    function onSubmitHandler(event) {
        event.preventDefault()
        const requestBody = {
            id: props.clickedAktie.id,
            app_name: appName,
            api_name: apiName,
        }
        props.onSubmit(requestBody, props.clickedAktie.app_name)
    }

    function apiNameOnChangeHandler(event) {
        setApiName(event.target.value)
    }

    function appNameOnChangeHandler(event) {
        setAppName(event.target.value)
    }


    return (
        <>
            <Dialog open={props.open} onClose={props.onClose}
                    fullWidth={fullWidth}>
                <form onSubmit={onSubmitHandler}>


                    <DialogTitle>Edit lookup</DialogTitle>
                    <DialogContent>
                        <Grid container spacing={3} direction="column" sx={{marginTop: "3px"}}>
                            <Grid item xs={12} xm={12} xl={12}>
                                <TextField
                                    defaultValue={props.specificData.api_name}
                                    label="Api Name"
                                    variant="outlined"
                                    fullWidth
                                    onChange={apiNameOnChangeHandler}
                                />
                            </Grid>
                            <Grid item xs={12} xm={12} xl={12}>
                                <TextField
                                    defaultValue={props.specificData.app_name}
                                    label="App Name"
                                    fullWidth
                                    onChange={appNameOnChangeHandler}/>
                            </Grid>
                        </Grid>
                    </DialogContent>


                    <DialogActions>
                        <Button onClick={props.onClose} variant="contained">Cancel</Button>
                        <Button type="submit" onClick={props.onClose} variant="contained">Add</Button>
                    </DialogActions>

                </form>
            </Dialog>

        </>
    );
}

export default LookupEditModal;