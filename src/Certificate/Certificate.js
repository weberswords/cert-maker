import React, {Component, Fragment} from 'react';
import './style.css';
import Nav from "../App";

class Certificate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0
        }
    }

    componentDidMount() {
        const canvas = this.canvas;
        const context = canvas.getContext("2d");
        const image = this.image;

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
            <Fragment>
                <Nav url=""/>
                <div className="certificate">
                    <div className="container" id="container">
                        <img
                            alt="virgil con certificate"
                            className="hidden"
                            src="../../public/certificate.png"
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
            </Fragment>
        );
    }
                }

export default Certificate;
