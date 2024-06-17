import React from 'react'
import './About.css'
// import '../mediaquery.css'
import home_img from '../../assets/images/Abhisek2.jpg'
export default function About() {
  return (
    <div>
      <section className="about" id="about">
        <div className="about-img">
            <img src={home_img} alt="Profile"  />

        </div>
        <div className="about-content">
            <h2 className="heading">About<span>Me</span></h2>
            <h3><span>Software</span> Developer!</h3>
            <p>I'm a full-stack web developer with a passion for creating dynamic and scalable applications. With
                expertise in both front-end and back-end technologies such as HTML, CSS, JavaScript,PHP,Laravel and
                databases like PostgreSQL and MySQL, I specialize in building end-to-end solutions that deliver seamless
                user
                experiences. From crafting elegant user interfaces to optimizing server performance, I thrive on
                tackling challenges and delivering high-quality results. Explore my portfolio to see how I blend
                creativity and technical expertise to bring projects to life. Let's collaborate on your next venture and
                turn your ideas into reality!</p>
            <a href="https://www.google.com/search?q=abhisek+labala&rlz=1C1RXQR_enIN1040IN1040&oq=abhisek+labala&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiABDIPCAIQLhgKGIMBGLEDGIAEMg8IAxAuGAoYgwEYsQMYgAQyBwgEEC4YgAQyBggFEEUYPTIGCAYQRRg8MgYIBxBFGDzSAQgzMDU5ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
                className="btn"> Read more</a>

        </div>
    </section>
    </div>
  )
}
