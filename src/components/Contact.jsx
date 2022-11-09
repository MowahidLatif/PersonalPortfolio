import React from "react";
import "../css/contact.css"
import {AiOutlineMail, AiOutlineInstagram} from "react-icons/ai"
import {BsChatLeftText} from "react-icons/bs"
import emailjs from 'emailjs-com';
import { useRef } from 'react';


const Contact = () => {
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_22kkpft', 'template_zjlmuok', form.current, 'sCzGgfmLylWNo0X7j')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch!</h5>
      <h2>Contact Me!</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className="contact_option-icon"/>
            <h4>Email</h4>
            <h5>mowhaidlatif@hotmail.com</h5>
            <a href="mailto:mowahidlatif@hotmail.com" target="blank">Send Email</a>
          </article>
          <article className="contact_option">
            <AiOutlineInstagram className="contact_option-icon"/>
            <h4>Direct Message Me</h4>
            <h5>mowahid_latif</h5>
            <a href="https://www.instagram.com/mowahid_latif/" target="blank">Send Direct Message</a>
          </article>
          <article className="contact_option">
            <BsChatLeftText className="contact_option-icon"/>
            <h4>Text Me</h4>
            <h5>(204) 999- 3903</h5>
            <a href="sms:(+1)(2049993903)" target="blank">Send Text Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Enter Full Name" required/>
          <input type="email" name='email' placeholder="Enter Email" required/>
          <textarea name="message" rows="7" placeholder="Enter Message" required></textarea>
          <button className="btn btn-primary" type="submit">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;

// 412Gmail_API: Request had insufficient authentication scopes. FIX THIS ERROR 