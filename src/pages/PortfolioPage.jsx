import React from "react";
import { withTranslation } from "react-i18next";
import PageHeader from "../components/PageHeader";
import PageSpacer from "../components/PageSpacer";
import { Helmet } from 'react-helmet';

import "../../css/PortfolioPage.scss";

class PortfolioPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        const { t } = this.props;
        return (<React.Fragment>
                    <Helmet>
                        <title>{t("nav.portfolio") + " - " + t("maintitle")}</title>
                        <meta name="Description" content="Een overzicht van al onze werken die wij gerealiseerd hebben. Websites, applicaties en huisstijlen."/>
                    </Helmet>
                    <PageHeader />
                    
                    <div className="container" style={{marginTop: "40px"}}>
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="portfolio-title">{t("portfolio.title")}</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 offset-md-2 text-center">
                                <p className="portfolio-phtext">{t("portfolio.placeholder")}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 offset-md-4 text-center">
                                <div className="separator-primary" style={{ marginTop: "10px"}} />
                            </div>
                        </div>
                    </div>
                    
                    <PageSpacer />
                </React.Fragment>);
    }
}
 
export default withTranslation()(PortfolioPage);
