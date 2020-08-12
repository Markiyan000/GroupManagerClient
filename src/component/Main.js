import React from 'react';
import '../App.css';
import Header from "./Header";

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />,
            </div>
        );
    }
}

export default Main;
