import * as React from "react";
import '../css/groupList.css';
import Header from "./Header";
import {Link} from "react-router-dom";

class GroupList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            groups: []
        }
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:8080/groups');
        const body = await response.json();
        this.setState({
            groups: body
        });
    }

    render() {
        const groups = this.state.groups;

        return (
            <div>
                <Header />
                <div id='groupList'>
                    {groups.map(group => {
                        return (
                            <div key={group.id} id='group'>
                                <Link to={'/groups/' + group.id}><h2>{group.name}</h2></Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default GroupList;
