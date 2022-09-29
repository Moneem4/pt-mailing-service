const express = require('express');

/**
 * Import the utility SendGrid
 */
const SendGrid = require ('../utils/SendGrid');

const router = express.Router();

router.get('/', (req, res) => { res.status(200).send('success') });

router.post('/api/test-email', async (req, res) => {
    try {
        const responseEmail = await SendGrid.textPlainEmail({
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

router.post('/api/pharmatrace/test-email', async (req, res) => {
    /**
     * I build the dynamic object of the fields
     */
    const formFieldsContent = req.body.dynamicTemplateData.formFieldsContent.map(obj => {
        return `
            <li><strong>${obj.key}:</strong> ${obj.value}</li>
        `
    })

    try {
        const responseEmail = await SendGrid.textPlainEmail({
            to: req.body.to,
            from: 'f.laterra@pharmatrace.io',
            subject: req.body.dynamicTemplateData.subject,
            text: req.body.dynamicTemplateData.mainText,
            html:`
                <h3>${req.body.dynamicTemplateData.mainText}</h3>
                <p><strong>${req.body.dynamicTemplateData.subText}</strong></p>
                <ul>${formFieldsContent}</ul>
            `
        });
        res.send(responseEmail[0]);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;

