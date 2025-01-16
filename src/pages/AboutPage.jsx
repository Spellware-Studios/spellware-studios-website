import React from 'react';
import PageHeader from '../components/PageHeader';
import PageSpacer from '../components/PageSpacer';
import { withTranslation } from 'react-i18next';
import { Image, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Helmet } from 'react-helmet';
import {Link} from 'react-router-dom';
import CompanyValueCard from "../components/CompanyValueCard";
import "../../css/AboutPage.scss";

class AboutPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    onNavigateToNewPage = () => {
        window.scrollTo(0, 0);
    }

    render() { 
        const { t } = this.props;
        const lang = this.props.match?.params?.lang || "en"; // Fallback to "en"

        return (
            <React.Fragment>
                <Helmet>
                    <title>{t("nav.about")}</title>
                    <meta name="Description" content={t("home.introtext")} />
                </Helmet>
                <PageHeader />
                <div className="container">
                    <div className="row about-top-margin">
                        
                        <div className="col-md-12 d-flex flex-column">
                            <h1 className="about-title">{t("about.title")}</h1>
                            <p className="ws-pre">{t("about.intro")}</p>
                        </div>
                        {/*<div className="col-md-5">
                            <Image className="about-image " src="/media/team.webp" alt={t("about.team.photo")}/>
                        </div> */}
                    </div>

                    <div className="row d-flex flex-row about-image-row">
                        
                            <a href='https://unity.com/' target='_blank'><Image className="technology-image" src='/media/images/unity.png' alt={t("about.alt1")} /></a>
                        
                            <a href='https://www.unrealengine.com/en-US' target='_blank'><Image className="technology-image" src='/media/images/unreal.png' alt={t("about.alt2")}/></a>
                        
                            <a href='https://www.oculus.com/' target='_blank'><Image className="technology-image" src='/media/images/oculus.png' alt={t("about.alt3")}/></a>
                        
                    </div>
                    
                           
                    <div className="container">
                    <div className="row">
                        <div className="col-sm-6 offset-sm-3 separator-primary" />
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="article-title title-big">
                                <p>{t("home.article2.title.start")}</p>
                                <p className="slogan-accent">{t("home.article2.title.accent")}</p>
                                <p>{t("home.article2.title.end")}</p>
                            </h3>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-2">
                            <CompanyValueCard imageAlt="DAE studios" image="/logos/logo_dae.png" />
                        </div>
                        <div className="col-md-2">
                            <CompanyValueCard imageAlt="Nationale Loterij" image="/logos/logo_nationale_loterij.png" />
                        </div>
                        <div className="col-md-2">
                            <CompanyValueCard imageAlt="Earthlings" image="/logos/logo_earthlings.webp" />
                        </div>
                        <div className="col-md-2">
                            <CompanyValueCard imageAlt="Flanders" image="/logos/logo_flanders.png" />
                        </div>
                        <div className="col-md-2">
                            <CompanyValueCard imageAlt="Larian Studios" image="/logos/logo_larian.png" />
                        </div>
                        <div className="col-md-2">
                            <CompanyValueCard imageAlt="Climax Studios" image="/logos/logo_climax.png" />
                        </div>
                    </div>

                    <div className="row">
                        <div style={{ marginTop: "100px" }} />
                    </div>

                    <div className="row">

                        <div className="col-md-4 d-flex flex-column">
                            <div className="m-auto">
                                <h2 className="clickbait-title">{t("home.clickbait")}</h2>
                                <Link to={`/${lang}/contact`} onClick={this.onNavigateToNewPage} className="btn roundbutton-secondary title-button clickbait-button">{t("home.button.contact")}</Link>
                            </div>
                        </div>

                        <div className="col-md-6 offset-md-2 article d-flex flex-column">
                            <div className="m-auto">
                                <h3 className="article-title">
                                    <p>{t("home.article1.title.start")}</p>
                                    <p className="text-primary">{t("home.article1.title.accent")}</p>
                                    <p>{t("home.article1.title.end")}</p>
                                </h3>
                                <p>{t("home.article1.text.p1")}</p>
                                <p>{t("home.article1.text.p2")}</p>
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div style={{ marginTop: "100px" }} />
                    </div>


                </div>
                <div style={{ marginBottom: "90px" }} />

                   
                </div>
                <PageSpacer />
            </React.Fragment>);
    }
}

export default withTranslation()(AboutPage);