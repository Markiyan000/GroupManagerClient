import React from 'react';
import '../App.css';
import Header from "./Header";
import GroupList from "./GroupList";

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />,
                <GroupList />
            </div>
        );
    }
}

export default Main;
