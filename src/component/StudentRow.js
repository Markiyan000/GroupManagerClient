import * as React from "react";
import transferIcon from '../images/transfer_icon.jpg';
import deleteIcon from '../images/delete_icon.png';
import '../css/studentRow.css';

class StudentRow extends React.Component {

    constructor(props) {
        super(props);

        this.handleTransferClick = this.handleTransferClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    };

    async handleTransferClick(event) {
        event.preventDefault();
        const studentId = this.props.student.id;
        const groupId = this.props.groupId;
        const groupName = prompt('Please, choose group');

        if (groupName == null) {
            return;
        }

        await fetch(`http://localhost:8080/students/${studentId}/transfer?groupName=${groupName}`, {
            method: 'GET'
        });

        window.location.href = `/groups/${groupId}`;
    }

    askAboutDeleting() {
        const {student} = this.props;

        return window.confirm(`Do you really want to delete ${student.firstName} ${student.lastName}?`);
    }

    async handleDeleteClick() {
        const studentId = this.props.student.id;
        const groupId = this.props.groupId;

        if (!this.askAboutDeleting()) {
            return;
        }

        await fetch(`http://localhost:8080/students/${studentId}`, {
            method: 'DELETE',
        });

        window.location.href = `/groups/${groupId}`;
    }


    render() {

        const {student} = this.props;

        return (
            <tr>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.age}</td>
                <td><button onClick={this.handleTransferClick}><img alt={'transfer'} src={transferIcon} /></button></td>
                <td><button onClick={this.handleDeleteClick}><img alt={'delete'} src={deleteIcon} /></button></td>
            </tr>
        );
    }
}

export default StudentRow;
