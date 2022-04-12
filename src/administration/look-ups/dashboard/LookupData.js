import "./LookupData.css"
import axios from "axios";
function LookupData(props) {

    function deleteLookup() {
        const url = `http://127.0.0.1:5000/administration/lookups/loeschen/${props.app}`
        axios.delete(url).then(response => console.log(response));
        props.onDeleteLookup(props.app)


    }


    return (
        <tr>
            <td>{props.app}</td>
            <td>{props.api}</td>
            <td>
                <i onClick={deleteLookup} className="material-icons delete-lookup">delete</i>
                <i className="material-icons edit-lookup">edit</i>
            </td>
        </tr>

    )
}

export default LookupData;