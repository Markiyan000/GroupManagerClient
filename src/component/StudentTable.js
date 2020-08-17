import * as React from "react";
import StudentRow from "./StudentRow";
import "../css/studentTable.css";

class StudentTable extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const students = this.props.students;

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => {
                            return (<StudentRow student={student} key={student.id}/>)
                        })}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default StudentTable;
