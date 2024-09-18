import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FiInstagram} from 'react-icons/fi'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form= useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('aarya_mahajan03', 'template_sc7x11s', form.current, '5f5fo9EviH1cREI7n')
    
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>ampabha@iu.edu</h5>
            <a href="mailto:ampabha@iu.edu" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
          <article className="contact__option">
            <FiInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>aarya_mahajan03</h5>
            <a href="https://www.instagram.com/aarya_mahajan03/" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 7006672881</h5>
            <a href="https://api.whatsapp.com/send?phone=7006672881" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
        </div>
        {/*  end of contact options*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full-Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact