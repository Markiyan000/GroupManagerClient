import * as React from "react";

class TeacherList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            teachers: []
        }
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:8080/teachers/');
        const body = response.json();
        this.setState({
            teachers: body
        });
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}
