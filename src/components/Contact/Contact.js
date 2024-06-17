import React from 'react'
import './Contact.css'
export default function Contact() {
    
  return (
    <div>
       <section className="contact" id="contact">
        <h2 className="heading">Contact<span>Me</span></h2>
        <form action="#">
            <div className="input-box">
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email Address" />
            </div>
            <div className="input-box">
                <input type="number" placeholder="Mobile Number" />
                <input type="text" placeholder="Email subject" />
            </div>
            <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
            <input type="submit" value="Send Message" className="btn" />
        </form>
    </section>
    </div>
  )
}
