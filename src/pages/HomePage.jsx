import React from "react";
import { withTranslation } from "react-i18next";
import { Helmet } from 'react-helmet';
import FeatureCard from "../components/FeatureCard";
import CompanyValueCard from "../components/CompanyValueCard";

import "../../css/HomePage.scss"
import AppLoadingOverlay from "../components/AppLoadingOverlay";

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        let hasLoaded = true;
        if(typeof window !== "undefined")
            hasLoaded = window.localStorage.getItem("homeHasLoaded");

        this.state = {
            hasLoaded
        };
        
        this.bgParentRef = React.createRef();
        this.bgVideoRef = React.createRef();
        this.bgVideoPatternOverlay = React.createRef();
    }

    componentDidMount(){
        setTimeout(() => { 
            this.setState({ hasLoaded: true }); 
            if(typeof window !== "undefined")
                window.localStorage.setItem("homeHasLoaded", true);
        }, 2000); 

        this.winResizeFunc = this.onWinResize.bind(this);
        window.addEventListener("resize", this.winResizeFunc)

        this.onWinResize();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.winResizeFunc);
    }

    onWinResize() {
         // Hackfix because CSS is a piece of shit
         const parentW = this.bgParentRef.current.clientWidth;
         const parentH = this.bgParentRef.current.clientHeight;
         
         console.log(parentW + ", " + parentH)
 
         this.bgVideoRef.current.style.height = parentH + "px";
         this.bgVideoRef.current.style.width = parentW + "px";

         this.bgVideoPatternOverlay.current.style.height = parentH + "px";
         this.bgVideoPatternOverlay.current.style.width = parentW + "px";
    }

    render() {
        const t = this.props.t;

        return (
            <React.Fragment>
                <Helmet>
                    <title>{t("maintitle")}</title>
                    <meta name="Description" content="We are a passionate group of freelance developers for hire, ready to bring you the greatest technical solutions for your game or simulation." />
                    <link rel="canonical" href="/home" />
                    <link rel="preload" as="image" href="/media/background.webp" alt="Background image" />
                </Helmet>

                {/* <AppLoadingOverlay isLoading={!this.state.hasLoaded} /> */}

                <div className="landing-container mask-bottom-thick" ref={this.bgParentRef}>
                
                    <video id="landing-background" 
                           ref={this.bgVideoRef}
                           autoPlay={true} 
                           muted={true} 
                           loop={true} 
                           role="presentation" 
                           crossOrigin="anonymous" 
                           playsInline={true} 
                           preload="auto">
                        <source src="/media/spellware.webm" type="video/webm" />
                    </video>

                    <div className="pattern-overlay" ref={this.bgVideoPatternOverlay} />

                    <div style={{ height: "140px" }} className="black-gradient" />
                    <div className="container top-container-home">
                        <div className="row" style={{ height: "90px" }} /> {/* Add some space under the navbar */}
                        <div className="row" style={{ marginLeft: "-0.5em" }}>
                            <div className="col-md-8">
                                <h1 className="slogan"><p>{t("home.slogan.start")}</p> <p className="slogan-accent">{t("home.slogan.accent")}</p><p>{t("home.slogan.end")}</p></h1>
                                <p className="intro-text">{t("home.introtext")}</p>
                                <div className="d-flex flex-row">
                                    <a href="/contact" className="btn roundbutton-primary title-button">{t("home.button.contact")}</a>
                                    <a href="/portfolio" className="btn roundbutton-secondary title-button">{t("home.button.portfolio")}</a>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{ height: "350px" }} /> {/* Add some space under the slogan/intro text */}
                    </div>
                </div>
                <div className="container feature-card-container">
                    <div className="row feature-card-row">
                        <div className="col-md-4">
                            <a href="/services#gameplay" >
                                <FeatureCard imageAlt={t("home.feature1.title")} icon="Controller" title={t("home.feature1.title")} text={t("home.feature1.text")} />
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="/services#graphics" >
                                <FeatureCard imageAlt={t("home.feature2.title")} icon="CameraVideo" title={t("home.feature2.title")} text={t("home.feature2.text")} />
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="/services#backend" >
                                <FeatureCard imageAlt={t("home.feature3.title")} icon="HddNetwork" title={t("home.feature3.title")} text={t("home.feature3.text")} />
                            </a>
                        </div>
                        
                    </div>
                    <div className="row" style={{marginTop: "45px"}}></div>
                    <div className="row feature-card-row">
                        <div className="col-md-4">
                            <a href="/services#engine" >
                                <FeatureCard imageAlt={t("home.feature4.title")} icon="Gear" title={t("home.feature4.title")} text={t("home.feature4.text")} />
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="/services#optimization" >
                                <FeatureCard imageAlt={t("home.feature5.title")} icon="Bug" title={t("home.feature5.title")} text={t("home.feature5.text")} />
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="/services" >
                                <FeatureCard imageAlt={t("home.feature6.title")} icon="Phone" title={t("home.feature6.title")} text={t("home.feature6.text")} />
                            </a>
                        </div>
                        
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 offset-sm-3 separator-primary" />
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="article-title title-big">
                                <p>{t("home.article2.title.start")}</p>
                                <p className="text-primary">{t("home.article2.title.accent")}</p>
                                <p>{t("home.article2.title.end")}</p>
                            </h3>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3">
                            <CompanyValueCard imageAlt={t("home.companyvalue1.title")} image="/email.svg" title={t("home.companyvalue1.title")} text={t("home.companyvalue1.text")} />
                        </div>
                        <div className="col-md-3">
                            <CompanyValueCard imageAlt={t("home.companyvalue2.title")} image="/trumpcard1.svg" title={t("home.companyvalue2.title")} text={t("home.companyvalue2.text")} />
                        </div>
                        <div className="col-md-3">
                            <CompanyValueCard imageAlt={t("home.companyvalue3.title")} image="/icon_planning.svg" title={t("home.companyvalue3.title")} text={t("home.companyvalue3.text")} />
                        </div>
                        <div className="col-md-3">
                            <CompanyValueCard imageAlt={t("home.companyvalue4.title")} image="/trumpcard3.svg" title={t("home.companyvalue4.title")} text={t("home.companyvalue4.text")} />
                        </div>
                    </div>

                    <div className="row">
                        <div style={{ marginTop: "100px"}} />
                    </div>

                    <div className="row">

                        <div className="col-md-4 d-flex flex-column">
                            <div className="m-auto">
                                <h2 className="clickbait-title">{t("home.clickbait")}</h2>
                                <a href="/contact" className="btn roundbutton-secondary title-button clickbait-button">{t("home.button.contact")}</a>
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
                        <div style={{ marginTop: "100px"}} />
                    </div>
                    
                    
                </div>

            </React.Fragment>
        );
    }
}

export default withTranslation()(HomePage);