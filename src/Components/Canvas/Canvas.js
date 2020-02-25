import React from "react";
import "./Canvas.css";

export class Canvas extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isMoving: false,
      x: 0,
      y: 0,
      dx: 0,
      dy: 0,
    }
  }

  mouseDownHandler(e) {
    this.setState({
      isMoving: true,
      startX: e.touches ? e.touches[0].pageX : e.pageX,
      startY: e.touches ? e.touches[0].pageY : e.pageY,
      x: this.state.x - this.state.dx,
      y: this.state.y - this.state.dy,
      dx: 0,
      dy: 0,
    });
  }

  mouseMoveHandler(e) {
    if (this.state.isMoving) {
      const x = e.touches ? e.touches[0].pageX : e.pageX;
      const y = e.touches ? e.touches[0].pageY : e.pageY;  
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
            onMouseDown={this.mouseDownHandler.bind(this)}
            onTouchStart={this.mouseDownHandler.bind(this)}
            onMouseMove={this.mouseMoveHandler.bind(this)}
            onTouchMove={this.mouseMoveHandler.bind(this)}
            onMouseUp={this.mouseUpHandler.bind(this)}
            onTouchEnd={this.mouseUpHandler.bind(this)}
            style={this.state.isMoving ? {
              "cursor": "grabbing"
            } : {
              "cursor": "grab"
            }
            }
            />
          <image 
            href="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" 
            height="300" 
            width="300" 
            x={this.state.x - this.state.dx} 
            y={this.state.y - this.state.dy} 
            clipPath="url(#myClip)"
            className="Canvas_Active-image"
            pointerEvents="none"
          />
        </svg>
      </div>
    );
  }
}
