import React from 'react'
import { useRouteData } from 'react-static';
import { Button, Form, Col } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

import PageHeader from '../components/PageHeader';
import PageSpacer from '../components/PageSpacer';

import "../../css/ContactPage.scss"

const STATUS_READY = 0;
const STATUS_SENDING = 1;
const STATUS_SENT = 2;

class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sendStatus: STATUS_READY,
            name: "",
            email: "",
            phone: "",
            address: "",
            description: "",
            checkbox: false,
            sendError: null,
            errors: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.termsCheckboxRef = React.createRef();
    }

    sendMail = async (event) => {
        event.preventDefault();

        if (this.state.sendStatus == STATUS_SENDING)
            return; // Prevent user from clicking the button multiple times

        if (!this.validateForm())
            return; // Don't attempt to send if there are errors

        this.setState({ sendStatus: STATUS_SENDING, sendError: null });

        let bodyText = "ADDRESS: " + this.state.address + "\n";
        bodyText += "PHONE: " + this.state.phone + "\n";
        bodyText += "=================================================\n\n";
        bodyText += "" + this.state.description + "\n";

        const response = await fetch("https://formsubmit.co/ajax/2a713f84993d3ddd61bf5274012902c8", {
            method: 'POST',
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                _replyto: this.state.email,
                message: bodyText
            }),
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
        });


        if (response.status !== 200) {
            const responseBody = await response.json();
            console.warn("ERROR sending mail: status-code = " + response.status + ", message = " + responseBody.errorMessage);

            this.setState({ sendStatus: STATUS_READY, sendError: responseBody.errorMessage })
        } else {
            //console.log("Successfully sent contact form.")
            //console.log( await (await response.blob()).text());
            this.setState({ sendStatus: STATUS_SENT })
        }
    }

    hasError(key) {
        return this.state.errors.indexOf(key) !== -1;
    }

    handleInputChange(event) {
        var key = event.target.name;
        var value = event.target.value;
        var obj = {};
        obj[key] = value;
        this.setState(obj);
    }

    validateForm = () => {
        var errors = [];
        if (this.state.name === "") {
            errors.push("name");
        }

        var emailExpr = /\S+@\S+/;
        var validEmail = emailExpr.test(String(this.state.email).toLowerCase());

        if (!validEmail) {
            errors.push("email");
        }


        if (this.state.description === "") {
            errors.push("description");
        }

        if (!this.termsCheckboxRef.current.checked) {
            errors.push("checkbox");
        }

        this.setState({ errors: errors });

        return errors.length == 0;
    }

    render() {
        const { t } = this.props;
        return (
            <React.Fragment>
                <Helmet>
                    <title>{t("nav.contact")}</title>
                    <meta name="Description" content={t("home.introtext")} />
                    </Helmet>
                <PageHeader />

                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-md-12">
                            <h2 className="maintitle">{t("contact.maintitle")}</h2>
                            <p className="contact-text">{t("contact.text.p1")}</p>
                            <p className="contact-text">{t("contact.text.p2")} <a href="mailto:contact@spellwarestudios.com">{t("contact.email")}</a>.</p>
                        </div>
                    </div>

                    <Form className="contact-form" onSubmit={this.sendMail} >
                        <Form.Row className="row">

                            <Form.Group className="col-md-6" controlId="formGridName">
                                <Form.Label>{t("contact.page.name")}*</Form.Label>
                                <Form.Control name="name"
                                    value={this.state.name}
                                    placeholder="John Doe"
                                    className={this.hasError("name") ? "form-control is-invalid contact-textbox" : "form-control contact-textbox"}
                                    onChange={this.handleInputChange} />

                                <p className={this.hasError("name") ? "inline-errormsg" : "d-none"}>{t("contact.error.name")}</p>
                            </Form.Group>

                            <Form.Group className="col-md-6" controlId="formGridEmail">
                                <Form.Label>{t("contact.page.email")}*</Form.Label>
                                <Form.Control name="email"
                                    placeholder="John.doe@example.com"
                                    className={this.hasError("email") ? "form-control is-invalid contact-textbox" : "form-control contact-textbox"}
                                    onChange={this.handleInputChange} />
                                <p className={this.hasError("email") ? "inline-errormsg" : "d-none"}>{t("contact.error.email")}</p>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row className="row">
                            <Form.Group className="col-md-6" controlId="formGridAddress">
                                <Form.Label>{t("contact.address")}</Form.Label>
                                <Form.Control name="address"
                                    onChange={this.handleInputChange}
                                    placeholder="123 Maple Street, Anytown, PA 17101"
                                    className="form-control contact-textbox" />
                            </Form.Group>

                            <Form.Group className="col-md-6" controlId="formNumber">
                                <Form.Label>{t("contact.phone")}</Form.Label>
                                <Form.Control name="phone"
                                    placeholder="+32471234567"
                                    onChange={this.handleInputChange}
                                    className="form-control contact-textbox" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row className="row">
                            <Form.Group className="col-md-12" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>{t("contact.description")}*</Form.Label>
                                <Form.Control name="description"
                                    as="textarea" rows={8}
                                    className={this.hasError("description") ? "form-control is-invalid contact-textbox" : "form-control contact-textbox"}
                                    onChange={this.handleInputChange} />
                                <p className={this.hasError("description") ? "inline-errormsg" : "d-none"}>{t("contact.error.description")}</p>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row className="row">
                            <Form.Group className="col-md-12" id="formGridCheckbox">
                                <div className="d-flex">
                                    <Form.Check id="contact-terms-checkbox"
                                        type="checkbox"
                                        name="checkbox"
                                        ref={this.termsCheckboxRef} />

                                    <label htmlFor="contact-terms-checkbox">{t("contact.terms")}<a href="/cookie-policy">{t("contact.terms.bold")}</a>{t("contact.terms.end")} *</label>
                                </div>
                                <p className={this.hasError("checkbox") ? "inline-errormsg" : "d-none"}>{t("contact.error.terms")}</p>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row className="row">
                            <div className="col-md-12 d-flex">
                                <p className={(this.state.sendError ? "inline-errormsg" : "d-none") + " send-error m-auto"}>{t("contact.error.send") + this.state.sendError}</p>
                            </div>
                            <div className="col-md-12 d-flex">
                                <Button className={"btn sendbutton d-block m-auto " + (this.state.sendStatus == STATUS_SENT ? "roundbutton-secondary" : "roundbutton-primary")}
                                    style={this.state.sendStatus == STATUS_SENT ? { pointerEvents: "none" } : {}}
                                    variant="primary" type="submit" >
                                    {
                                        this.state.sendStatus == STATUS_SENDING ?
                                            <div className="spinner-border sendbutton-spinner" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div> :
                                            (this.state.sendStatus == STATUS_SENT ? t("contact.submitbutton.sent") : t("contact.submitbutton"))
                                    }
                                </Button>
                            </div>
                        </Form.Row>
                    </Form>
                </div>

                <PageSpacer />
            </React.Fragment>);
    }

}

export default withTranslation()(ContactPage);