import emailjs from 'emailjs-com';

export default function Contact(){
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_33gx7rg', 'template_109x6fc', e.target, 'user_J1ob3Ryk5QebuFnmmgVdQ')
            .then((result) => {
                alert("Elküldve!");
            }, (error) => {
                alert("Sikertelen!");
            });
        e.target.reset()
    }

    return (
        <div className='contact'>
            <h1>Üzenetküldés</h1>
            <form onSubmit={sendEmail}>
                <input className='name' type="text" placeholder="Név" name="name" />
                <input className='email' type="email" placeholder="E-mail cím" name="email" />
                <input type="text" placeholder="Tárgy" name="subject" />
                <textarea className='message' placeholder="Írj valamit..." name="message"></textarea>
                <button className='send' type="submit">Küldés</button>
            </form>
            <div className='icons c-icons'>
                <a target='_blank' href="https://www.linkedin.com/in/f-balazs/" rel="noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a target='_blank' href="https://github.com/fbalazs930" rel="noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a target='_blank' href="mailto:fbalazs930@gmail.com" rel="noreferrer">
                    <i className="fas fa-envelope"></i>
                </a>
                <a target='_blank' href="tel:06203370852" rel="noreferrer">
                    <i className="fas fa-phone-alt"></i>
                </a>
            </div>
        </div>
    )
}