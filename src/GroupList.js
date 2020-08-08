import * as React from "react";
import './css/groupList.css';

class GroupList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            groups: []
        }
    }

    formatDate(array) {
        return array[2] + '.' + array[1] + '.' + array[0];
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:8080/groups');
        const body = await response.json();
        this.setState({
            groups: body
        });
    }

    render() {

        return (
            <div id='groupList'>
                {this.state.groups.map(group => {
                    return (
                        <div key={group.id} id='group'>
                            <h2>{group.name}</h2>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default GroupList;
