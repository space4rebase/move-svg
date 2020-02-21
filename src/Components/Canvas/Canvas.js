import React from "react";
import "./Canvas.css";

export class Canvas extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {

    return (
      <div className="Canvas_wrapper">
        <svg width="400" height="400">
        <clipPath id="myClip">
          <circle cx="200" cy="200" r="150" />
        </clipPath>
          <circle 
            cx="200"
            cy="200"
            r="150"
            stroke="green"
            strokeWidth="4"
            fill="yellow"
            onClick={() => console.log("Circle clicked!") }
            />
          <image 
            href="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" 
            height="300" 
            width="300" 
            x="0" 
            y="0" 
            onClick={() => console.log("Image clicked!") }
            clipPath="url(#myClip)"
          />
        </svg>
      </div>
    );

    
  }
}