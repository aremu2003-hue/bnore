import './County.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function County() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const counties = [
        {
            name: "Fulton County",
            resources: [
                {
                    name: "Fulton County Board of Health",
                    desc: "Health services, immunizations, WIC program",
                    phone: "(404) 613-1500",
                    url: "https://www.fultoncountyga.gov/services/health-and-wellness"
                },
                {
                    name: "Fulton County DFCS",
                    desc: "Medicaid, food stamps, child services",
                    phone: "(404) 730-5200",
                    url: "https://dfcs.georgia.gov/fulton-county-dfcs-office"
                },
                {
                    name: "Fulton County Special Needs Registry",
                    desc: "Emergency preparedness for special needs families",
                    phone: "(404) 730-8000",
                    url: "https://www.fultoncountyga.gov/"
                }
            ]
        },
        {
            name: "DeKalb County",
            resources: [
                {
                    name: "DeKalb County Board of Health",
                    desc: "Health services, immunizations, family planning",
                    phone: "(770) 621-6300",
                    url: "https://www.dekalbhealth.net/"
                },
                {
                    name: "DeKalb County DFCS",
                    desc: "Medicaid, SNAP benefits, child welfare",
                    phone: "(404) 508-7444",
                    url: "https://dfcs.georgia.gov/dekalb-county-dfcs-office"
                },
                {
                    name: "DeKalb Community Service Board",
                    desc: "Mental health and developmental disability services",
                    phone: "(404) 294-3836",
                    url: "https://www.dekcsb.org/"
                }
            ]
        },
        {
            name: "Cobb County",
            resources: [
                {
                    name: "Cobb & Douglas Public Health",
                    desc: "Health services, WIC, immunizations",
                    phone: "(770) 514-2300",
                    url: "https://www.cobbanddouglaspublichealth.com/"
                },
                {
                    name: "Cobb County DFCS",
                    desc: "Medicaid, food assistance, child protective services",
                    phone: "(770) 528-5700",
                    url: "https://dfcs.georgia.gov/cobb-county-dfcs-office"
                },
                {
                    name: "Cobb & Douglas Community Services Board",
                    desc: "Mental health and developmental disability support",
                    phone: "(770) 429-5000",
                    url: "https://www.cobbcsb.com/"
                }
            ]
        },
        {
            name: "Gwinnett County",
            resources: [
                {
                    name: "Gwinnett, Newton & Rockdale Health",
                    desc: "Public health services, immunizations, WIC",
                    phone: "(770) 339-4260",
                    url: "https://gnrhealth.com/"
                },
                {
                    name: "Gwinnett County DFCS",
                    desc: "Medicaid, SNAP, TANF, child services",
                    phone: "(770) 822-8500",
                    url: "https://dfcs.georgia.gov/gwinnett-county-dfcs-office"
                },
                {
                    name: "Gwinnett Coalition for Health & Human Services",
                    desc: "Resource navigation and family support",
                    phone: "(770) 623-6840",
                    url: "https://www.gwinnettcoalition.org/"
                }
            ]
        },
        {
            name: "Clayton County",
            resources: [
                {
                    name: "Clayton County Board of Health",
                    desc: "Health services, immunizations, family planning",
                    phone: "(770) 603-4500",
                    url: "https://www.claytoncountyga.gov/government/departments-g-m/health-department"
                },
                {
                    name: "Clayton County DFCS",
                    desc: "Medicaid, food stamps, child welfare services",
                    phone: "(770) 603-5000",
                    url: "https://dfcs.georgia.gov/clayton-county-dfcs-office"
                }
            ]
        },
        {
            name: "Henry County",
            resources: [
                {
                    name: "Henry County Board of Health",
                    desc: "Public health services, WIC, immunizations",
                    phone: "(770) 288-8000",
                    url: "https://www.henrycountyga.com/departments/health"
                },
                {
                    name: "Henry County DFCS",
                    desc: "Medicaid, SNAP benefits, child protective services",
                    phone: "(770) 288-6200",
                    url: "https://dfcs.georgia.gov/henry-county-dfcs-office"
                }
            ]
        }
    ];

    return (
        <div className="county-page">
            <Header />

            {/* Hero Section */}
            <section className="county-hero">
                <div className="county-hero-container">
                    <div className="county-hero-content">
                        <div className="county-badge" data-aos="fade-up">COUNTY RESOURCES</div>
                        <h1 className="county-hero-title" data-aos="fade-up" data-aos-delay="100">
                            Atlanta Metro County<br />
                            <span className="highlight">Resources for Families</span>
                        </h1>
                        <p className="county-hero-description" data-aos="fade-up" data-aos-delay="200">
                            You shouldn't have to Google "where do I get help" at 2am. Here's everything in one place. These are the county-level resources available to families in the Greater Atlanta area.
                        </p>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="county-intro-section">
                <div className="county-container">
                    <div className="county-intro-content" data-aos="fade-up">
                        <h2 className="section-title">We Know This List is Overwhelming</h2>
                        <p className="intro-text">
                            Here's the truth: Most families look at this list and feel exhausted before they even start calling. You're already managing your child's care, appointments, medications, and everything else—now you're supposed to navigate a maze of county offices?
                        </p>
                        <div className="intro-highlight">
                            <p>
                                <strong>That's where we come in.</strong> When you work with B'Nore Care, we help you connect with these resources. We know which offices actually answer their phones, which forms you need, and how to get things approved faster.
                            </p>
                            <p>
                                You don't have to do this alone. Call us at <a href="tel:7706746448" className="phone-link">(770) 674-6448</a> and we'll walk you through it.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Directory Section */}
            <section className="county-directory-section">
                <div className="county-container">
                    <div className="directory-grid">
                        {counties.map((county, index) => (
                            <div key={index} className="county-card" data-aos="fade-up" data-aos-delay={index * 100}>
                                <h2 className="county-name">{county.name}</h2>
                                <div className="resources-list">
                                    {county.resources.map((resource, idx) => (
                                        <div key={idx} className="resource-item">
                                            <h3 className="resource-name">{resource.name}</h3>
                                            <p className="resource-desc">{resource.desc}</p>
                                            <div className="resource-contact">
                                                <a href={`tel:${resource.phone.replace(/[^0-9]/g, '')}`} className="resource-phone">
                                                    📞 {resource.phone}
                                                </a>
                                                <a
                                                    href={resource.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="resource-web"
                                                >
                                                    🌐 Visit Website
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Info Section */}
            <section className="county-info-section">
                <div className="county-container">
                    <div className="info-grid">
                        <div className="info-card" data-aos="fade-right">
                            <h3 className="info-title">What You Need to Know Before You Call</h3>
                            <h4 className="info-subtitle">Have This Information Ready:</h4>
                            <ul className="info-list">
                                <li>Your child's Social Security number</li>
                                <li>Proof of income (pay stubs, tax returns)</li>
                                <li>Proof of residency (utility bill, lease)</li>
                                <li>Medical records or diagnosis documentation</li>
                            </ul>
                        </div>
                        <div className="info-card" data-aos="fade-left">
                            <h3 className="info-title">Tips for Faster Service</h3>
                            <ul className="info-list">
                                <li>Call early in the morning (8-9am)</li>
                                <li>Avoid Mondays and lunch hours</li>
                                <li>Write down the name of who you speak with</li>
                                <li>Ask for confirmation numbers or case numbers</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="county-cta-section">
                <div className="county-container">
                    <div className="cta-content" data-aos="zoom-in">
                        <h2 className="cta-title">Need Help Navigating These Resources?</h2>
                        <p className="cta-description">
                            We help families connect with county resources every day. Let us make this easier for you.
                        </p>
                        <div className="cta-buttons">
                            <a href="tel:7706746448" className="cta-btn primary">
                                CALL (770) 674-6448
                            </a>
                            <Link to="/scheduling" className="cta-btn secondary">
                                SCHEDULE A CALL
                            </Link>
                        </div>
                        <p className="cta-footer">Free consultation • No obligation • We'll help you get connected</p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default County
