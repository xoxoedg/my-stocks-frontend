import "./LookupData.css"
import axios from "axios";
import LookupAddModal from "../../lookupModal/LookupAddModal";
import {useEffect} from "react";
import M from "materialize-css";
function LookupData(props) {

    function deleteLookup() {
        const url = `http://127.0.0.1:5000/administration/lookups/loeschen/${props.app}`
        axios.delete(url).then(response => console.log(response));
        props.onDeleteLookup(props.app)
    }


    useEffect(() => {
        M.AutoInit();
    },[])


    return (
        <tr>
            <td>{props.app}</td>
            <td>{props.api}</td>
            <td>
                <a href="#"> <i onClick={deleteLookup} className="material-icons delete-lookup">delete</i></a>
                <a className="modal-trigger" href="#modal1"><i className="  material-icons ">edit</i></a>

            </td>
        </tr>

    )
}

export default LookupData;