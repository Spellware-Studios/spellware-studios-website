import React from 'react';
import { Image } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

import '../../css/Footer.scss'

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    onNavigateToNewPage = () => {
        window.scrollTo(0, 0);
    }

    render() {
        const { t,lang } = this.props;
        console.log(this.props.test);
        
        return (
            <div className="footer-body mask-top-thick">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 offset-md-0">
                            <Image className="footer-logo" src="/spellwarelogo_white_hor.png" alt={t("footer.image.logo.alt")} />
                        </div>
                    </div>

                    {/* <div className="row">
                        
                        <div className="col-md-4">
                            <a href="/contact" className="btn roundbutton-primary title-button clickbait-button">{t("home.button.contact")}</a>
                        
                        </div>
                    </div> 
                    
                    <div className='row' style={{marginTop: "20px"}}>
                    */}

        
                    <div className="row">
                        <div className="col-md-3">
                            <h3 className="footer-title d-none d-md-block">{t("footer.title.location")}</h3>
                        </div>
                        <div className="col-md-3">
                            <h3 className="footer-title d-none d-md-block">{t("footer.title.contact")}</h3>
                        </div>
                        <div className="col-md-3">
                            <h3 className="footer-title d-none d-md-block">{t("footer.title.links")}</h3>
                        </div>
                        <div className="col-md-3">
                            <h3 className="footer-title d-none d-md-block">{t("footer.title.privacy")}</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 footer-group">
                            <h3 className="footer-title d-block d-md-none">{t("footer.title.location")}</h3>
                            <p>{t("contact.address.street")}</p>
                            <p>{t("contact.address.city")}</p>
                        </div>
                        <div className="col-md-3 footer-group">
                            <h3 className="footer-title d-block d-md-none">{t("footer.title.contact")}</h3>
                            <p><a className="footer-link" href="mailto:contact@spellwarestudios.com">{t("contact.email")}</a></p>
                            {/*<p><a className="footer-link" href={"tel:" + t("contact.telno")}>{t("contact.telno")}</a></p>*/}
                        </div>
                        <div className="col-md-3 footer-group">
                            <h3 className="footer-title d-block d-md-none">{t("footer.title.links")}</h3>
                            <p><Link className="footer-link" to={`/${lang}/portfolio`} onClick={this.onNavigateToNewPage}>{t("nav.portfolio")}</Link></p>
                            <p><Link className="footer-link" to={`/${lang}/about`} onClick={this.onNavigateToNewPage}>{t("nav.about")}</Link></p>
                            <p><Link className="footer-link" to={`/${lang}/contact`} onClick={this.onNavigateToNewPage}>{t("nav.contact")}</Link></p>
                        </div>
                        <div className="col-md-3 footer-group">
                            <h3 className="footer-title d-block d-md-none">{t("footer.title.privacy")}</h3>
                            <p><Link className="footer-link" to={`/${lang}/cookie-policy`} onClick={this.onNavigateToNewPage}>{t("footer.cookiepolicy")}</Link></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 d-flex">
                            <div className="m-auto">
                                <a className="footer-social fab fa-linkedin" href="https://www.linkedin.com/company/SpellwareST" target="_blank" aria-hidden="false" alt="Spellware LinkedIn"></a>
                                <a className="footer-social fab fa-twitter" href="https://www.twitter.com/SpellwareST" target="_blank" aria-hidden="false" alt="Spellware Twitter"></a>
                                <a className="footer-social fab fa-youtube" href="https://www.youtube.com/@GiantSlothGames" target="_blank" aria-hidden="false" alt="Spellware Twitter"></a>
                                <a className="footer-social fab fa-reddit" href="https://www.reddit.com/user/spellwarest" target="_blank" aria-hidden="false" alt="Spellware Reddit"></a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <p className="footer-madeby">{t("footer.madeby")}</p>
                            <p className="footer-copyright">{t("footer.copyright")}</p>
                        </div>
                    </div>

                </div>
            </div>);
    }
}

export default withTranslation()(Footer);