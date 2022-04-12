import axios from "axios";
import {useState, useEffect} from "react";
import LookupData from "./LookupData";

function LookupTable() {
    const [data, setData] = useState([])


    useEffect(() => {
        const url = "http://127.0.0.1:5000/administration/lookups";
        axios.get(url).then(response => setData(response.data));
    },[])



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
            {data.map(lookup => <LookupData
                    key={lookup.app_name}
                    app={lookup.app_name}
                    api={lookup.api_name}/>)}
            </tbody>
        </table>
    )
}

export default LookupTable;