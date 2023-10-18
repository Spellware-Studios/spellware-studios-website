import React from "react";
import { withTranslation } from "react-i18next";
import PageHeader from "../components/PageHeader";
import PageSpacer from "../components/PageSpacer";
import ServiceCard from "../components/ServiceCard";
import { Helmet } from 'react-helmet';
import {Link} from 'react-router-dom';
import { Image } from 'react-bootstrap';

import '../../css/ServicesPage.scss';


class ServicesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0, minwidth: 692 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);

        const { hash } = window.location;
        if (hash) {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    onNavigateToNewPage = () => {
        window.scrollTo(0, 0);
    }

    render() {
        const { t } = this.props;
        return (<div>
            <Helmet>
                <title>{t("nav.services")}</title>
                <meta name="Description" content={t("home.introtext")} />
            </Helmet>
            <PageHeader />

            <div className="container" style={{ marginTop: "40px" }}>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1 className="service-title">{t("services.title")}</h1>
                    </div>
                </div>
            </div>

            <div className="container">

                <div className="row pre-wrap service-row" id="gameplay">
                    <ServiceCard imgleft={this.state.width <= this.state.minwidth} icon="/media/images/gameplay.webp" hoverIcon="/media/images/gameplay.webp" title={t("services.feature1.title")} text={t("services.feature1.text")} imageAlt={t("services.feature1.alt")} />
                </div>

                <div className="row pre-wrap service-row" id="graphics">
                    <ServiceCard imgleft={true} icon="/media/images/graphics.webp" hoverIcon="/media/images/graphics.webp" title={t("services.feature2.title")} text={t("services.feature2.text")}  imageAlt={t("services.feature2.alt")}/>
                </div>

                <div className="row pre-wrap service-row" id="backend">
                    <ServiceCard imgleft={this.state.width <= this.state.minwidth} icon="/media/images/backend.webp" hoverIcon="/media/images/backend.webp" title={t("services.feature3.title")} text={t("services.feature3.text")}  imageAlt={t("services.feature3.alt")}/>
                </div>

                <div className="row pre-wrap service-row" id="engine">
                    <ServiceCard imgleft={true} icon="/media/images/engine.webp" hoverIcon="/media/images/engine.webp" title={t("services.feature4.title")} text={t("services.feature4.text")}  imageAlt={t("services.feature4.alt")}/>
                </div>

                <div className="row pre-wrap service-row" id="optimization">
                    <ServiceCard imgleft={false} icon="/media/images/bugfixing.webp" hoverIcon="/media/images/bugfixing.webp" title={t("services.feature5.title")} text={t("services.feature5.text")}  imageAlt={t("services.feature5.alt")}/>
                </div>

                <div className="row pre-wrap service-row" id="porting">
                    <ServiceCard imgleft={true} icon="/media/images/porting.webp" hoverIcon="/media/images/porting.webp" title={t("services.feature6.title")} text={t("services.feature6.text")}  imageAlt={t("services.feature6.alt")}/>
                </div>

                <div className="row" style={{marginTop: "90px" }}>
                            <div className="col-md-12 d-flex flex-column">
                                <div className="m-auto">
                                    <h2 className="clickbait-title">{t("home.clickbait")}</h2>
                                    <Link to="/contact" onClick={this.onNavigateToNewPage} className="btn roundbutton-secondary title-button clickbait-button">{t("home.button.contact")}</Link>
                                </div>
                            </div>
                        </div>

                        <div style={{marginBottom: "90px" }} />
            </div>
            <PageSpacer />
        </div>);
    }
}

export default withTranslation()(ServicesPage);
