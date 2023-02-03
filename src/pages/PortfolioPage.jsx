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

    renderImage(left, image, link){
        return <div className={left ? "col-md-5 d-flex flex-column" : "col-md-5 offset-md-1 d-flex flex-column"}>
                    <a href={link} className="m-auto portfolio-clickable-image" target="_blank">
                        <Image className="service-card-image m-auto" src={image} />
                    </a>
                </div>;
    }

    renderPortion(textLeft, image, title, link, inner) {
        return (
            <React.Fragment>
                <link rel="preload" as="image" href={image} />
                <div className="d-none d-md-block" />
                { textLeft ? 
                    <React.Fragment>{this.renderImage(true, image, link)}{this.renderText(true, inner, title)}</React.Fragment> :
                    <React.Fragment>{this.renderText(false, inner, title)}{this.renderImage(false, image, link)}</React.Fragment>
                }
            </React.Fragment>
        );
    }

    render() { 
        const { t } = this.props;
        return (<React.Fragment>
                    <Helmet>
                        <title>{t("nav.portfolio") + " - " + t("maintitle")}</title>
                        <meta name="Description" content="We are a passionate group of freelance developers for hire, ready to bring you the greatest technical solutions for your game or simulation."/>
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
                                    <p>Earthlings is one of our ongoing projects. It’s a social MMO built in <b>Unreal Engine 5</b> where you’ll have the freedom to create and customize your own land plots, visit a variety of unique and immersive environments, and interact with other players in real time. With our team's expertise in gameplay, graphics and backend programming, we are building a game that will be a highly social and immersive experience. Allowing players to express themselves by creating and collaborating in a vast and living world.</p>
                                    <p>We’ve been trusted by our client to be in charge of the entire development of this project. And we’re currently working on implementing various different tasks such as character movement, abilities, server transitions and back-end, mobs and NPCs, inventory systems, questing systems, vehicles and so much more!</p>
                                    <a href="https://www.earthlings.land/">Visit the Earthlings website for more information.</a>
                                </React.Fragment>
                            )}
                        </div>

                        <div className="row pre-wrap service-row" id="graphics">
                            {this.renderPortion(true, "/media/images/vr4fire.jpg", "VR4Fire", "https://safety4all.be/opleidingen/vr/",
                                <React.Fragment>
                                    <p>VR4Fire is a VR fire simulation we developed for our client using Unity. It is designed to teach individuals the appropriate actions to take during fire emergencies in various scenarios. This simulation immerses users in a realistic virtual environment, allowing them to experience a fire breakout and practice their response in a safe and controlled setting. The simulation includes multiple scenarios, such as hospitals and warehouses. Users can experience the spread of fire and smoke, as well as learn how to use fire safety equipment.</p>
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
                            <div className="col-md-8">
                                <p>Other games that members of our team have worked on include <b>Baldur's Gate III</b> and <b>Wasteland 3</b>.
                                Click the images below to find out more information about each project.
                                </p>
                                <div style={{marginBottom: "50px" }} />
                            </div>
                        </div>

                    
                        <div className="row">
                            <div className="col-md-6 d-flex flex-column">
                                <a href="https://store.steampowered.com/app/719040/Wasteland_3/" className="m-auto portfolio-clickable-image" target="_blank">
                                    <Image className="service-card-image m-auto" src="/media/images/wasteland3.webp" />
                                </a>
                            </div>
                            <div className="col-md-6 d-flex flex-column">
                                <a href="https://press.baldursgate3.game/" className="m-auto portfolio-clickable-image" target="_blank">
                                    <Image className="service-card-image m-auto" src="/media/images/bg3.webp" />
                                </a>
                            </div>
                        </div>
                        <div style={{marginBottom: "60px" }} />
                        
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
