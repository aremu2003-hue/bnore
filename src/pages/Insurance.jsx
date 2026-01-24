import './Insurance.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import insuranceCopy from '../../copy/insurance.json'

function Insurance() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="insurance-page">
            <Header />

            {/* Hero Section */}
            <section className="insurance-hero">
                <div className="insurance-hero-container">
                    <div className="insurance-hero-content">
                        <div className="insurance-hero-text" data-aos="fade-up">
                            <div className="insurance-badge">{insuranceCopy.hero.badge}</div>
                            <h1 className="insurance-hero-title">
                                {insuranceCopy.hero.title}<br />
                                <span className="highlight">{insuranceCopy.hero.titleHighlight}</span>
                            </h1>
                            <p className="insurance-hero-description">
                                {insuranceCopy.hero.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Honest Talk Section */}
            <section className="honest-talk-section">
                <div className="honest-talk-container">
                    <div className="honest-talk-content" data-aos="fade-up">
                        <h2 className="honest-talk-title">{insuranceCopy.honestTalk.title}</h2>
                        {insuranceCopy.honestTalk.paragraphs.map((paragraph, index) => (
                            <p key={index} className="honest-talk-paragraph">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </section>

            {/* Insurance Programs Section */}
            <section className="insurance-programs-section">
                <div className="insurance-programs-container">
                    <div className="programs-header" data-aos="fade-up">
                        <h2 className="programs-title">{insuranceCopy.insurancePrograms.title}</h2>
                        <p className="programs-subtitle">{insuranceCopy.insurancePrograms.subtitle}</p>
                    </div>

                    <div className="programs-grid">
                        {insuranceCopy.insurancePrograms.programs.map((program, index) => (
                            <div
                                key={program.id}
                                className="program-card"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="program-header">
                                    <h3 className="program-name">{program.name}</h3>
                                    <p className="program-full-name">{program.fullName}</p>
                                </div>
                                <p className="program-description">{program.description}</p>
                                <ul className="program-features">
                                    {program.features.map((feature, idx) => (
                                        <li key={idx} className="program-feature">
                                            <span className="feature-icon">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How We Help Section */}
            <section className="how-we-help-section">
                <div className="how-we-help-container">
                    <div className="help-header" data-aos="fade-up">
                        <h2 className="help-title">{insuranceCopy.howWeHelp.title}</h2>
                        <p className="help-subtitle">{insuranceCopy.howWeHelp.subtitle}</p>
                    </div>

                    <div className="help-steps">
                        {insuranceCopy.howWeHelp.steps.map((step, index) => (
                            <div
                                key={index}
                                className="help-step"
                                data-aos="fade-right"
                                data-aos-delay={index * 100}
                            >
                                <div className="step-number">{step.number}</div>
                                <div className="step-content">
                                    <h3 className="step-title">{step.title}</h3>
                                    <p className="step-description">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="insurance-faq-section">
                <div className="insurance-faq-container">
                    <h2 className="faq-title" data-aos="fade-up">{insuranceCopy.faq.title}</h2>

                    <div className="faq-list">
                        {insuranceCopy.faq.questions.map((item, index) => (
                            <div
                                key={index}
                                className="faq-item"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <h3 className="faq-question">{item.question}</h3>
                                <p className="faq-answer">{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="insurance-cta-section">
                <div className="insurance-cta-container">
                    <div className="insurance-cta-content" data-aos="zoom-in">
                        <h2 className="cta-title">{insuranceCopy.cta.title}</h2>
                        <p className="cta-description">{insuranceCopy.cta.description}</p>

                        <div className="cta-buttons">
                            <a
                                href={`tel:${insuranceCopy.cta.primaryButton.replace(/[^0-9]/g, '')}`}
                                className="cta-btn primary"
                            >
                                {insuranceCopy.cta.primaryButton}
                            </a>
                            <Link to="/scheduling" className="cta-btn secondary">
                                {insuranceCopy.cta.secondaryButton}
                            </Link>
                        </div>

                        <p className="cta-footer">{insuranceCopy.cta.footer}</p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Insurance
