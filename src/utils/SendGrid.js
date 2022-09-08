/**
 * Official SendGrid SDK.
 */
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/**
 * Promise for sending multiple email (Promise: sendMultiple)
 */
const textPlainEmail = ({ to, from, subject, text, html }) => {
    const msg = { to, from, subject, text, html };
    return sgMail.send(msg);
};

const templateEmail = ({ to, from, templateId, dynamicTemplateData }) => {
    const msg = { to, from, templateId, dynamicTemplateData };
    return sgMail.send(msg);
};

module.exports = { textPlainEmail, templateEmail };
