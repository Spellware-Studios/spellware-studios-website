import React from "react";
import { withTranslation } from "react-i18next";
import PageHeader from "../components/PageHeader";
import PageSpacer from "../components/PageSpacer";
import ServiceCard from "../components/ServiceCard";
import { Helmet } from 'react-helmet';
import { Image } from 'react-bootstrap';
import {Link} from 'react-router-dom';

import "../../css/PortfolioPage.scss";

class PortfolioPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderText(left, inner, title){
        return <div className={left ? "col-md-6 offset-md-1 d-flex flex-column" : "col-md-6 d-flex flex-column"}>
                    <div className="m-auto">
                        <h2 className="service-card-title">{title}</h2>
                        <div className="separator-small" style={{ width: "80px", marginBottom: "40px" }}></div>
                        {inner}
                    </div>
                </div>;
    }

    renderImage(left, image, link, alt){
        return <div className={left ? "col-md-5 d-flex flex-column" : "col-md-5 offset-md-1 d-flex flex-column"}>
                    <a href={link} className="m-auto portfolio-clickable-image" target="_blank">
                        <Image className="service-card-image m-auto" src={image} alt={alt}/>
                    </a>
                </div>;
    }

    renderPortion(textLeft, image, title, link, inner, alt) {
        return (
            <React.Fragment>
                <link rel="preload" as="image" href={image} />
                <div className="d-none d-md-block" />
                { textLeft ? 
                    <React.Fragment>{this.renderImage(true, image, link, alt)}{this.renderText(true, inner, title)}</React.Fragment> :
                    <React.Fragment>{this.renderText(false, inner, title)}{this.renderImage(false, image, link, alt)}</React.Fragment>
                }
            </React.Fragment>
        );
    }

    onNavigateToNewPage = () => {
        window.scrollTo(0, 0);
    }

    render() { 
        const { t } = this.props;
        return (<React.Fragment>
                    <Helmet>
                        <title>{t("nav.portfolio")}</title>
                        <meta name="Description" content={t("home.introtext")} />
                    </Helmet>
                    <PageHeader />
                    
                    <div className="container" style={{marginTop: "40px"}}>
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="portfolio-title">{t("portfolio.title")}</h1>
                            </div>
                        </div>

                        <div className="row pre-wrap service-row" id="graphics">
                            {this.renderPortion(false, "/media/images/earthlings.jpg", "Earthlings", "https://earthlings.land/?page=home",
                                <React.Fragment>
                                    <p>{t("portfolio.feature1.article1")}<a href="https://www.unrealengine.com/en-US/unreal-engine-5" target="blank">Unreal Engine 5</a>{t("portfolio.feature1.article2")}</p>
                                    <p>{t("portfolio.feature1.article3")}</p>
                                    <a href="https://www.earthlings.land/" target="_blank" >{t("portfolio.feature1.link")}</a>
                                </React.Fragment>,
                                t("portfolio.feature1.alt")
                            )}
                        </div>

                        <div className="row pre-wrap service-row" id="graphics">
                            {this.renderPortion(true, "/media/images/vr4fire.jpg", "VR4Fire", "https://safety4all.be/opleidingen/vr/",
                                <React.Fragment>
                                    <p>{t("portfolio.feature2.article1")}</p>
                                    <a href="https://www.youtube.com/watch?v=ZAYpQc3kI5I" target="_blank" >{t("portfolio.feature2.link")}</a>
                                </React.Fragment>,
                                 t("portfolio.feature2.alt")
                            )}
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                    <h2 className="service-card-title" style={{marginTop: "30px"}}>{t("portfolio.moreProjects.title")}</h2>
                                    <div className="separator-small" style={{ width: "80px", marginBottom: "40px" }}></div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-8">
                                <p>{t("portfolio.moreProjects.article1")}<a href="https://store.steampowered.com/app/1086940/Baldurs_Gate_3/" target="_blank">Baldur's Gate III</a>{t("portfolio.moreProjects.article2")}<a href="https://store.steampowered.com/app/719040/Wasteland_3/" target="_blank">Wasteland 3</a>.
                                <br/>{t("portfolio.moreProjects.article3")}
                                </p>
                                <div style={{marginBottom: "50px" }} />
                            </div>
                        </div>

                    
                        <div className="row">
                            <div className="col-md-6 d-flex flex-column">
                                <a href="https://store.steampowered.com/app/719040/Wasteland_3/" className="m-auto portfolio-clickable-image" target="_blank">
                                    <Image className="service-card-image m-auto" src="/media/images/wasteland3.webp" alt={t("portfolio.moreProjects.alt1")} />
                                </a>
                            </div>
                            <div className="col-md-6 d-flex flex-column">
                                <a href="https://store.steampowered.com/app/1086940/Baldurs_Gate_3/" className="m-auto portfolio-clickable-image" target="_blank">
                                    <Image className="service-card-image m-auto" src="/media/images/bg3.webp" alt={t("portfolio.moreProjects.alt2")}/>
                                </a>
                            </div>
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
                        
                        {/*<div className="row">
                            <div className="col-md-4 offset-md-4 text-center">
                                <div className="separator-primary" style={{ marginTop: "10px"}} />
                            </div>
                        </div> */}
                    </div>
                    
                    <PageSpacer />
                </React.Fragment>);
    }
}
 
export default withTranslation()(PortfolioPage);
