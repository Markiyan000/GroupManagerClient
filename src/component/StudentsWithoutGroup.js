import * as React from "react";
import StudentTable from "./StudentTable";
import Header from "./Header";


class StudentsWithoutGroup extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            students: [],
            isLoading: true
        }
    }

    async componentDidMount() {
        const response = await fetch(`http://localhost:8080/students/withoutGroup`);
        const body = await response.json();

        this.setState({
            isLoading: false,
            students: body
        });
    }

    render() {
        if (this.state.isLoading) {
            return <h1>Loading...</h1>
        }

        const students = this.state.students;

        return (
            <div>
                <Header />
                <StudentTable students = {students} />
            </div>
        );
    }
}

export default StudentsWithoutGroup;
