import React from "react";
import { withTranslation } from "react-i18next";
import PageHeader from "../components/PageHeader";
import PageSpacer from "../components/PageSpacer";
import ServiceCard from "../components/ServiceCard";
import { Helmet } from 'react-helmet';
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
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }


    render() {
        const { t } = this.props;
        return (<div>
            <Helmet>
                <title>{t("nav.services") + " - " + t("maintitle")}</title>
                <meta name="Description" content="Een uitgebreid overzicht van al onze diensten. Een website, applicatie of huisstijl? Kom langs met je idee, dan maken wij van jouw droom een realiteit." />

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
                    <ServiceCard imgleft={this.state.width <= this.state.minwidth} icon="/media/images/gameplay.webp" hoverIcon="/media/images/gameplay.webp" title={t("services.feature1.title")} text={t("services.feature1.text")} />
                </div>

                <div className="row pre-wrap service-row" id="graphics">
                    <ServiceCard imgleft={true} icon="/media/images/graphics.webp" hoverIcon="/media/images/graphics.webp" title={t("services.feature2.title")} text={t("services.feature2.text")} />
                </div>

                <div className="row pre-wrap service-row" id="backend">
                    <ServiceCard imgleft={this.state.width <= this.state.minwidth} icon="/media/images/backend.webp" hoverIcon="/media/images/backend.webp" title={t("services.feature3.title")} text={t("services.feature3.text")} />
                </div>

                <div className="row pre-wrap service-row" id="engine">
                    <ServiceCard imgleft={true} icon="/media/images/engine.webp" hoverIcon="/media/images/engine.webp" title={t("services.feature4.title")} text={t("services.feature4.text")} />
                </div>

                <div className="row pre-wrap service-row" id="optimization">
                    <ServiceCard imgleft={false} icon="/media/images/bugfixing.webp" hoverIcon="/media/images/bugfixing.webp" title={t("services.feature5.title")} text={t("services.feature5.text")} />
                </div>

                <div className="row pre-wrap service-row" id="porting">
                    <ServiceCard imgleft={true} icon="/media/images/porting.webp" hoverIcon="/media/images/porting.webp" title={t("services.feature6.title")} text={t("services.feature6.text")} />
                </div>

                <div style={{ marginTop: "100px" }}></div>
            </div>
            <PageSpacer />
        </div>);
    }
}

export default withTranslation()(ServicesPage);
