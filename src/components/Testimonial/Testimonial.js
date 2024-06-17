import React, { useEffect } from 'react'; 
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import './Testimonial.css';
import testimonial1 from '../../assets/images/testimonial4.jpg';
import testimonial2 from '../../assets/images/testimonial2.jpg';
import testimonial3 from '../../assets/images/testimonial3.jpg';

export default function Testimonial() {
  useEffect(() => {
    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 50,
      loop: true,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []); // Empty dependency array ensures useEffect runs only once after initial render

  return (
    <div className="testimonial-container"> {/* Moved className to outer div */}
      <h2 className="heading">Valuable<span>Testimonial</span></h2>

      <div className="testimonial-wrapper">
        <div className="testimonial-box mySwiper">
          <div className="testimonial-content swiper-wrapper">
            <div className="testimonial-slide swiper-slide">
              <img src={testimonial1} alt="" />
              <h3>Sarah Johnson</h3>
              <p>Working with Abhisek has been an incredible experience. Their creativity and attention to detail are truly remarkable. I'm thrilled with the results!</p>
            </div>
            <div className="testimonial-slide swiper-slide">
              <img src={testimonial2} alt="" />
              <h3>Mark Smith</h3>
              <p>I couldn't be happier with the work Abhisek did for me. They listened to my ideas and brought them to life beautifully. Highly recommended!</p>
            </div>
            <div className="testimonial-slide swiper-slide">
              <img src={testimonial3} alt="" />
              <h3>Emily Brown</h3>
              <p>Abhisek is a true professional. Their talent and dedication shine through in every project. I'm so grateful to have found them for my design needs.</p>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
}
