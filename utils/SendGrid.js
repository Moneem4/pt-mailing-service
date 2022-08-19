/**
 * Official SendGrid SDK.
 */
const SendGrid = require('@sendgrid/mail');

SendGrid.setApiKey(process.env.SENDGRID_API_KEY);

/**
 * Promise for sending multuple email (Promise: sendMultiple)
 */
const sendEmail = ({ to, from, subject, text, html }) => {
    const msg = { to, from, subject, text, html };
    return SendGrid.send(msg);
};

module.exports = sendEmail;
