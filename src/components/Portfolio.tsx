import React from 'react';

const Portfolio: React.FC = () => {
    return (
        <section className="section" id="portfolio">
            <div className="container text-center">
                <p className="section-subtitle">What I Did ?</p>
                <h6 className="section-title mb-6">Portfolio</h6>
                <div className="row">
                    <div className="col-md-4">
                        <a href="#" className="portfolio-card">
                            <img src="/assets/imgs/priveegreen.png" className="portfolio-card-img" alt="Web Designing" />
                            <span className="portfolio-card-overlay">
                                <span className="portfolio-card-caption">
                                    <h4>Web Developement</h4>
                                    <p className="font-weight-normal">Category: Privee Green</p>
                                </span>
                            </span>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="#" className="portfolio-card">
                            <img src="/assets/imgs/reliable.png" className="portfolio-card-img" alt="Web Designing" />
                            <span className="portfolio-card-overlay">
                                <span className="portfolio-card-caption">
                                    <h4>Web Developement</h4>
                                    <p className="font-weight-normal">Category: Reliable Drs</p>
                                </span>
                            </span>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="#" className="portfolio-card">
                            <img src="/assets/imgs/vkud.png" className="portfolio-card-img" alt="Web Designing" />
                            <span className="portfolio-card-overlay">
                                <span className="portfolio-card-caption">
                                    <h4>Web Developement</h4>
                                    <p className="font-weight-normal">Category: VKUS</p>
                                </span>
                            </span>
                        </a>
                    </div>
                    {/* Repeat for other portfolio items */}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;