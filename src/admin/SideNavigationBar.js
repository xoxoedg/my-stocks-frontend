import React, {Component} from "react";


class SideNavigationBar extends Component{
    render() {
        return (
        <ul id="slide-left" className="sidenav sidenav-fixed blue lighten-3">
            <li>
                <div>
                    <div className="collapsible-header"><i className="material-icons">person</i>Admin</div>
                </div>
            </li>
            <li>

                <div className="collapsible-header"><i className="material-icons">filter_drama</i>First</div>
                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>

            </li>

            <li>

                <div className="collapsible-header"><i className="material-icons">place</i>Second</div>
                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>

            </li>
            <li>

                <div className="collapsible-header"><i className="material-icons">whatshot</i>Third</div>
                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>

            </li>

            <li>

                <div className="collapsible-header"><i className="material-icons">whatshot</i>Third</div>
                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>

            </li>

        </ul>
        );
    }
}

export default SideNavigationBar;