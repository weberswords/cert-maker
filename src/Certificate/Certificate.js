import React, { Component } from 'react';
import './style.css';

class Certificate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0
        }

    }

    componentDidMount() {
        const canvas = this.refs.canvas;
        const context = canvas.getContext("2d");
        const image = this.refs.image;

        image.onload = () => {
            this.setState({
               width: image.width,
               height: image.height
            });
            context.font = 'italic 100pt Calibri';
            context.fillStyle = "black";
            context.drawImage(image, 0, 0);
            context.fillText("some name", 1800, 1500);
            context.fillText("some course", 1900, 2000);
        }
    }

    render() {
        return (
            <div className="certificate">
                <div className="container" id="container">
                    <img
                        alt="virgil con certificate"
                        className="hidden"
                        src="certificate.png"
                        ref="image"
                    />
                    <canvas
                        id="canvas"
                        width={this.state.width}
                        height={this.state.height}
                        ref="canvas"
                    />
                </div>
            </div>
        );
    }
                }

export default Certificate;
