import './Federal.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Federal() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const whyMatterPoints = [
        {
            title: "Monthly Financial Support",
            desc: "SSI provides cash payments to help cover your child's basic needs."
        },
        {
            title: "Health Coverage",
            desc: "Medicaid covers medical care, equipment, and home health services."
        },
        {
            title: "Long-Term Security",
            desc: "Benefits can continue into adulthood if your child remains disabled."
        }
    ];

    const programs = [
        {
            title: "SSI (Supplemental Security Income) for Children",
            desc: "SSI provides monthly cash payments to families of children with disabilities. This money can help cover basic needs like food, clothing, and shelter.",
            qualify: [
                "Child must have a physical or mental condition that seriously limits activities",
                "The condition must have lasted or be expected to last at least 12 months or result in death",
                "Family income and resources must be within SSI limits"
            ],
            apply: "Call Social Security at 1-800-772-1213 or visit your local SSA office. We can help you gather medical records and complete the application.",
            contact: {
                phone: "1-800-772-1213",
                website: "Visit Website",
                url: "https://www.ssa.gov/benefits/disability/qualify.html#anchor3"
            }
        },
        {
            title: "Medicaid (Federal)",
            desc: "Federal Medicaid provides health coverage for children with disabilities. In Georgia, this includes GAPP and other waiver programs.",
            qualify: [
                "Child must meet disability criteria",
                "Family income requirements (varies by program)",
                "Some programs use the child's income only, not family income"
            ],
            apply: "Apply through Georgia Gateway or contact your local DFCS office. We'll walk you through the process and help with documentation.",
            contact: {
                phone: "1-877-423-4746",
                website: "Visit Website",
                url: "https://gateway.ga.gov/"
            }
        },
        {
            title: "Social Security Disability Benefits (Child's Benefits)",
            desc: "If a parent receives Social Security Disability or retirement benefits, their child with a disability may qualify for benefits based on the parent's record.",
            qualify: [
                "Parent must be receiving Social Security Disability or retirement benefits",
                "Child must be unmarried and under age 18 (or 19 if still in high school)",
                "Child with disabilities may qualify for benefits beyond age 18 if disability began before age 22"
            ],
            contact: {
                phone: "1-800-772-1213",
                website: "Visit Website",
                url: "https://www.ssa.gov/benefits/disability/family.html"
            }
        }
    ];

    const helpSteps = [
        "Gather and organize medical records",
        "Complete application forms accurately",
        "Write detailed statements about your child's limitations",
        "Follow up on pending applications",
        "Help with appeals if benefits are denied",
        "Connect you with disability advocates if needed"
    ];

    return (
        <div className="federal-page">
            <Header />

            {/* Hero Section */}
            <section className="federal-hero">
                <div className="federal-hero-container">
                    <div className="federal-hero-content">
                        <div className="federal-badge" data-aos="fade-up">FEDERAL RESOURCES</div>
                        <h1 className="federal-hero-title" data-aos="fade-up" data-aos-delay="100">
                            Federal Resources<br />
                            <span className="highlight">& Benefits</span>
                        </h1>
                        <p className="federal-hero-description" data-aos="fade-up" data-aos-delay="200">
                            Federal programs like SSI and Medicaid can provide critical financial support for your family. The application process can be daunting, but you don't have to do it alone—we're here to help every step of the way.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Matter Section */}
            <section className="federal-why-section">
                <div className="federal-container">
                    <div className="section-header" data-aos="fade-up">
                        <h2 className="section-title">Why Federal Benefits Matter</h2>
                        <p className="section-subtitle">
                            Federal programs can provide monthly income, health coverage, and access to services that make a real difference in your family's quality of life. Many families don't realize they qualify—or they give up after an initial denial. Don't let that be you.
                        </p>
                    </div>

                    <div className="why-grid">
                        {whyMatterPoints.map((point, index) => (
                            <div key={index} className="why-card" data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="why-icon">★</div>
                                <h3 className="why-title">{point.title}</h3>
                                <p className="why-desc">{point.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Programs Section */}
            <section className="federal-programs-section">
                <div className="federal-container">
                    <h2 className="section-title-center" data-aos="fade-up">Key Federal Programs</h2>

                    <div className="programs-grid">
                        {programs.map((program, index) => (
                            <div key={index} className="program-card" data-aos="fade-up" data-aos-delay={index * 100}>
                                <h3 className="program-title">{program.title}</h3>
                                <p className="program-desc">{program.desc}</p>

                                <div className="program-details">
                                    <div className="detail-section">
                                        <h4>Who Qualifies?</h4>
                                        <ul>
                                            {program.qualify.map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    {program.apply && (
                                        <div className="detail-section">
                                            <h4>How to Apply</h4>
                                            <p>{program.apply}</p>
                                        </div>
                                    )}
                                </div>

                                <div className="program-contact">
                                    <a href={`tel:${program.contact.phone.replace(/[^0-9]/g, '')}`} className="contact-link phone">
                                        📞 {program.contact.phone}
                                    </a>
                                    <a
                                        href={program.contact.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="contact-link website"
                                    >
                                        🌐 {program.contact.website}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Help Process Section */}
            <section className="federal-help-section">
                <div className="federal-container">
                    <div className="help-content-wrapper">
                        <div className="help-text" data-aos="fade-right">
                            <h2 className="help-title">We'll Help You Navigate the Application Process</h2>
                            <p className="help-desc">
                                SSI applications can be denied for minor technicalities—missing documentation, incomplete forms, or medical records that don't tell the full story. We've helped countless families successfully apply and appeal denials. Let us help you get it right the first time.
                            </p>
                        </div>
                        <div className="help-list-wrapper" data-aos="fade-left">
                            <ul className="help-list">
                                {helpSteps.map((step, index) => (
                                    <li key={index}>
                                        <span className="check-icon">✓</span>
                                        {step}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="federal-cta-section">
                <div className="federal-container">
                    <div className="cta-content" data-aos="zoom-in">
                        <h2 className="cta-title">Don't Leave Money on the Table</h2>
                        <p className="cta-description">
                            If your child qualifies for federal benefits, you deserve to receive them. Let us help you navigate the system and get the financial support your family needs.
                        </p>
                        <div className="cta-buttons">
                            <Link to="/scheduling" className="cta-btn primary">
                                SCHEDULE A CALL
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Federal
