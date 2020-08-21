import * as React from "react";

class StudentRow extends React.Component {

    render() {

        const {student} = this.props;

        return (
            <tr>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.age}</td>
            </tr>
        );
    }
}

export default StudentRow;
