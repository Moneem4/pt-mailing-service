const express = require('express');
/**
 * Import the utility SendGrid
 */
const sendEmail = require ('../utils/SendGrid');

const router = express.Router();

router.post('/api/test-email', async (req, res) => {
    try {
        const responseEmail = await sendEmail.sendTextPlainEmail({
            to: 'f.laterra@pharmatrace.io',
            from: 'f.laterra@pharmatrace.io',
            subject: 'Sending test email',
            text: 'This email test was sent with the official SendGrid library in Node.js',
            html:'<strong>This email test was sent with the official SendGrid library in Node.js</strong>'
        });
        res.send(responseEmail[0]);
    } catch (error) {
        res.send(error);
    }
});

router.post('/api/test-email-template', async (req, res) => {
    try {
        const responseEmail = await sendEmail.sendEmailWithTemplate({
            to: req.body.to,
            from: 'f.laterra@pharmatrace.io',
            templateId: process.env.SENDGRID_TEMPLATE_ID,
            dynamicTemplateData: req.body.dynamic_template_data
        });
        res.send(responseEmail[0]);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;

