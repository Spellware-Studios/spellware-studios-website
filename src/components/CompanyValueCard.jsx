import React from 'react';
import { Card, Image } from 'react-bootstrap';

import '../../css/CompanyValueCard.scss';

class CompanyValueCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
        <Card className="company-value-card"> 
            <Image className="company-value-image" src={this.props.image} height="80px" alt={this.props.imageAlt} />
        </Card>);
    }
}
 
export default CompanyValueCard;