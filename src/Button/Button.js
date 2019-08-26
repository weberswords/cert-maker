import React, { Component } from 'react';
import './style.css';

class Button extends Component {

    render() {
        return (
            <div className="button">
                <a
                    id="nav"
                    download="VirgilCon2019.png"
                    href=""
                >Download certificate</a>
            </div>
        );
    }
}

export default Button;
