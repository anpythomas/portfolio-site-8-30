import React from 'react';

const Contact = () => {
    return (
        <section id="contact">
            <h2>Contact</h2>
            <p>If you would like to get in touch with me, please fill out the form below:</p>
            <form className="contact-form">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Message"></textarea>
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
}

export default Contact;
