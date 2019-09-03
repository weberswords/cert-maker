import React, { Component, Fragment } from 'react';
import Certificate from "../Certificate/Certificate";
import Dialog from '@material-ui/core/Dialog';
import style from './style.css';
import {Button} from "@material-ui/core";

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
            url: "",
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
        console.log(`Setting state...${this.state.name} and ${this.state.course}`);
        console.log("Certificate being fetched...");
        const result = fetch(
                'https://ayufzwz613.execute-api.us-east-1.amazonaws.com/prod', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer kXRj4e6hZJ9ZyGnxwPUtx7VyR3ASruXj1Dw5R1SX'
                },
                body: JSON.stringify({
                    name: this.state.name,
                    course: this.state.course
                })
            }).then( result => result.ok ? result.json() : Promise.reject() )
            .then (data => console.log(data));
        console.log(`Result: ${result}`);
        console.log("Closing modal....");
        this.closeModal();
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
