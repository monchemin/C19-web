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
                <ReactPlayer url='https://youtu.be/4EVk4LpbCN4' />
            </div>
            <div>
            <p/>
                <p><h1>Présentation back-office</h1></p>
                <p/>
                <Player
                    playsInline
                    poster="../image_grey.jpeg"
                    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                />
            </div>
            <p/>
        </div>
    );
};


export default PresentationScreen