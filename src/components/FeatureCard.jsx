import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';

import "../../css/FeatureCard.scss";

class FeatureCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovering: false
        };
        this.mobileTestRef = React.createRef();
    }

    handleMouseEnter = () => {
        if (window.getComputedStyle(this.mobileTestRef.current).display !== "none") {
            this.setState({ isHovering: true }); // Only enable the hover effect on desktop (md+) displays
        }
    }

    handleMouseLeave = () => {
        this.setState({ isHovering: false });
    }

    render() {
        return (
        <Card onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} className="feature-card" >
            <link rel="preload" as="image" href={this.props.hoverIcon} alt={this.props.imageAlt} />
            <div className="d-none d-md-block" ref={this.mobileTestRef} />
            <div className="d-flex flex-row">
                <div style={this.state.isHovering ? { background: "url(" + this.props.hoverIcon + ")" } : { background: "url(" + this.props.icon + ")" }}
                    className="feature-icon m-auto" />
            </div>
            <div className="d-flex flex-row">
                <h2 className="feature-card-title" >{this.props.title}</h2>
            </div>
            <div className="d-flex flex-row">
                <p className="feature-card-text">{this.props.text}</p>
            </div>
        </Card>);
    }
}

export default FeatureCard;