import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('header nav a');
            const currentScrollPos = window.pageYOffset;

            sections.forEach(sec => {
                const offset = sec.offsetTop - 150;
                const height = sec.offsetHeight;
                const id = sec.getAttribute('id');

                // if (currentScrollPos >= offset && currentScrollPos < offset + height) {
                //     setActiveSection(id);
                // }
            });

            const header = document.querySelector('.header');
            header.classList.toggle('sticky', currentScrollPos > 100);

            setMenuOpen(false);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    // Function to toggle dark mode
    const handleDarkModeToggle = () => {
        setIsDarkMode(!isDarkMode);
    
        document.body.classList.toggle('dark-mode');
    };

    return (
        <header className={`header ${activeSection}`}>
            <a href="#" className="logo">Port<span>folio</span></a>
            <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
                <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a>
                <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
                <a href="#services" className={activeSection === 'services' ? 'active' : ''}>Services</a>
                <a href="#portfolio" className={activeSection === 'portfolio' ? 'active' : ''}>Portfolio</a>
                <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
            </nav>
            {/* Dark mode toggle button */}
            <div className={`fa-solid ${isDarkMode ? 'fa-sun' : 'fa-moon'} ${isDarkMode ? 'active' : ''}`} id="darkmode-icon" onClick={handleDarkModeToggle}></div>
            <div className={`fa-solid fa-bars ${menuOpen ? 'bx-x' : ''}`} id="menu-icon" onClick={handleMenuClick}></div>
        </header>
    );
}
