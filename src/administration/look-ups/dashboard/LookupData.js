function LookupData(props) {


    return (
        <tr>
            <td>{props.app}</td>
            <td>{props.api}</td>
            <td><i className="material-icons">delete</i>
                <i className="material-icons">edit</i>
            </td>
        </tr>
    )
}

export default LookupData;