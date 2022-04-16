// import "./LookupData.css"
// import axios from "axios";
// import LookupAddModal from "../../lookupModal/LookupAddModal";
// import {useEffect} from "react";
// import M from "materialize-css";
// function LookupData(props) {
//
//     function deleteLookup() {
//         props.onDeleteLookup(props.app)
//     }
//
//     function editLookup(event) {
//         props.onEdit(props.app);
//         console.log(props.app)
//     }
//
//
//     useEffect(() => {
//         M.AutoInit();
//     },[])
//
//
//     return (
//         <tr>
//             <td>{props.app}</td>
//             <td>{props.api}</td>
//             <td>
//                 <a href="#"> <i onClick={deleteLookup} className="material-icons delete-lookup">delete</i></a>
//                 <a className="modal-trigger" href="#modal1"><i onClick={editLookup} className="  material-icons ">edit</i></a>
//
//             </td>
//         </tr>
//
//     )
// }
//
// export default LookupData;