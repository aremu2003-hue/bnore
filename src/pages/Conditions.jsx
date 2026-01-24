import './Conditions.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import conditionsCopy from '../../copy/conditions.json'

function Conditions() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="conditions-page">
            <Header />

            {/* Hero Section */}
            <section className="conditions-hero">
                <div className="conditions-hero-container">
                    <div className="conditions-hero-content">
                        <div className="conditions-hero-text" data-aos="fade-up">
                            <div className="conditions-badge">{conditionsCopy.hero.badge}</div>
                            <h1 className="conditions-hero-title">
                                {conditionsCopy.hero.title}
                                <span className="highlight">{conditionsCopy.hero.titleHighlight}</span>
                            </h1>
                            <p className="conditions-hero-description">
                                {conditionsCopy.hero.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="conditions-intro">
                <div className="conditions-intro-container">
                    <div className="intro-content" data-aos="fade-up">
                        <p className="intro-text">{conditionsCopy.intro.text}</p>
                        <p className="intro-emphasis">{conditionsCopy.intro.emphasis}</p>
                    </div>
                </div>
            </section>

            {/* Conditions List */}
            <section className="conditions-list">
                <div className="conditions-list-container">
                    {conditionsCopy.conditions.map((condition, index) => (
                        <div
                            key={condition.id}
                            className={`condition-card ${index % 2 === 0 ? 'left' : 'right'}`}
                            data-aos="fade-up"
                            data-aos-delay={index * 50}
                        >
                            <div className="condition-content">
                                <h2 className="condition-title">{condition.title}</h2>
                                <p className="condition-subtitle">{condition.subtitle}</p>
                                <p className="condition-description">{condition.description}</p>

                                <div className="what-we-get">
                                    <h3 className="section-label">What We Get:</h3>
                                    <p className="what-we-get-text">{condition.whatWeGet}</p>
                                </div>

                                <div className="how-we-help">
                                    <h3 className="section-label">How We Help:</h3>
                                    <ul className="help-list">
                                        {condition.howWeHelp.map((item, idx) => (
                                            <li key={idx} className="help-item">
                                                <span className="help-icon">✓</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Not Listed Section */}
            <section className="not-listed-section">
                <div className="not-listed-container">
                    <div className="not-listed-content" data-aos="fade-up">
                        <h2 className="not-listed-title">{conditionsCopy.notListed.title}</h2>
                        <p className="not-listed-description">{conditionsCopy.notListed.description}</p>
                        <p className="not-listed-subtitle">{conditionsCopy.notListed.subtitle}</p>

                        <div className="questions-grid">
                            {conditionsCopy.notListed.questions.map((question, index) => (
                                <div key={index} className="question-card" data-aos="fade-up" data-aos-delay={index * 100}>
                                    <div className="question-icon">?</div>
                                    <p className="question-text">{question}</p>
                                </div>
                            ))}
                        </div>

                        <p className="not-listed-conclusion">{conditionsCopy.notListed.conclusion}</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="conditions-cta">
                <div className="conditions-cta-container">
                    <div className="conditions-cta-content" data-aos="zoom-in">
                        <div className="cta-buttons">
                            <a href={`tel:${conditionsCopy.cta.primaryButton.replace(/[^0-9]/g, '')}`} className="cta-btn primary">
                                {conditionsCopy.cta.primaryButton}
                            </a>
                            <Link to="/scheduling" className="cta-btn secondary">
                                {conditionsCopy.cta.secondaryButton}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Conditions
