const emailApi = {
    init() {
        feather.replace();
        this.handleButton();
    },
    handleButton() {
        document.querySelector('.btnn-send-email').addEventListener('click', (e) => {
            let sound = new Audio('../audios/sound-send.mp3');
            document.querySelector('.content').classList.toggle('hide');
            document.querySelector('.icon-send').classList.toggle('animation');
            setTimeout(() => {
                sound.play();
            }, 500);
            setTimeout(() => {
                // select which method
                this.sendTextPlainEmail();
            }, 2000);
        });
    },
    /**
     * Send POST API with only Text Plain (EV)
     */
    sendTextPlainEmail() {
        const url = '/api/test-email';
        axios.post(url)
            .then((res) => {
                if (res.data.statusCode === 202) {
                    document.querySelector('section').style.backgroundColor = 'rgba(68, 207, 136, 0.2)';
                    document.querySelector('section .content').innerHTML = `
                        <i data-feather="check-circle" style="stroke: #44cf87"></i>
                        <h1 style="color: #44cf87">The email was sent successfully!</h1>
                    `;
                    feather.replace();
                    document.querySelector('.content').classList.toggle('hide');
                }
            })
            .catch((error) => {
                console.log(error);
        })
    },
    /**
     * Send POST API with only Text Plain for (PT)
     */
    sendTextPlainEmailPharmatrace() {
        const url = '/api/pharmatrace/test-email';
        const options = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };
        const to = 'f.laterra@pharmatrace.io';
        const dynamic_template_data = {
            subject: 'Requirement gathering form: CMO/CPO [Company Name]',
            main_text: "We have successfully received data from the customer",
            sub_text: 'Please find below the submitted information:',
            form_fields_content: [
                { key:  'field1', value: 'value1' },
                { key:  'field2', value: 'value2' },
                { key:  'field3', value: 'value3' }
            ]
        }
        axios.post(url, {
            to: to,
            dynamic_template_data: dynamic_template_data
        }, options)
            .then((res) => {
                if (res.data.statusCode === 202) {
                    document.querySelector('section').style.backgroundColor = 'rgba(68, 207, 136, 0.2)';
                    document.querySelector('section .content').innerHTML = `
                        <i data-feather="check-circle" style="stroke: #44cf87"></i>
                        <h1 style="color: #44cf87">The email was sent successfully!</h1>
                    `;
                    feather.replace();
                    document.querySelector('.content').classList.toggle('hide');
                }
            })
            .catch((error) => {
                console.log(error);
        })
    },
    /**
     * Send POST API with Dynamic Template (EV)
     */
    sendEmailWithTemplate() {
        const url = '/api/test-email-template';
        const options = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };
        const to = 'f.laterra@pharmatrace.io';
        const version = 'Verification Failure Notification';
        const dynamic_template_data = {
            subject: 'Need Attention - Verification Failure Notification',
            main_text: "We've detected a verification failure in Evonik environment.",
            content: [
                { key:  'Account Holder', value: 'Username' },
                { key:  'Product', value: 'Product Name' },
                { key:  'Location', value: 'Site Name' }
            ],
            text_before_button: 'Please take necessary actions from your end.',
            button_text: 'Take action now',
            button_url: 'https://example.com'
        }

        axios.post(url, {
            to: to,
            version: version,
            dynamic_template_data: dynamic_template_data
        }, options)
            .then((res) => {
                if (res.data.statusCode === 202) {
                    document.querySelector('section').style.backgroundColor = 'rgba(68, 207, 136, 0.2)';
                    document.querySelector('section .content').innerHTML = `
                        <i data-feather="check-circle" style="stroke: #44cf87"></i>
                        <h1 style="color: #44cf87">The email was sent successfully!</h1>
                    `;
                    feather.replace();
                    document.querySelector('.content').classList.toggle('hide');
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

emailApi.init();