// @ts-nocheck
import emailjs from "emailjs-com";
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../context";
import Address from "../../img/address.png";
import Email from "../../img/email.png";
import Phone from "../../img/phone.png";
import "./Contact.css";


const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_hg8rnzt",
                "template_q5wn411",
                formRef.current,
                "user_MDNpaWM5YJ6wtlqDNAZB3"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setDone(true);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <div className="contact">
            <div className="contact__bg"></div>
            <div className="contact__wrapper">
                <div className="contact__wrapper__left">
                    <h1 className="contact__wrapper__left__title">
                        Lets discuss your project
                    </h1>
                    <div className="contact__wrapper__left__info">
                        <div className="contact__wrapper__left__info__item">
                            <img
                                src={Phone}
                                alt="phone"
                                className="contact__wrapper__left__info__item__icon"
                            />
                            +2347064444678
                        </div>
                        <div className="contact__wrapper__left__info__item">
                            <img
                                src={Email}
                                alt="email"
                                className=" contact__wrapper__left__info__item__icon"
                            />
                            doikuomola@gmail.com
                        </div>
                        <div className="contact__wrapper__left__info__item">
                            <img
                                src={Address}
                                alt="email"
                                className=" contact__wrapper__left__info__item__icon"
                            />
                            16, Ikere Street, Isheri Olofin, Idimu, Lagos State
                        </div>
                    </div>
                </div>
                <div className="contact__wrapper__right">
                    <p className="contact__wrapper__right__desc">
                        <b>What’s your story?</b> Get in touch. Always available
                        for freelancing if the right project comes along. me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input
                            style={{
                                backgroundColor: darkMode && "#333",
                                color: darkMode && "white",
                            }}
                            type="text"
                            placeholder="Name"
                            name="user_name"
                        />
                        <input
                            style={{
                                backgroundColor: darkMode && "#333",
                                color: darkMode && "white",
                            }}
                            type="text"
                            placeholder="Subject"
                            name="user_subject"
                        />
                        <input
                            style={{
                                backgroundColor: darkMode && "#333",
                                color: darkMode && "white",
                            }}
                            type="text"
                            placeholder="Email"
                            name="user_email"
                        />
                        <textarea
                            style={{
                                backgroundColor: darkMode && "#333",
                                color: darkMode && "white",
                            }}
                            rows="5"
                            placeholder="Message"
                            name="message"
                        />
                        <button>Submit</button>
                        {done && "Thank you for your message, I would reply soon..."}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
