
 var swiper = new Swiper(".mySwiper", {
            autoplay: true,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            }
        });

        (function () {
            emailjs.init("V25YH8woz5YG7ubmw");
        })();

        document.getElementById('contact-form').addEventListener('submit', function (event) {
            event.preventDefault();
            sendMail();
        });

        function sendMail() {
            var params = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                message: document.getElementById('message').value
            };

            const serviceID = 'service_yoi94cf';
            const templateID = 'template_953dmf6';

            emailjs.send(serviceID, templateID, params)
                .then(function (response) {
                    console.log('Email sent successfully:', response);
                    alert('Your message has been sent! We will get back to you soon.');
                }, function (error) {
                    console.error('Email failed to send:', error);
                    alert('Sorry, there was an error sending your message. Please try again later.');
                });
        }
