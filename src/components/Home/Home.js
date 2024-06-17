import React,{ useEffect }from 'react';
import './Home.css';
import Button from '../Button/Button';
import ScrollReveal from 'scrollreveal';
ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200,
});

export default function Home() {
  useEffect(() => {
    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
    ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });
}, []);
  return (
    <div>
      <section className="home" id="home">
        <div className="home-content">
          <h3>Hello, I am</h3>
          <h1>Abhisek Labala</h1>
          <p>Full-stack web developer skilled in front-end and back-end technologies. Passionate about crafting seamless user experiences and delivering high-quality results.</p>
          <div className="social-media">
            <a href="https://instagram.com/imabhisekofficial"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.facebook.com/abhiseklabala"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://www.linkedin.com/in/abhisek-labala-a4a537273"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="https://github.com/Abhisek-labala"><i className="fa-brands fa-github"></i></a>
          </div>
          <Button />
        </div>
        <div className="profession-container">
          <div className="profession-box">
            <div className="profession" style={{ "--i": 0 }}>
            <i className="fa-solid fa-camera"></i>
              <h3>Photography</h3>
            </div>
            <div className="profession" style={{ "--i": 1  }}>
              <i className="fas fa-microchip" style={{ marginRight: '10px' }}></i>
              <h3>Backend Developer</h3>
            </div>
            <div className="profession" style={{ "--i": 2 }}>
              <i className="fas fa-code" style={{ marginRight: '10px' }}></i>
              <h3>Web Developer</h3>
            </div>
            <div className="profession" style={{ "--i": 3 }}>
              <i className="fas fa-globe-americas" style={{ marginLeft: '20px' }}></i>
              <h3>Travelling</h3>
            </div>
            <div className="circle"></div>
          </div>
          <div className="overlay"></div>
        </div>
        <div className="home-img">
        </div>
      </section>
    </div>
  );
}
