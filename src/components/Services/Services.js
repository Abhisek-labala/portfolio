import React from 'react'
import './Services.css'
export default function Services() {
  return (
    <div>
      <section className="services" id="services">
        <h2 className="heading">My<span>Services</span></h2>
        <div className="services-container">
            <div className="service-box"><i className="fa-solid fa-code"></i>
                <h3>Web Development</h3>
                <p>Online gaming is simply the playing of a video game over the internet, usually with friends. Online
                    games can be played on any number of devices from dedicated video games consoles....</p>
                <a href="https://www.geeksforgeeks.org/web-development/" className="btn">Read More</a>
            </div>
            <div className="service-box"><i className="fa-solid fa-paintbrush"></i>
                <h3>Graphics Design</h3>
                <p>Graphic design is a profession,[2] academic discipline[3][4][5] and applied art whose activity
                    consists in projecting visual communications intended to transmit specific messages to social groups...
                </p>
                <a href="https://en.wikipedia.org/wiki/Graphic_design" className="btn">Read More</a>
            </div>
            <div className="service-box"><i className="fa-solid fa-gamepad"></i>
                <h3>Online Gaming</h3>
                <p>Online gaming is simply the playing of a video game over the internet, usually with friends. Online
                    games can be played on any number of devices from dedicated video games consoles....</p>
                <a href="#" className="btn">Read More</a>
            </div>
        </div>
    </section>
    </div>
  )
}
