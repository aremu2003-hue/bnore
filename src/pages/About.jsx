import './About.css'
import '../components/AboutSections.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Parallax from '../components/Parallax'
import aboutCopy from '../../copy/about.json'

function About() {
    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
    }, []);





    const stats = aboutCopy.hero.stats;

    return (
        <div className="about-page">
            <Header />

            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero-container">
                    <div className="about-hero-content">
                        <div className="about-hero-text" data-aos="fade-up">
                            <div className="about-badge">{aboutCopy.hero.badge}</div>
                            <h1 className="about-hero-title">
                                {aboutCopy.hero.title}<br />
                                <span className="highlight">{aboutCopy.hero.titleHighlight}</span>
                            </h1>
                            <p className="about-hero-description">
                                {aboutCopy.hero.description}
                            </p>
                            {/* <div className="about-stats" data-aos="fade-up" data-aos-delay="200">
                                {stats.map((stat, index) => (
                                    <div key={index} className="stat">
                                        <span className="stat-number">{stat.number}</span>
                                        <span className="stat-label">{stat.label}</span>
                                    </div>
                                ))}
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder Message Section */}
            <section className="founder-message-section">
                <div className="founder-message-container">
                    <div className="founder-message-content">
                        <div className="founder-image-wrapper" data-aos="fade-right">
                            <img src={aboutCopy.images.hero.main} alt="Founder with child" className="founder-image" />
                            <div className="founder-quote-box">
                                <span className="founder-credentials">{aboutCopy.founderMessage.credentials}</span>
                                <span className="founder-role">Founder & Owner</span>
                            </div>
                        </div>
                        <div className="founder-text" data-aos="fade-left">
                            <h2 className="founder-title">{aboutCopy.founderMessage.title}</h2>
                            <h3 className="founder-subtitle">{aboutCopy.founderMessage.subtitle}</h3>
                            <div className="founder-story">
                                {aboutCopy.founderMessage.content.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                            <div className="founder-signature">{aboutCopy.founderMessage.signature}</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="why-choose-us-section">
                <div className="why-choose-us-container">
                    <div className="why-choose-us-header" data-aos="fade-up">
                        <span className="why-choose-badge">{aboutCopy.whyChooseUs.badge}</span>
                        <h2 className="why-choose-title">{aboutCopy.whyChooseUs.title}</h2>
                        <p className="why-choose-description">{aboutCopy.whyChooseUs.description}</p>
                    </div>
                    <div className="why-choose-grid">
                        {aboutCopy.whyChooseUs.points.map((point, index) => (
                            <div key={index} className="why-choose-card" data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="why-choose-icon">{point.icon}</div>
                                <h3 className="why-choose-card-title">{point.title}</h3>
                                <p className="why-choose-card-description">{point.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Promise Section */}
            <section className="promise-section">
                <div className="promise-container">
                    <h2 className="promise-title" data-aos="fade-up">{aboutCopy.ourPromise.title}</h2>
                    <div className="promise-content">
                        {aboutCopy.ourPromise.content.map((paragraph, index) => (
                            <p key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section">
                <div className="team-container">
                    <div className="team-header" data-aos="fade-up">
                        <h2 className="team-title">{aboutCopy.team.title}</h2>
                        <p className="team-subtitle">{aboutCopy.team.subtitle}</p>
                    </div>
                    <div className="team-grid">
                        {aboutCopy.team.features.map((feature, index) => (
                            <div key={index} className="team-card" data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="team-image-wrapper">
                                    <img src={feature.image} alt={feature.title} className="team-image" />
                                </div>
                                <div className="team-content">
                                    <h3 className="team-card-title">{feature.title}</h3>
                                    <p className="team-card-description">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="about-cta-section">
                <div className="about-cta-container">
                    <div className="about-cta-content" data-aos="fade-up">
                        <h2 className="cta-title">{aboutCopy.cta.title}</h2>
                        <p className="cta-description">
                            {aboutCopy.cta.description}
                        </p>
                        <div className="cta-buttons">
                            <Link to="/scheduling" className="cta-btn primary">
                                {aboutCopy.cta.buttons.primary}
                            </Link>
                            <Link to="/contact" className="cta-btn secondary">
                                {aboutCopy.cta.buttons.secondary}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default About
