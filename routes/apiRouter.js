const express = require('express');
/**
 * Import the utility SendGrid
 */
const sendEmail = require ('../utils/SendGrid');

const router = express.Router();

router.post('/api/test-email', async (req, res) => {
    try {
        const responseEmail = await sendEmail({
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

module.exports = router;