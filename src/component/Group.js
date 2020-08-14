import * as React from "react";
import Header from "./Header";
import '../css/group.css';
import StudentTable from "./StudentTable";

class Group extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            group: {},
            isLoading: true
        }
    }

    async componentDidMount() {
        const groupId = this.props.match.params.id;
        const response = await fetch(`http://localhost:8080/groups/${groupId}`);
        const body = await response.json();
        this.setState({
            group: body,
            isLoading: false
        });
    }

    render() {

        if (this.state.isLoading) {
            return <h1>Loading...</h1>
        }

        const {name, dateOfCreation, curator, students} = this.state.group;

        return (
            <div>
                <Header/>
                <div id='name'>
                    <strong>{name}</strong>
                </div>
                <div id='groupInfo'>
                    <span>Name: {name}</span>
                    <span>Date Of Creation: {dateOfCreation}</span>
                    <span>Curator: {curator.firstName + ' ' + curator.lastName}</span>
                </div>
                <StudentTable students={students} />
            </div>
        );
    }
}

export default Group;
