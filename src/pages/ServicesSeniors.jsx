import '../pages/Services.css'
import '../components/Services.css'
import './ServicesSeniors.css'
import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import servicesSeniorsCopy from '../../copy/services-seniors.json'
import homeCopy from '../../copy/home.json'

function ServicesSeniors() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="services-page">
            <Header />

            {/* Hero Section */}
            <section className="services-hero">
                <div className="services-hero-container">
                    <div className="services-hero-content">
                        <div className="services-hero-text" data-aos="fade-up">
                            <div className="services-badge1">{servicesSeniorsCopy.hero.badge}</div>
                            <h1 className="services-hero-title">
                                {servicesSeniorsCopy.hero.title}<br />
                                <span className="highlight">{servicesSeniorsCopy.hero.titleHighlight}</span>
                            </h1>
                            <p className="services-hero-description">
                                {servicesSeniorsCopy.hero.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-details">
                <div className="services-container">
                    <div className="service-content">

                        {/* Senior Services Cards Section First */}
                        <div className="services-list-section" data-aos="fade-up">
                            <h2 className="section-title text-center" style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Senior Services</h2>
                            <div className="services-grid">
                                {servicesSeniorsCopy.servicesList.map((service, index) => (
                                    <div
                                        key={index}
                                        className="service-card"
                                        data-aos="fade-up"
                                        data-aos-delay={`${(index + 1) * 100}`}
                                    >
                                        <img className="service-img" src={service.image} alt={service.title} />

                                        <div className="service-content_1">
                                            <div className="service-info">
                                                <div className="service-name">
                                                    <h3>{service.title}</h3>
                                                    <div className="verified-badge">{homeCopy.images.services.verifiedIcon}</div>
                                                </div>
                                                <p className="service-desc">{service.description}</p>
                                            </div>

                                            <div className="service-cta">
                                                <a href="tel:7706746448" className="service-btn">
                                                    <span>Call for Details</span>
                                                    <i className="btn-icon">→</i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Packages Section Second */}
                        <div className="packages-section" data-aos="fade-up" style={{ marginTop: '6rem' }}>
                            <h2 className="section-title text-center" style={{ textAlign: 'center', marginBottom: '3rem' }}>Care Packages</h2>

                            <div className="packages-grid">
                                {servicesSeniorsCopy.packages.map((pkg, index) => (
                                    <div key={index} className={`package-card ${pkg.name === 'Signature' ? 'featured' : ''}`}>
                                        {pkg.name === 'Signature' && <div className="popular-badge">Most Popular</div>}
                                        <h3>{pkg.name}</h3>
                                        <p className="package-subtitle">{pkg.subtitle}</p>
                                        <p className="package-description">{pkg.description}</p>
                                        <ul className="package-features">
                                            {pkg.features.map((feature, i) => (
                                                <li key={i}>
                                                    <span className="check-icon">✓</span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <a href="tel:7706746448" className="package-cta">
                                            Call for Pricing
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="service-cta1" data-aos="fade-up" data-aos-delay="200" style={{ marginTop: '4rem' }}>
                            <h3 className="cta-title">{servicesSeniorsCopy.cta.title}</h3>
                            <p className="cta-description">{servicesSeniorsCopy.cta.description}</p>
                            <a href="tel:7706746448" className="cta-button">{servicesSeniorsCopy.cta.button}</a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default ServicesSeniors
