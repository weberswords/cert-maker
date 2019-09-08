import React, { Component } from 'react';
import Button from "@material-ui/core/Button";

class Nav extends Component {

    render() {
        return (
            <div className="nav">
                <div className="container" id="nav">
                    <a href={this.props.url} download="VirgilCon2019.png">
                        <Button
                            id="certificate"
                            size="medium">
                            Download certificate
                        </Button>
                    </a>
                </div>
            </div>
        );
    }
}

export default Nav;
