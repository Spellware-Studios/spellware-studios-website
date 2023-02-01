import React from 'react';
import "../../css/AppLoadingOverlay.scss";

class AppLoadingOverlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderOverlay = () => {
        return (
            <div className="loading-overlay">
                <div className="spinner-border m-auto loading-overlay-spinner" role="status">
                    <span className="sr-only">Loading...</span>
                </div> 
            </div>);
    }

    render() { 
        return (
            <React.Fragment>
                { this.props.isLoading ? this.renderOverlay() : <div/> }
            </React.Fragment>);
    }
}
 
export default AppLoadingOverlay;