import React from "react";
import PageHeader from "../components/PageHeader";
import PageSpacer from "../components/PageSpacer";
import { Helmet } from 'react-helmet';
import { withTranslation } from "react-i18next";

class NotFoundPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { t } = this.props;
        
        return (
            <div>
                <Helmet>
                    <title>{"Error 404 - " + t("maintitle")}</title>
                </Helmet>
                <PageHeader />
                <h1>404 - Oh no! We couldn't find that page!</h1>
                <p></p>
                <PageSpacer />
            </div>
        );
    }
}

export default withTranslation()(NotFoundPage);