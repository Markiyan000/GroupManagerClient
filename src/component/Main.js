import React from 'react';
import '../css/main.css';
import Header from "./Header";
import UniversityImage from "./UniversityImage";

class Main extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <UniversityImage />
            </div>
        );
    }
}

export default Main;
