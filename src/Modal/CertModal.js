import React, { Component, Fragment } from 'react';
import Certificate from "../Certificate/Certificate";
import Dialog from '@material-ui/core/Dialog';
import style from './style.css';
import { Button } from "@material-ui/core";
import { createCanvas } from 'canvas';
import data from './courses';

class CertModal extends Component {
    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);
        this.getUpdatedCertificate = this.getUpdatedCertificate.bind(this);
        this.updateInputValue = this.updateInputValue.bind(this);
        this.getCourseName = this.getCourseName.bind(this);
        this.state = {
            name: "",
            course: this.getCourseName(),
            courseNumber: this.props.match.params.id || 0,
            url: "certificate.png",
            modalOpen: true
        }
    }

    closeModal() {
        this.setState({
            modalOpen: false
        })
    }

    getCourseName() {
        return data[this.props.match.params.id];
    }

    updateInputValue(event) {
        this.setState({
            name: event.target.value
        });
    }

    getUpdatedCertificate() {
        let name = this.state.name;
        let course = this.state.course;
        let file = "certificate.png";
        let canvas = createCanvas(4266, 3200);
        let context = canvas.getContext('2d');
        let image = new Image();
        image.src = file;
        image.onload = () => {
            this.fillCertificate(context, image, name, course);
            let newUrl = canvas.toDataURL();
            this.setState({
                url: newUrl
            });
            this.closeModal();
        };
    }

    centerText(context, text, x, y, maxWidth) {
        let nameWidth = context.measureText(text).width;
        let newX = (maxWidth - nameWidth) / 2;
        context.fillText(text, newX, y);
    }

    fillCertificate(context, image, name, course) {
        context.drawImage(image, 0, 0);
        context.font = 'italic 75pt Calibri';
        context.fillStyle = "black";
        this.centerText(context, name, 950, 1515, image.width);
        this.centerText(context, course, 1250, 2035, image.width);
    }

    render() {
        return (
            <Fragment>
            <Dialog
                open={this.state.modalOpen}
                className="dialog"
                onClose={this.closeModal}
            >
                    <div className="form-group">
                        <label>Enter the name you would like to have on your certificate.</label>
                        <input
                            type="text"
                            className={style["form-group"]}
                            id="name"
                            aria-describedby="nameHelp"
                            placeholder="Soraya Jones"
                            onChange={this.updateInputValue}
                        />
                    </div>
                    <Button
                        className={style["custom-button"]}
                        onClick={this.getUpdatedCertificate}
                    >Ok
                    </Button>
            </Dialog>
            <Certificate url={this.state.url}/>
            </Fragment>
        );
    }
}

export default CertModal;
