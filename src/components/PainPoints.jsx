import './PainPoints.css'
import homeCopy from '../../copy/home.json'

function PainPoints() {
    const { painPoints } = homeCopy;

    return (
        <section className="pain-points-section" id="pain-points">
            <div className="pain-points-container">
                <div className="pain-points-content">
                    <div className="pain-points-top">
                        <div className="pain-points-badge" data-aos="fade-up">
                            {painPoints.badge}
                        </div>
                        <h2 className="pain-points-title" data-aos="fade-up" data-aos-delay="100">
                            {painPoints.title} <span className="title-highlight">{painPoints.titleHighlight}</span>
                        </h2>
                        <p className="pain-points-description" data-aos="fade-up" data-aos-delay="200">
                            {painPoints.description}
                        </p>
                    </div>

                    <div className="pain-points-main">
                        <div className="pain-points-image-wrapper" data-aos="fade-right">
                            <img
                                src={painPoints.mainImage}
                                alt="Specialized pediatric care"
                                className="pain-points-main-image"
                            />
                        </div>

                        <div className="pain-points-info">
                            <div className="pain-points-question-box" data-aos="fade-up">
                                <div className="pain-points-question-box-inner">
                                    <h3 className="pain-points-question">{painPoints.question}</h3>
                                    <p className="pain-points-question-detail">{painPoints.questionDetail}</p>
                                </div>
                            </div>

                            <div className="pain-points-grid">
                                {painPoints.points.map((point, index) => (
                                    <div
                                        key={index}
                                        className="pain-point-item"
                                        data-aos="fade-up"
                                        data-aos-delay={(index + 1) * 100}
                                    >
                                        <div className="pain-point-item-inner">
                                            <div className="pain-point-header">
                                                <span className="pain-point-icon">✓</span>
                                                <h4 className="pain-point-item-title">{point.title}</h4>
                                            </div>
                                            <p className="pain-point-item-description">{point.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="pain-points-cta" data-aos="zoom-in">
                        <p className="pain-points-cta-text">{painPoints.ctaText}</p>
                        <a href={`tel:${painPoints.ctaButton.replace(/[^0-9]/g, '')}`} className="pain-points-cta-btn">
                            {painPoints.ctaButton}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PainPoints
