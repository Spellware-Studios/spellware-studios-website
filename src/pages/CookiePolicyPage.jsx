import React from 'react';
import PageHeader from '../components/PageHeader';
import { Helmet } from 'react-helmet';
import { withTranslation } from 'react-i18next';

class CookiePolicyPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    // GENERATED FROM: https://www.cookiepolicygenerator.com
    render() { 
        const { t } = this.props;
        
        return (  
            <React.Fragment>
                <Helmet>
                    <title>Cookie Policy</title>
                </Helmet>
                <PageHeader />
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 offset-md-1" style={{marginTop: "2em", marginBottom: "2em"}}>
                            <h1>{t("cookiepolicy.header1.title")}</h1>

                            <p>{t("cookiepolicy.header1.article1")}</p>

                            <p><strong>{t("cookiepolicy.header2.title")}</strong></p>

                            <p>{t("cookiepolicy.header2.article1")}</p>

                            <p><strong>{t("cookiepolicy.header3.title")}</strong></p>

                            <p>{t("cookiepolicy.header3.article1")}</p>

                            <p><strong>{t("cookiepolicy.header4.title")}</strong></p>

                            <p>{t("cookiepolicy.header4.article1")}</p>
                            
                            <p><strong>{t("cookiepolicy.header5.title")}</strong></p>
                            <ul>
                            <li>
                                <p>{t("cookiepolicy.header5.article1")}</p>
                                <p>{t("cookiepolicy.header5.article2")}</p>
                            </li>
                            </ul>

                            <p><strong>{t("cookiepolicy.header6.title")}</strong></p>

                            <p>{t("cookiepolicy.header6.article1")}</p>

                            <ul>

                            <li>
                                <p>{t("cookiepolicy.header6.article2")}</p>
                                <p>{t("cookiepolicy.header6.article3")} <a href="https://policies.google.com/technologies/partner-sites" target='_blank'>{t("cookiepolicy.header6.article4")}</a>.</p>
                            </li>

                            </ul>

                            <p><strong>{t("cookiepolicy.header7.title")}</strong></p>

                            <p>{t("cookiepolicy.header7.article1")}</p>

                            <p>{t("cookiepolicy.header7.article2")}<a href="https://www.cookiepolicygenerator.com/sample-cookies-policy/" target='_blank'>{t("cookiepolicy.header7.article3")}</a>.</p>

                            <p>{t("cookiepolicy.header7.article4")}</p>

                            <ul>
                            <li>Email: contact@spellwarestudios.com</li>

                            </ul>

                        </div>
                    </div>
                </div>
            </React.Fragment>);
    }
}

export default withTranslation()(CookiePolicyPage);