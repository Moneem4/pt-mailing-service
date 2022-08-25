/**
 * Official SendGrid SDK.
 */
const SendGrid = require('@sendgrid/mail');

SendGrid.setApiKey(process.env.SENDGRID_API_KEY);

/**
 * Promise for sending multiple email (Promise: sendMultiple)
 */
const sendTextPlainEmail = ({ to, from, subject, text, html }) => {
    const msg = { to, from, subject, text, html };
    return SendGrid.send(msg);
};

const sendEmailWithTemplate = ({ to, from, templateId, dynamicTemplateData }) => {
    const msg = { to, from, templateId, dynamicTemplateData };
    return SendGrid.send(msg);
};

module.exports = { sendTextPlainEmail, sendEmailWithTemplate };
