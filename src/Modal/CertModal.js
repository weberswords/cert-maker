import React, { Component, Fragment } from 'react';
import Certificate from "../Certificate/Certificate";
import Dialog from '@material-ui/core/Dialog';
import style from './style.css';
import {Button} from "@material-ui/core";
import { createCanvas } from 'canvas';

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
            courseNumber: this.props.match.params.id,
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
        const courses = {
            "1": "Feedback",
            "2": "Poetry",
            "3": "Something",
            "4": "Other things",
            "5": "Chicken",
            "6": "Art"
        };
        return courses[this.props.match.params.id];
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
        console.log(image);
        image.onload = () => {
            console.log("Image loaded");
            this.fillCertificate(context, image, name, course);
            let newUrl = canvas.toDataURL();
            console.log(`The new url is: ${newUrl}`);
            this.setState({
                url: newUrl
            });
            console.log("Closing modal....");
            this.closeModal();
        };
    }

    fillCertificate(context, image, name, course) {
        context.drawImage(image, 0, 0);
        context.font = 'italic 100pt Calibri';
        context.fillStyle = "black";
        context.fillText(name, 1800, 1500);
        context.fillText(course, 1900, 2000);
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
                        onKeyPress={this.getUpdatedCertificate}
                    >Ok
                    </Button>
            </Dialog>
            <Certificate url={this.state.url}/>
            </Fragment>
        );
    }
}

export default CertModal;
