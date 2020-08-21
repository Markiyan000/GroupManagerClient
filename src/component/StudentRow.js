import * as React from "react";

class StudentRow extends React.Component {

    constructor(props) {
        super(props);

        this.handleTransferClick = this.handleTransferClick.bind(this);
    }

    async handleTransferClick(event) {
        event.preventDefault();

        const studentId = this.props.student.id;
        const groupName = prompt('Please, choose group');

        if (groupName == null) {
            return;
        }

        await fetch(`http://localhost:8080/students/${studentId}/transfer?groupName=${groupName}`, {
            method: 'GET'
        });
    }


    render() {

        const {student} = this.props;

        return (
            <tr>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.age}</td>
                <td><button onClick={this.handleTransferClick}>Transfer</button></td>
            </tr>
        );
    }
}

export default StudentRow;
