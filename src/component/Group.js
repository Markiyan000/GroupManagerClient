import * as React from "react";
import Header from "./Header";
import '../css/group.css';
import StudentTable from "./StudentTable";
import AddStudent from "./AddStudent";
import ChoosingCurator from "./ChoosingCurator";

class Group extends React.Component {

    constructor(props) {
        super(props);

        this.notCurators = [];

        this.state = {
            group: {},
            isLoading: true,
            hasCurator: false
        }
    }

    async componentDidMount() {
        const groupId = this.props.match.params.id;
        const response = await fetch(`http://localhost:8080/groups/${groupId}`);
        const body = await response.json();
        const hasCurator = body.curator !== null;
        this.setState({
            group: body,
            isLoading: false,
            hasCurator: hasCurator
        });
    }

    render() {

        if (this.state.isLoading) {
            return <h1>Loading...</h1>
        }

        const {id, name, dateOfCreation, students} = this.state.group;
        let curator;
        if (this.state.group.curator != null) {
            curator = this.state.group.curator;
        }

        return (
            <div>
                <Header/>
                <div id='name'>
                    <strong>{name}</strong>
                </div>
                <div id='groupInfo'>
                    <span>Name: {name}</span>
                    <span>Date Of Creation: {dateOfCreation}</span>
                    {
                        this.state.hasCurator ?
                            <span>Curator: {curator.firstName + ' ' + curator.lastName}</span> :
                            <ChoosingCurator groupId={id}/>
                    }
                </div>
                <StudentTable students={students} groupId={id}/>
                <AddStudent groupId={id}/>
            </div>
        );
    }
}

export default Group;
