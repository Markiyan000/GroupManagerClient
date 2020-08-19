import * as React from "react";

class AddStudent extends React.Component {

    emptyStudent = {
        firstName: '',
        lastName: '',
        age: ''
    };

    constructor(props) {
        super(props);

        this.state = {
            student: this.emptyStudent
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {student} = this.state;
        const groupId = this.props.match.params.id;
        await fetch(`http://localhost:8080/students/${groupId}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
        });
        window.location.href = `/groups/${groupId}`;
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let student = {...this.state.student};
        student[name] = value;
        this.setState({
           student: student
        });
    }

    render() {

        const student = this.state.student;

        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='firstName' defaultValue={student.firstName} placeholder='First Name...' onChange={this.handleChange}/>
                <input type='text' name='lastName' defaultValue={student.lastName} placeholder='Last Name...' onChange={this.handleChange}/>
                <input type='number' name='age' defaultValue={student.age} placeholder='Age...' onChange={this.handleChange}/>
                <button type='submit'>Submit</button>
            </form>
        );
    }
}

export default AddStudent;
