import React, {Component} from "react";
import "./admin.css"

class MappingInput extends Component {
    render() {
        return (
            <div className="row mapping-input ">
                <form className="col s12 ">
                    <div className="row ">
                        <div className="input-field col s4 offset-l2">
                            <input  id="first_name" type="text" className="validate"/>
                            <label htmlFor="first_name">First Name</label>
                        </div>
                        <div className="input-field col s4 ">
                            <input id="last_name" type="text" className="validate"/>
                            <label htmlFor="last_name">Last Name</label>
                        </div>
                        <div className="col s1 add-button">
                                <i className="large material-icons">add_box</i>
                        </div>
                    </div>
                </form>
            </div>
   )
    }
}

export default MappingInput;