import React from "react";

class AddTeacher extends React.Component {

    emptyTeacher = {
        firstName: '',
        lastName: '',
        experience: ''
    };

    constructor(props) {
        super(props);

        this.state = {
            teacher: this.emptyTeacher
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        event.preventDefault();

        const target = event.target;
        const value = target.value;
        const name = target.name;

        let teacher = {...this.state.teacher};
        teacher[name] = value;

        this.setState({
            teacher: teacher
        })
    };

    async handleSubmit(event) {
        event.preventDefault();

        const teacher = this.state.teacher;

        await fetch(`http://localhost:8080/teachers/`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(teacher)
        });

        window.location.href = `/teachers`;
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type={'text'} name={'firstName'} placeholder={'Enter first name...'} onChange={this.handleChange} />
                <input type={'text'} name={'lastName'} placeholder={'Enter last name...'} onChange={this.handleChange} />
                <input type={'number'} name={'experience'} placeholder={'Enter experience...'} onChange={this.handleChange} />
                <button type={'submit'}>Add Teacher</button>
            </form>
        );
    }
}

export default AddTeacher;
