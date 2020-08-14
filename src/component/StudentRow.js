import * as React from "react";
import Header from "./Header";

class StudentRow extends React.Component {

    constructor(props) {
        super(props);
    }

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
