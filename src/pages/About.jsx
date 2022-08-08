import React from 'react';
import Card from "../components/shared/card";
import {Link} from 'react-router-dom'
function About(props) {
    return (
        <Card>
            <div className="about">
                <h3>About this project</h3>
                <p>This is project is solely for learning purposes</p>
                <p><Link to ="/">Back to Home Page</Link></p>
            </div>

        </Card>
    );
}

export default About;