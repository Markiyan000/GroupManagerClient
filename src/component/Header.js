import * as React from "react";
import '../css/header.css';
import {Link} from "react-router-dom";

class Header extends React.Component {

    render() {
        return(
            <div className="header">
                <Link to='/' className="logo">GroupManager</Link>
                <div className="header-right">
                    <Link to='/' className="active">Home</Link>
                    <Link to='/teachers' className="active">Teachers</Link>
                    <Link to='/groups' className="active">Groups</Link>
                    <Link to='/studentsWithoutGroup' className="active">Students</Link>
                </div>
            </div>
        )
    }
}

export default Header;
