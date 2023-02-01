import React from 'react';
import PageHeader from './PageHeader';
import PageSpacer from './PageSpacer';

class PageLoading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
        <div>
            <PageHeader />
            <em>Loading...</em>
            <PageSpacer />
        </div>);
    }
}
 
export default PageLoading