import LookupTable from "./LookupTable";
import M from 'materialize-css';
import {useEffect} from "react";
import "./LookupDashboard.css"

function LookupDashboard() {

    useEffect(() => {
        M.AutoInit();
    },[])

    return (
        <div className="container lookup-dashboard">
            <div className="card">
                <div className="card-content">
                    <LookupTable/>
                    <div className="section center-align">
                        <a className="btn-floating  btn-large waves-effect waves-light"><i className="  material-icons ">add</i></a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LookupDashboard;