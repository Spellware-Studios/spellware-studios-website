import React from 'react';

// Reserves space for the fixed (floating) navbar. Should be placed at the top of each page.

class PageHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<div className="page-header " />);
    }
}
 
export default PageHeader;