import axios from "axios";
import {useState, useEffect} from "react";
import LookupData from "./LookupData";
import LookupAddModal from "../../lookupModal/LookupAddModal";
import M from "materialize-css";

function LookupTable(props) {
    const [data, setData] = useState([])
    const url = "http://127.0.0.1:5000/administration/lookups";

    useEffect(() => {
        M.AutoInit();
    }, [])


    useEffect(() => {

        axios.get(url).then(response => setData(response.data));
    }, [])

    function onDeleteHandler(lookupToDelete) {
        setData(data.filter(lookup => lookup.app_name !== lookupToDelete))
    }

    function onEditHandler(data) {
        props.onEdit(data)
    }

    return (
        <div className="container lookup-dashboard">
            <div className="card">
                <div className="card-content">

                    <table className="striped">
                        <thead>
                        <tr>
                            <th>Aktie</th>
                            <th>Last Request</th>
                            <th>Last Modified</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map(lookup => <LookupData
                            onEdit={onEditHandler}
                            onDeleteLookup={onDeleteHandler}
                            key={lookup.app_name}
                            app={lookup.app_name}
                            api={lookup.api_name}/>)}
                        </tbody>
                    </table>

                    <LookupAddModal/>
                    <div className="section center-align">
                        <a className="btn-floating   modal-trigger btn-large waves-effect waves-light"
                           href="#modal1"><i className="  material-icons ">add</i></a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LookupTable;