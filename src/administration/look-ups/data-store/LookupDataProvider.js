import LookupContext from "./lookup-context";
import {useState, useEffect} from "react";
import RequestHandler from "../../common/RequestHandler";


function LookupDataProvider(props) {
    const [lookupRequestData, setLookupRequestData] = useState([])
    const requestHandler = new RequestHandler()
    useEffect(() => {
        requestHandler.handleLookupGetRequest().then(response => {
            setLookupRequestData(response.data)
            console.log()
        });

    }, [])

    function anlegenHandler(neuerEintrag) {
        requestHandler.handleLookupPostRequest(neuerEintrag).then(response => null)
        setLookupRequestData(prevLookupRequestData => {
            return [...prevLookupRequestData, neuerEintrag]
        })
    }
    function loeschenHandler(eintragToDelete) {
        requestHandler.handleLookupDeleteRequest(eintragToDelete).then(response => null)
        console.log(eintragToDelete)
        setLookupRequestData(lookupRequestData.filter(lookup => lookup.id !== eintragToDelete))
    }
    function preFillEditHandler(appName) {
        return requestHandler.handleSpecificLookupGetRequest(appName)
    }
    function editHandler(lookupEntry, app) {
        requestHandler.handleEditLookupRequest(lookupEntry)
        setLookupRequestData(lookupRequestData.map(lookup => lookup.app_name === app ? lookupEntry : lookup))
    }

    return (
        <LookupContext.Provider value={{
            requestData: lookupRequestData,
            onAnlegen: anlegenHandler,
            onLoeschen: loeschenHandler,
            onPrefill: preFillEditHandler,
            onEdit: editHandler,
            }}>
            {props.children}
        </LookupContext.Provider>
    )

}

export default LookupDataProvider;