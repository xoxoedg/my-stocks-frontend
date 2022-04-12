import axios from "axios";
import {useState, useEffect} from "react";

function LookupTable() {
    const [data, setData] = useState([])
    //
    // "
    // function getRequest() {
    //     axios.get(url).then(response => setData(response.data));
    // }

    useEffect(() => {
        const url = "http://127.0.0.1:5000/administration/lookups";
        axios.get(url).then(response => setData(response.data));
    },[data])

    return (
        <table>
            <thead>
            <tr>
                <th>Aktie</th>
                <th>Last Request</th>
                <th>Last Modified</th>
            </tr>
            </thead>
            <tbody>
            {data.map(a =>   <tr>
                <td>{a.app_name}</td>
                <td>{a.api_name}</td>
                <td><i className="material-icons">delete</i>
                    <i className="material-icons">edit</i>
                </td>
                </tr>)}
            </tbody>
        </table>
    )
}

export default LookupTable;