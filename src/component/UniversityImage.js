import * as React from "react";
import '../css/universityImage.css';
import universityImage from '../images/university.jpg';

class UniversityImage extends React.Component {

    render() {
        return (
            <div>
                <img alt={'university'} src={universityImage} />
            </div>
        );
    }
}

export default UniversityImage;
