import React, { Component, Fragment } from 'react';
import Certificate from "../Certificate/Certificate";
import Dialog from '@material-ui/core/Dialog';
import './style.css';

class CertModal extends Component {
    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);
        this.state = {
            name: "",
            course: 0,
            modalOpen: true
        }
    }

    courses = {
        0: "",
        1: "Feedback",
        2: "Poetry",
        3: "Design Thinking",
        4: "This title is really long and I don't think it has to be"
    };

    closeModal() {
        this.setState({
            modalOpen: false
        })
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
                            className="form-control"
                            id="name"
                            aria-describedby="nameHelp"
                            placeholder="Soraya Jones" />
                    </div>
                    <button
                        className="btn btn-primary">Ok
                    </button>
            </Dialog>
            <Certificate/>
            </Fragment>
        );
    }
}

export default CertModal;
