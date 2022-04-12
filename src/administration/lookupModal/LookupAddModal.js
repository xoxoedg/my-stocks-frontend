import axios from "axios";
import {useState} from "react";

function LookupAddModal() {
    const [appName, setAppName] = useState("")
    const [apiName, setApiName] = useState("")

    function onSubmitHandler() {
        const url = "http://127.0.0.1:5000/administration//lookups/anlegen"
        const requestBody = {
            app_name: appName,
            api_name: appName,
        }
        axios.post(url, {body: requestBody})
    }

    function apiNameChangeHandler(event) {
        setApiName(event.target.value)
    }

    function appNameChangeHandler(event) {
        setAppName(event.target.value)
    }

    return (
        <div id="modal1" className="modal">
            <form onSubmit={onSubmitHandler}>
                <div className="modal-content">

                    <div className="row">
                        <div className="input-field col s6 offset-l3">
                            <input  value onChange={apiNameChangeHandler} type="text" className="validate"/>
                            <label className="active" htmlFor="first_name2">App Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6 offset-l3">
                            <input onChange={appNameChangeHandler} type="text" className="validate"/>
                            <label className="active" htmlFor="first_name2">Api Name</label>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="btn modal-close waves-effect waves-light" type="submit" name="action">Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default LookupAddModal;