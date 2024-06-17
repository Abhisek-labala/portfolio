import React from 'react'
import './Portfolio.css'
import portfolio1 from '../../assets/images/portfolio8.jpg';
import portfolio2 from '../../assets/images/portfolio2.jpg';
import portfolio3 from '../../assets/images/portfolio3.jpg';
import portfolio4 from '../../assets/images/portfolio4.jpg';
import portfolio5 from '../../assets/images/portfolio7.jpg';
import portfolio6 from '../../assets/images/portfolio5.jpg';
export default function Portfolio() {
  return (
    <div>
       <section className="portfolio" id="portfolio">
        <h2 className="heading">Latest<span>Project</span></h2>
        <div className="portfolio-container">
            <div className="portfolio-box">
                <img src={portfolio1} alt="" />
                <div className="portfolio-layer">
                    <h4>Ischool-E Learning Platform</h4>
                    <p>A iSchool is a software application designed to manage and organize student study...</p>
                    <a href="https://github.com/Abhisek-labala/ischool"><i
                            className="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <img src={portfolio2} alt="" />
                <div className="portfolio-layer">
                    <h4>Java Gamings</h4>
                    <p>Games developed with Java can run on just about any operating system or mobile device... </p>
                    <a href="https://github.com/Abhisek-labala/JAVA-PROGRAMS"><i
                            className="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <img src={portfolio3} alt="" />
                <div className="portfolio-layer">
                    <h4>stle_project</h4>
                    <p>Laravel is a framework built using the PHP scripting language. PHP is an open-source server-side
                        language. </p>
                    <a href="https://github.com/Abhisek-labala/stl-e"><i
                            className="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <img src={portfolio4} alt="" />
                <div className="portfolio-layer">
                    <h4>Php Projects</h4>
                    <p>PHP is a server-side scripting language embedded in HTML in its simplest form.</p>
                    <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <img src={portfolio5} alt="" />
                <div className="portfolio-layer">
                    <h4>Portfolio Design</h4>
                    <p>A portfolio's meaning can be defined as a collection of financial assets and investment tools
                        that are held by an individual, a financial institution or an investment firm</p>
                    <a href="https://abhisek-labala.github.io/Abhiseklabalaportfolio/"><i
                            className="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <img src={portfolio6} alt="" />
                <div className="portfolio-layer">
                    <h4>Web Design</h4>
                    <p>Web designing is the process of planning, conceptualizing, and implementing the plan for
                        designing a website in a way that is functional and offers a good user experience. </p>
                    <a href="https://abhisek-labala.github.io/Digitalcraft/"><i
                            className="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
