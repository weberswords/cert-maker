import React, {Component, Fragment} from 'react';
import './style.css';
import Nav from "../Nav/Nav";

class Certificate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0,
            url: "certificate.png"
        }
    }

    render() {
        return (
            <Fragment>
                <Nav url={this.props.url}/>
                <div className="certificate">
                    <div className="container" id="container">
                        <img
                            alt="virgil con certificate"
                            id="certificate"
                            src={this.props.url}
                            ref="image"
                        />
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Certificate;
