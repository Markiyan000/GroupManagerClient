import * as React from "react";

class TeacherRow extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        const id = this.props.teacher.id;
        window.location.href = `/teachers/${id}`;
    }

    render() {

        const teacher = this.props.teacher;

        return (
            <tr onClick={this.handleClick}>
                <td>{teacher.firstName}</td>
                <td>{teacher.lastName}</td>
            </tr>
        );
    }
}

export default TeacherRow;
