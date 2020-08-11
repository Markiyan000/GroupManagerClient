import * as React from "react";
import '../css/header.css';

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="header">
                <a className="logo">GroupManager</a>
                <div className="header-right">
                    <a className="active">Home</a>
                    <a>Contact</a>
                    <a>About</a>
                </div>
            </div>
        )
    }
}

export default Header;
