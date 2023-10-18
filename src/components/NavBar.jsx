import React from 'react';

import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';

import '../../css/NavBar.scss';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            languages: ["en", "nl"],
            isScrolledDown: false
        }
        this.navbarRef = React.createRef();
        this.logoRef = React.createRef();
        this.toggleRef = React.createRef();
    }


    handleDocumentClick = (e) => {
        const navbar = this.navbarRef.current;
        if (!navbar || !this.toggleRef.current)
            return;

        if (e.target !== navbar && !navbar.contains(e.target) && !this.toggleRef.current.classList.contains("collapsed")) {
            this.toggleRef.current.click()
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScrollEvent);
        document.body.addEventListener('click', this.handleDocumentClick);
        this.handleScrollEvent();
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScrollEvent);
    }

    onChangeLocale = (event) => {
        //console.log("Changing language to: " + event.target.getAttribute("lang"))
        this.props.i18n.changeLanguage(event.target.getAttribute("lang"))
    }

    onNavLinkClick = (event) => {
        if (window.getComputedStyle(this.toggleRef.current).display !== "none") {
            this.toggleRef.current.click()
        }
        window.scrollTo(0, 0); // Scroll to top whenever a nav item is clicked
    }

    handleScrollEvent = () => {
        const navbar = this.navbarRef.current;
        const logo = this.logoRef.current;
        if (!navbar || !logo)
            return;

        if (window.scrollY > 0) {
            navbar.classList.add("navbar-body-opaque");
            logo.classList.add("navbar-logo-small");
            this.setState({ isScrolledDown: true });
        } else {
            navbar.classList.remove("navbar-body-opaque");
            logo.classList.remove("navbar-logo-small");
            this.setState({ isScrolledDown: false });
        }
    }

    onLogoClick = () => {
        window.scrollTo(0, 0);
    }

    render() {
        const { t } = this.props;

        return (<React.Fragment>
            {/*<div style={{height: "28px", backgroundColor: "#01ffba"}} />*/}
            <Navbar className="navbar-body" fixed="top" expand="md" ref={this.navbarRef}>

                <Navbar.Toggle onClick={this.handleDocumentClick} ref={this.toggleRef} aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="m-auto">  {/* Nav links */}

                        <LinkContainer to="/home" onClick={this.onLogoClick}>
                            <Navbar.Brand className="m-auto">
                                <Image src="/spellwarelogo_white_hor.svg" className="navbar-logo d-inline-block align-top" alt={t("nav.image.logo.alt")} ref={this.logoRef} />
                            </Navbar.Brand>
                        </LinkContainer>

                        <LinkContainer onClick={this.onNavLinkClick} to="/home">
                            <Nav.Item className="navbar-link m-auto">{t("nav.home")}</Nav.Item>
                        </LinkContainer>
                        <LinkContainer onClick={this.onNavLinkClick} to="/services">
                            <Nav.Item className="navbar-link m-auto">{t("nav.services")}</Nav.Item>
                        </LinkContainer>
                        <LinkContainer onClick={this.onNavLinkClick} to="/portfolio">
                            <Nav.Item className="navbar-link m-auto">{t("nav.portfolio")}</Nav.Item>
                        </LinkContainer>
                        <LinkContainer onClick={this.onNavLinkClick} to="/about">
                            <Nav.Item className="navbar-link m-auto">{t("nav.about")}</Nav.Item>
                        </LinkContainer>
                        <LinkContainer onClick={this.onNavLinkClick} to="/contact">
                            <Nav.Item className="navbar-link m-auto">{t("nav.contact")}</Nav.Item>
                        </LinkContainer>

                    </Nav>
                    
                    {/* Language picker */}
                    <Nav> 

                        <NavDropdown className="navbar-language-dropdown m-auto" title={<div className="d-inline"><p className="fas fa-globe-africa d-inline lang-picker-globe"/><p className="d-inline">{this.props.i18n.language}</p></div>} alignRight>
                            {this.state.languages.map((lang) => <NavDropdown.Item onClick={this.onChangeLocale} key={lang} lang={lang}>{t("lang." + lang)}</NavDropdown.Item>)}
                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>);
    }
}

export default withTranslation()(NavBar);