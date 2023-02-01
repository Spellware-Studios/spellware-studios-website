import React from 'react'
import { Root, Routes as StaticRoutes, addPrefetchExcludes } from 'react-static'
import { Switch, Route, Redirect } from "react-router-dom";
import { Helmet } from 'react-helmet';
import CookieConsent from "react-cookie-consent";
import '../css/main.scss'

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import PageLoading from './components/PageLoading';
import AppLoadingOverlay from './components/AppLoadingOverlay';

import { withTranslation } from 'react-i18next';

// Routes to be treated as non-static routes (all of them?)
addPrefetchExcludes([''])

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        if (window.location.toString().includes("_escaped_fragment_")) {
            console.log("Crawler detected, setting language to EN");
            this.props.i18n.changeLanguage("en"); // Set language to EN for SEO
        }
    }

    render() {
        const t = this.props.t;
        return (
            <Root>
                <Helmet>
                    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

                    <script src="https://kit.fontawesome.com/2fdeda7a4a.js" crossorigin="anonymous" />
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" />

                    {/* Google Analytics */}
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-3HMHYH4K9S" />
                    <script src="/scripts/gtag.js" />
                </Helmet>

                <NavBar />

                {/* Note: the <Routes> component is automatically added by react-static-router-react-plugin, we don't need to add it here ourselves. */}

                <div className="page-content">
                    <Switch>

                        {/* Dynamic Routes */}
                        <Route exact path="/">
                            <Redirect to="/home" />
                        </Route>
                        <Route path="/index.html">
                            <Redirect to="/home" />
                        </Route>
                        <Route path="/home" component={HomePage} />
                        <Route path="/about" component={AboutPage} />
                        <Route path="/contact" component={ContactPage} />
                        <Route path="/services" component={ServicesPage} />
                        <Route path="/portfolio" component={PortfolioPage} />

                        {/* Static Routes (including 404 page) */}
                        <Route>
                            <React.Suspense fallback={<PageLoading />}>
                                <StaticRoutes path="*" />
                            </React.Suspense>
                        </Route>

                    </Switch>
                </div>
                <CookieConsent location="bottom" cookieName="SpellwareCookie" buttonText={t("cookies.button.text")} style={{ background: "#21242c", boxShadow: "0px 2px 10px #000000" }} buttonClasses="btn roundbutton-secondary title-button" expires={999}>
                    {t("cookies.div.text")}
                </CookieConsent>
                <Footer />

            </Root>);
    }
}

export default withTranslation()(App);

