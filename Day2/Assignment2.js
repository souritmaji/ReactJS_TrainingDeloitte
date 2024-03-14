import React from 'react';
import sample from './sample.jpg';
import { ReactComponent as Logo } from './sample.svg';

function Assignment2()
{
    return (
        <div>
            {/* using import keyword */}
            <h1>Using Import keyword</h1>
            <img width = "500" src={sample} alt="Sample image" />

            {/* using Require keyword */}
            <h1>Using Require keyword</h1>
            <img width = "500" src={require('./sample.jpg')} alt="Sample Image" />

            {/* Add svg files to React */}
            <h1>Add SVG files to React</h1>
            <Logo/>

            {/* Add network images to react */}
            <h1>Add Networ images to react</h1>
            <img width = "500" src="https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg"/>
        </div>
    );
}

export default Assignment2;