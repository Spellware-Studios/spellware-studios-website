import React from "react";
import { withTranslation } from "react-i18next";
import PageHeader from "../components/PageHeader";
import PageSpacer from "../components/PageSpacer";
import ServiceCard from "../components/ServiceCard";
import { Helmet } from 'react-helmet';
import { Image } from 'react-bootstrap';

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

    renderImage(left, image){
        return <div className={left ? "col-md-5 d-flex flex-column" : "col-md-5 offset-md-1 d-flex flex-column"}>
                    <Image className="service-card-image m-auto" src={image} />
                </div>;
    }

    renderPortion(textLeft, image, title, inner) {
        return (
            <React.Fragment>
                <link rel="preload" as="image" href={image} />
                <div className="d-none d-md-block" />
                { textLeft ? 
                    <React.Fragment>{this.renderImage(true, image)}{this.renderText(true, inner, title)}</React.Fragment> :
                    <React.Fragment>{this.renderText(false, inner, title)}{this.renderImage(false, image)}</React.Fragment>
                }
            </React.Fragment>
        );
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

                        <div className="row pre-wrap service-row" id="graphics">
                            {this.renderPortion(false, "/media/images/earthlings.jpg", "Earthlings",
                                <React.Fragment>
                                    <p>Earthlings is a social MMO built using <b>Unreal Engine 5</b> where you'll have the freedom to create and customize your own land plots, visit a variety of unique and immersive environments, and interact with other players in real time. With our team's expertise in gameplay, graphics and backend programming, we are building a game that will be a social and immersive experience, that allows players to express themselves, create and collaborate in a vast and living world.</p>
                                    <p>We got put in charge of all development by our client and are working on implementing various different tasks such as character movement and abilities, Server transitions and back-end, Mobs and NPCs, Inventory, Questing system, Vehicles and so much more!</p>
                                    <a href="https://www.earthlings.land/">Visit the Earthlings website for more information.</a>
                                </React.Fragment>
                            )}
                        </div>

                        <div className="row pre-wrap service-row" id="graphics">
                            {this.renderPortion(true, "/media/images/vr4fire.jpg", "VR4Fire",
                                <React.Fragment>
                                    <p>VR4Fire is a VR fire simulation we developed for our client using Unity, designed to teach individuals the appropriate actions to take during fire emergencies in various scenarios. This simulation immerses users in a realistic virtual environment, allowing them to experience a fire breakout and practice their response in a safe and controlled setting. The simulation includes multiple scenarios, such as hospitals and warehouses, and users can experience the spread of fire and smoke, as well as learn how to use fire safety equipment.</p>
                                    <a href="https://www.youtube.com/watch?v=ZAYpQc3kI5I">Watch the VR4Fire commercial on YouTube.</a>
                                </React.Fragment>
                            )}
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                    <h2 className="service-card-title" style={{marginTop: "30px"}}>More Projects</h2>
                                    <div className="separator-small" style={{ width: "80px", marginBottom: "40px" }}></div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <p>Other games which members of our team have worked on include <b>Baldur's Gate III</b> and <b>Wasteland 3</b>.</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 d-flex flex-column">
                                <a href="https://press.baldursgate3.game/" className="m-auto">
                                    <Image className="service-card-image m-auto" src="/media/images/bg3.webp" />
                                </a>
                            </div>
                            <div className="col-md-6 d-flex flex-column">
                                <a href="https://store.steampowered.com/app/719040/Wasteland_3/" className="m-auto">
                                    <Image className="service-card-image m-auto" src="/media/images/wasteland3.webp" />
                                </a>
                            </div>
                        </div>
                        <div style={{marginBottom: "20px" }} />
                        
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
