import * as React from "react";
import StudentRow from "./StudentRow";
import "../css/table.css";

class StudentTable extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {students, groupId} = this.props;

        console.log(students);

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Transfer</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <StudentRow student={student} key={student.id} groupId={groupId}/>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );
    }

}

export default StudentTable;
