import LookupTable from "./LookupTable";

function LookupDashboard() {
    return (
        <div className="container">
            <div className="admin-wrapper">
                <div className="card admin-layer">
                    <div className="card-content">
                        <LookupTable/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LookupDashboard;