import './State.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function State() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const whyUsPoints = [
        {
            title: "We Know the System",
            desc: "We've been through this process countless times and know exactly what works."
        },
        {
            title: "We'll Do the Legwork",
            desc: "From gathering documents to following up on applications, we handle the heavy lifting."
        },
        {
            title: "We're Your Advocate",
            desc: "If you hit roadblocks, we'll fight to get you the answers and support you deserve."
        }
    ];

    const programs = [
        {
            title: "Georgia Medicaid Waivers",
            desc: "Georgia offers several Medicaid waiver programs specifically for children with disabilities. These waivers help cover home and community-based services.",
            items: [
                { title: "NOW/COMP Waiver", desc: "For children with intellectual or developmental disabilities" },
                { title: "GAPP (Georgia Pediatric Program)", desc: "Private duty nursing for medically fragile children ages 5-21" },
                { title: "Katie Beckett Waiver", desc: "Allows children with disabilities to qualify for Medicaid based on their own income" }
            ],
            contact: {
                phone: "1-866-322-4260",
                website: "Visit Website",
                url: "https://medicaid.georgia.gov/"
            }
        },
        {
            title: "Georgia Department of Human Services (DHS)",
            desc: "DHS administers programs that provide financial assistance, food stamps (SNAP), and other support services for families.",
            items: [
                { title: "TANF (Temporary Assistance for Needy Families)", desc: "Cash assistance for families in need" },
                { title: "SNAP (Food Stamps)", desc: "Help with grocery costs" },
                { title: "Child Care Assistance", desc: "Subsidized child care for working families" }
            ],
            contact: {
                phone: "1-877-423-4746",
                website: "Visit Website",
                url: "https://dhs.georgia.gov/"
            }
        },
        {
            title: "Georgia Department of Behavioral Health",
            desc: "Provides mental health and substance abuse services, including support for children with behavioral health needs.",
            items: [],
            contact: {
                phone: "1-800-715-4225",
                website: "Visit Website",
                url: "https://dbhdd.georgia.gov/"
            }
        },
        {
            title: "Babies Can't Wait (Early Intervention)",
            desc: "For children birth to age 3 with developmental delays or disabilities. Provides therapy, family training, and support services.",
            items: [],
            contact: {
                phone: "1-888-651-8224",
                website: "Visit Website",
                url: "https://dph.georgia.gov/BCW"
            }
        }
    ];

    return (
        <div className="state-page">
            <Header />

            {/* Hero Section */}
            <section className="state-hero">
                <div className="state-hero-container">
                    <div className="state-hero-content">
                        <div className="state-badge" data-aos="fade-up">STATE RESOURCES</div>
                        <h1 className="state-hero-title" data-aos="fade-up" data-aos-delay="100">
                            Georgia State<br />
                            <span className="highlight">Resources</span>
                        </h1>
                        <p className="state-hero-description" data-aos="fade-up" data-aos-delay="200">
                            Navigating state programs can feel like solving a puzzle blindfolded. We're here to help you find the right resources and actually get the support your family needs—without the runaround.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Us Section */}
            <section className="state-why-us-section">
                <div className="state-container">
                    <div className="section-header" data-aos="fade-up">
                        <h2 className="section-title">We'll Help You Cut Through the Red Tape</h2>
                        <p className="section-subtitle">
                            State programs can be confusing—different eligibility rules, mountains of paperwork, long wait times. Our team has helped hundreds of families successfully apply for and receive these benefits. Let us guide you through it.
                        </p>
                    </div>

                    <div className="why-us-grid">
                        {whyUsPoints.map((point, index) => (
                            <div key={index} className="why-us-card" data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="card-icon">✓</div>
                                <h3 className="card-title">{point.title}</h3>
                                <p className="card-desc">{point.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Programs Section */}
            <section className="state-programs-section">
                <div className="state-container">
                    <h2 className="section-title-center" data-aos="fade-up">Key Georgia Programs for Families</h2>

                    <div className="programs-grid">
                        {programs.map((program, index) => (
                            <div key={index} className="program-card" data-aos="fade-up" data-aos-delay={index * 100}>
                                <h3 className="program-title">{program.title}</h3>
                                <p className="program-desc">{program.desc}</p>

                                {program.items.length > 0 && (
                                    <ul className="program-items">
                                        {program.items.map((item, idx) => (
                                            <li key={idx} className="program-item">
                                                <strong>{item.title}</strong>
                                                <span>{item.desc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

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

                    <div className="programs-note" data-aos="fade-up">
                        <p>These programs have different eligibility requirements, application processes, and wait times. Don't try to figure it all out alone—we're here to help.</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="state-cta-section">
                <div className="state-container">
                    <div className="cta-content" data-aos="zoom-in">
                        <h2 className="cta-title">Let Us Help You Get the Benefits You Deserve</h2>
                        <p className="cta-description">
                            You shouldn't have to become an expert in state programs just to get help for your child. That's our job. Let's talk about which programs might be right for your family.
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

export default State
