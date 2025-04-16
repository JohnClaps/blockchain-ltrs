import React from 'react';
import './wp-style.css';
import Image from "next/image";
import { FaGithub, FaXTwitter,FaFacebook,FaLinkedin } from 'react-icons/fa6';
import Navbar from './navbar';
const WelcomePage: React.FC = () => {
  return (
    <div className="welcome-container">
      {/* Header */}
      <Navbar />
      <header className="header">
        <div className="logo-container">
        </div> 
        <nav className="navigation">
          <a href="#features" className="nav-link">Features</a>
          <a href="#how-it-works" className="nav-link">How It Works</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h2>Easy Student Loan Management</h2>
          <p className="hero-text">
            Our blockchain-powered platform brings transparency and automation to 
            student loan tracking and repayment for students, lenders, and institutions.
          </p>
          <div className="cta-buttons">
            <a href="/register" className="cta-primary">Get Started</a>
            <a href="#demo" className="cta-secondary">See Demo</a>
          </div>
        </div>
        <div className="hero-image">
          {/* Placeholder for an illustration */}
          <div className="blockchain-visual">
            <Image src="/money-2696231_640.jpg" height={1000} width={1000} alt="Visual" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <h3>Key Features</h3>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔗</div>
            <h4>Blockchain Transparency</h4>
            <p>All transactions recorded immutably on the blockchain for complete auditability.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⏱️</div>
            <h4>Automated Repayments</h4>
            <p>Smart contracts execute payments automatically based on predefined rules.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h4>Real-time Analytics</h4>
            <p>Comprehensive dashboards for all stakeholders with up-to-date information.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works">
        <h3>How Our System Works</h3>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <p>Students connect their wallet and view loan details</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <p>Smart contracts manage repayment schedules</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <p>Lenders monitor portfolio performance</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <p>Institutions track alumni repayment trends</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h5>Student-LTRS</h5>
            <div>
              <Image className="rounded-full" src="/logo.jpg" height={100} width={100} alt="logo" style={{
                objectFit:'cover',
              }}/>
            </div>
            <p> 2025 Student-LTRS. All rights reserved.</p> 
          </div>
          <div className="footer-section">
            <h5>Quick Links</h5>
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
            <a href="/privacy">Privacy Policy</a>
          </div>
          <div className="footer-section">
            <h5>Connect</h5>
            <div className="social-links">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" >
                <FaFacebook className="hover:text-blue transition-colors duration-200" size={25}/>
              </a>
              <a href="https://www.linkedin.com" target='_blank' rel='noopener noreferrer'>
              <FaLinkedin className="hover:text-blue transition-colors duration-200" size={25}/>
              </a>
              <a href="https://www.github.com" target='_blank' rel='noopener noreferrer'>
              <FaGithub className='hover:text-blue transition-colors duration-200' size={25}/>
              </a>
              <a href='https://www.x.com' target='_blank' rel='noopener noreferrer'>
              <FaXTwitter className='hover:text-blue transition-colors duration-200' size={25}/>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WelcomePage;