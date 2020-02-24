import React from "react";
import "./Canvas.css";

export class Canvas extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      isMoving: false,
      dx: 0,
      dy: 0,
    }
  }

  mouseDownHandler(e) {
    this.setState({
      isMoving: true,
      startX: e.pageX,
      startY: e.pageY,
      x: this.state.x - this.state.dx,
      y: this.state.y - this.state.dy,
      dx: 0,
      dy: 0,
    });
  }

  mouseMoveHandler (e) {
    if (this.state.isMoving) {
      const x = e.pageX;
      const y = e.pageY;      
      const dx = this.state.startX - x;
      const dy = this.state.startY - y;

      this.setState(state => ({
        dx: dx,
        dy: dy,
      }));
    }
  };

  mouseUpHandler (e) {
    this.setState({
      isMoving: false,
   },);
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
            />
          <image 
            href="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" 
            height="300" 
            width="300" 
            x={this.state.x - this.state.dx} 
            y={this.state.y - this.state.dy} 
            onClick={() => console.log("Image clicked!") }
            clipPath="url(#myClip)"
            className="Canvas_Active-image"
          />
          <circle 
            cx="200"
            cy="200"
            r="150"
            stroke="green"
            strokeWidth="4"
            fill="transparent"
            onMouseDown={this.mouseDownHandler.bind(this)}
            onMouseMove={this.mouseMoveHandler.bind(this)}
            onMouseUp={this.mouseUpHandler.bind(this)}
            style={this.state.isMoving ? {
              "cursor": "grabbing"
            } : {
              "cursor": "grab"
            }
            }

            />
        </svg>
      </div>
    );

    
  }
}