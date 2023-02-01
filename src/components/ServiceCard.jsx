import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

import '../../css/ServiceCard.scss';

class ServiceCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovering: false
        }
        this.mobileTestRef = React.createRef();
    }

    handleMouseEnter = () => {
        if (window.getComputedStyle(this.mobileTestRef.current).display !== "none") {
            this.setState({ isHovering: true });
        }
    }

    handleMouseLeave = () => {
        this.setState({ isHovering: false });
    }

    renderText(left){
        return <div className={left ? "col-md-6 offset-md-1 d-flex flex-column" : "col-md-6 d-flex flex-column"}>
                    <div className="m-auto">
                        <h2 className="service-card-title">{this.props.title}</h2>
                        <div className="separator-small" style={{ width: "80px", marginBottom: "40px" }}></div>
                        <p>{this.props.text}</p>
                    </div>
                </div>;
    }

    renderImage(left){
        return <div className={left ? "col-md-5" : "col-md-5 offset-md-1"} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} >
                    <Image className="service-card-image" src={this.state.isHovering ? this.props.hoverIcon : this.props.icon} />
                </div>;
    }

    render() {
        return (
            <React.Fragment>
                <link rel="preload" as="image" href={this.props.hoverIcon} />
                <div className="d-none d-md-block" ref={this.mobileTestRef} />
                {this.props.imgleft ? 
                    <React.Fragment>{this.renderImage(true)}{this.renderText(true)}</React.Fragment> :
                    <React.Fragment>{this.renderText(false)}{this.renderImage(false)}</React.Fragment>
                }
            </React.Fragment>
        );
    }
}

export default ServiceCard;