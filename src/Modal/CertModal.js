import React, { Component, Fragment } from 'react';
import Certificate from "../Certificate/Certificate";
import Dialog from '@material-ui/core/Dialog';
import './style.css';

class CertModal extends Component {
    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);
        this.getUpdatedCertificate = this.getUpdatedCertificate.bind(this);
        this.state = {
            name: "",
            course: 0,
            url: "",
            modalOpen: true
        }
    }

    closeModal() {
        this.setState({
            modalOpen: false
        })
    }

    getUpdatedCertificate() {
        const image = fetch('https://ayufzwz613.execute-api.us-east-1.amazonaws.com/prod', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer kXRj4e6hZJ9ZyGnxwPUtx7VyR3ASruXj1Dw5R1SX'
            },
            body: JSON.stringify({
                name: 'Persony McPerson',
                course: '1',
            })
        }).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Something went wrong.");
            }
        });
        this.setState({
            url: image
        });
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
                            className="form-control"
                            id="name"
                            aria-describedby="nameHelp"
                            placeholder="Soraya Jones" />
                    </div>
                    <button
                        onClick={this.getUpdatedCertificate}
                    >Ok
                    </button>
            </Dialog>
            <Certificate url={this.state.url}/>
            </Fragment>
        );
    }
}

export default CertModal;
