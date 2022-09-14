/**
 * Import the utility SendGrid
 */
const SendGrid = require ('../utils/SendGrid');

/**
 * The main schemes are defined through a destructuring
 * of the argument data and passed as parameters to async functions
 */
const SendGridService = {
    async sendTextPlainEmail() {
        try {
            const responseEmail = await SendGrid.textPlainEmail({
                to: 'f.laterra@pharmatrace.io',
                from: 'f.laterra@pharmatrace.io',
                subject: 'Sending test email',
                text: 'This email test was sent with the official SendGrid library in Node.js',
                html:'<strong>This email test was sent with the official SendGrid library in Node.js</strong>'
            });
            console.log(responseEmail);
        } catch (error) {
            console.log(error);
        }
    },
    async sendTemplateEmail(args, response) {
        try {
            const responseEmail = await SendGrid.templateEmail({
                to: 'f.laterra@pharmatrace.io',
                from: 'f.laterra@pharmatrace.io',
                templateId: process.env.SENDGRID_TEMPLATE_ID,
                dynamicTemplateData: args.notifyAdmin.dynamicTemplateData
            });
            console.log(responseEmail);
            console.log('Email successfully sent.');
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = SendGridService;