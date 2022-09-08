# PT Mailing Service

### Installation
Required node >= 12

`$ npm install`

`$ cp .env.example .env`

- Insert the Azure Application ID in the variable `AZURE_APPLICATION_ID`
- Insert the Token API SendGrid in the variable `SENDGRID_API_KEY`
- Insert the Template ID in the variable `SENDGRID_TEMPLATE_ID`

### Running
`$ npm run start`

(for reload automatically https://nodemon.io)

`$ npm install -g nodemon`

`$ npm run start-watch`

Open your browser at the following address http://localhost:3000/