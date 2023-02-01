import React from 'react';

// This component creates a div that has the required height so that adding it to the html will fill the entire screen

class PageSpacer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { padding: "0px" }
    }

    componentDidMount(){
        const padding = window.innerHeight - document.getElementById("root").clientHeight;
             
        if(padding > 0) {
            console.log("Padding page height by " + padding);  
            this.setState({ padding: padding + "px" }); 
        }
    }

    render() { 
        return (<div style={{ minHeight: this.state.padding }} />);
    }
}
 
export default PageSpacer;