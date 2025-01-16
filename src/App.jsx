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
import CookiePolicyPage from './pages/CookiePolicyPage';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import PageLoading from './components/PageLoading';
import AppLoadingOverlay from './components/AppLoadingOverlay';
import { useLocation } from 'react-router-dom';

import { withTranslation } from 'react-i18next';

// Routes to be treated as non-static routes (all of them?)
addPrefetchExcludes([''])

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            language: 'en',
        }
    }

    componentDidMount() {
        const pathname = window.location.pathname;
        const langMatch = pathname.match(/^\/([a-z]{2})\//);  // Match the language code (2 lowercase letters at the beginning)
    
        if (langMatch) {
            const lang = langMatch[1];  // Extract language code
            console.log(lang);  // Log the language, e.g., "en" or "nl"
    
            this.props.i18n.changeLanguage(lang);  // Change the language based on the lang param
            this.setState({ language: lang });  // Store the language in the state
        } else {
            this.props.i18n.changeLanguage('en');  // Fallback to English if no language is found
            this.setState({ language: 'en' });
        }
    }

    getCookie(name) {
        if (name == undefined || name == null || name == "") return null;

        const cookieArray = document.cookie.split(';');

        for (const cookie of cookieArray) {
            const tempCookie = cookie.trim();

            if (tempCookie.startsWith(name + "=")) {
                const value = tempCookie.substring(name.length + 1);
                return decodeURIComponent(value);
            }
        }

        return null;
    }

    handleCookies() {
        const cookieLanguage = this.getCookie('language');

        if (cookieLanguage != undefined && cookieLanguage != null && cookieLanguage != "") {
            this.props.i18n.changeLanguage(cookieLanguage);
            this.setState({ language: cookieLanguage })
        }
        else {
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

                    <meta name="keywords" content="Game Developers For Hire,Game Development, Gameplay Programming, Graphics Programming,Engine Programming,Game Porting Services,Unity Developers,Unreal Engine Developers,Game Developers Belgium,Game developers belgie,Game Ontwikkelaar Belgie,Game Ontwikkelaar Inhuren" />

                    {/* Google Analytics */}
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-RLX03N4LPN" />
                    <script src="/scripts/gtag.js" />
                </Helmet>

                <NavBar lang={this.state.language}/>

                {/* Note: the <Routes> component is automatically added by react-static-router-react-plugin, we don't need to add it here ourselves. */}

                <div className="page-content">
                    <Switch>

                        {/* Dynamic Routes */}
                        <Route exact path="/">
                            <Redirect to="/en/home" />
                        </Route>
                        <Route path="/index.html">
                            <Redirect to="/en/home" />
                        </Route>
                        <Route path="/:lang/home" component={HomePage} />
                        <Route path="/:lang/about" component={AboutPage} />
                        <Route path="/:lang/contact" component={ContactPage} />
                        <Route path="/:lang/services" component={ServicesPage} />
                        <Route path="/:lang/portfolio" component={PortfolioPage} />
                        <Route path="/:lang/cookie-policy" component={CookiePolicyPage} />
                        <Route path="/:lang/starfall" render={({ match }) => {
                            const lang = match.params.lang;
                            window.location.href = `http://starfall.spellwarestudios.com`;
                            return null;
                        }}>
                        </Route>

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
                <Footer lang={this.state.language}/>

            </Root>);
    }
}

export default withTranslation()(App);

