import * as React from "react";
import Header from "./Header";
import TeacherRow from "./TeacherRow";
import AddTeacher from "./AddTeacher";

class TeacherTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            teachers: [],
            isLoading: true
        }
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:8080/teachers/');
        const body = await response.json();
        this.setState({
            teachers: body,
            isLoading: false
        });
    }

    render() {
        const teachers = this.state.teachers;

        if (this.state.isLoading) {
            return <h1>Loading...</h1>
        }

        return (
            <div>
                <Header/>
                <table>
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            teachers.map((teacher) => {
                                return <TeacherRow teacher={teacher} key={teacher.id}/>
                            })
                        }
                    </tbody>
                </table>
                <AddTeacher />
            </div>
        );
    }
}

export default TeacherTable;
