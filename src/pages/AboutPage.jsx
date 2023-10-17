import React from 'react';
import PageHeader from '../components/PageHeader';
import PageSpacer from '../components/PageSpacer';
import { withTranslation } from 'react-i18next';
import { Image, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Helmet } from 'react-helmet';

import "../../css/AboutPage.scss";

class AboutPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { t } = this.props;
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
                        
                            <Image className="technology-image" src='/media/images/unity.png' alt={t("about.alt1")} />
                        
                        
                            <Image className="technology-image" src='/media/images/unreal.png' alt={t("about.alt2")}/>
                        
                            <Image className="technology-image" src='/media/images/oculus.png' alt={t("about.alt3")}/>
                        
                    </div>       
                     <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <a href="/contact" className="btn roundbutton-secondary title-button clickbait-button about-contact-button d-block about-top-margin">{t("home.button.contact")}</a>
                        </div>
                    </div>

                    {/*
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="separator-primary" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="about-title text-center">{t("about.team.title")}</h2>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-md-4 about-team-card">
                            <Image className="about-team-image" src="/media/quinten.webp" alt={t("about.quinten.photo")}/>
                            <div className="d-block d-md-none">
                                <p className="about-team-name text-center">{t("about.quinten")}</p>
                                <p className="about-team-role text-center">{t("about.quinten.role")}</p>
                                <p className="about-team-desc">{t("about.quinten.desc")}</p>
                            </div>
                        </div>
                        
                        <div className="col-md-4 about-team-card">
                            <Image className="about-team-image" src="/media/pj.webp" alt={t("about.pj.photo")}/>
                            <div className="d-block d-md-none">
                                <p className="about-team-name text-center">{t("about.pj")}</p>
                                <p className="about-team-role text-center">{t("about.pj.role")}</p>
                                <p className="about-team-desc">{t("about.pj.desc")}</p>
                            </div>
                        </div>

                        <div className="col-md-4 about-team-card">
                            <Image className="about-team-image" src="/media/kenzo.webp" alt={t("about.kenzo.photo")}/>
                            <div className="d-block d-md-none">
                                <p className="about-team-name text-center">{t("about.kenzo")}</p>
                                <p className="about-team-role text-center">{t("about.kenzo.role")}</p>
                                <p className="about-team-desc">{t("about.kenzo.desc")}</p>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <p className="about-team-name text-center d-none d-md-block">{t("about.quinten")}</p>
                        </div>
                        <div className="col-md-4">
                            <p className="about-team-name text-center d-none d-md-block">{t("about.pj")}</p>
                        </div>
                        <div className="col-md-4">
                            <p className="about-team-name text-center d-none d-md-block">{t("about.kenzo")}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <p className="about-team-role text-center d-none d-md-block">{t("about.quinten.role")}</p>
                        </div>
                        <div className="col-md-4">
                            <p className="about-team-role text-center d-none d-md-block">{t("about.pj.role")}</p>
                        </div>
                        <div className="col-md-4">
                            <p className="about-team-role text-center d-none d-md-block">{t("about.kenzo.role")}</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <a href="/contact" className="btn roundbutton-secondary title-button clickbait-button about-contact-button d-block about-top-margin">{t("home.button.contact")}</a>
                        </div>
                    </div>

                    */}
                </div>
                <PageSpacer />
            </React.Fragment>);
    }
}

export default withTranslation()(AboutPage);