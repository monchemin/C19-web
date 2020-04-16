import React from 'react';
import '../css/common.css';
import 'bootstrap/dist/css/bootstrap.css';
import "../../node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';
import ReactPlayer from "react-player";

const PresentationScreen = () => {
    return (
        <div className="container">
            <div>
                <p><h1>Présentation Front-office (Android Version)</h1></p>
                <p/>
                <ReactPlayer url='http://3.217.233.250/video/presentation-android.mp4'
                             controls={true} />
            </div>
            <div>
            <p/>
                <p><h1>Présentation back-office</h1></p>
                <p/>
                <ReactPlayer
                    controls={true}
                    url="http://3.217.233.250/video/back0ffice.mp4"
                />
            </div>
            <p/>
        </div>
    );
};


export default PresentationScreen