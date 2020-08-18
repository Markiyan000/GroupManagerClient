import * as React from "react";
import '../css/teacher.css';
import Header from "./Header";

class Teacher extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            teacher: '',
            isLoading: true
        }
    }

    async componentDidMount() {
        const teacherId = this.props.match.params.id;
        const response = await fetch(`http://localhost:8080/teachers/${teacherId}`);
        const body = await response.json();
        this.setState({
            teacher: body,
            isLoading: false
        });
    }

    render() {

        if (this.state.isLoading) {
            return <h1>Loading...</h1>
        }

        const teacher = this.state.teacher;
        const subjects = teacher.subjects;

        return (
            <div>
                <Header/>
                <span>First Name: {teacher.firstName}</span>
                <span>Last Name : {teacher.lastName}</span>
                <span>Experience: {teacher.experience}</span>
                <ul>
                    {subjects.map((subject, index) => {
                        return <li key={index}>{subject}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default Teacher;
