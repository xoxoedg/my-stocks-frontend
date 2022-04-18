import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {useEffect, useState} from "react";
import {Grid} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

function LookupEditModal(props) {
    const [fullWidth, setFullWidth] = useState(true);
    const [appName, setAppName] = useState("")
    const [apiName, setApiName] = useState("")
    const [open, setOpen] = useState(false);


    const handleClickOpen = () => {

        props.onPrefill(props.app).then(prefillData => {
            console.log(prefillData)
            setApiName(prefillData.data.api_name)
            setAppName(prefillData.data.app_name)
        })

        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    function onSubmitHandler(event) {
        event.preventDefault()
        const requestBody = {
            old_app_name: props.app,
            app_name: appName,
            api_name: apiName,
        }
        props.onEdit(requestBody, props.app)
    }

    function apiNameOnChangeHandler(event) {
        setApiName(event.target.value)
    }

    function appNameOnChangeHandler(event) {
        setAppName(event.target.value)
    }

    return (
        <>
            <EditIcon onClick={handleClickOpen} sx={{cursor: "pointer"}}/>


            <Dialog open={open} onClose={handleClose}
                    fullWidth={fullWidth}>
                <form onSubmit={onSubmitHandler}>


                    <DialogTitle>Edit lookup</DialogTitle>
                    <DialogContent>
                        <Grid container spacing={3} direction="column" sx={{marginTop: "3px"}}>
                            <Grid item xs={12} xm={12} xl={12}>
                                <TextField
                                    value={apiName}
                                    label="Api Name"
                                    variant="outlined"
                                    fullWidth
                                    onChange={apiNameOnChangeHandler}
                                />
                            </Grid>
                            <Grid item xs={12} xm={12} xl={12}>
                                <TextField
                                    value={appName}
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

        </>
    );
}

export default LookupEditModal;