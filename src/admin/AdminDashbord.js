import React, {Component} from "react";
import AktienTable from "./AktienTable";

class AdminDashbord extends Component {
    render() {
        return (
            <div className="col s12 admin-wrapper">
                <div className="card admin-layer">
                    <div className="card-content">
                        <AktienTable />
                    </div>

                </div>
            </div>
        );
    }

}

export default AdminDashbord;
