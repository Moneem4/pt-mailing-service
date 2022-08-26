# Pt Mailing Service

### Installation
Required node >= 12

`$ npm install`

`$ cp .env.example .env`

- Insert the token API SendGrid in the variable `SENDGRID_API_KEY`
- Insert the template ID in the variable `SENDGRID_TEMPLATE_ID`

### Running
`$ node app.js`

or 

`$ nodemon app.js` 

(for reload automatically https://nodemon.io)

Open your browser at the following address http://localhost:3000