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
                this.sendEmail();
            }, 2000);
        });
    },
    sendEmail() {
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
    }
}

emailApi.init();