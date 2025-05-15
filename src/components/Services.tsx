import React from 'react';

const Services: React.FC = () => {
    return (
        <section className="section" id="service">
            <div className="container text-center">
                <p className="section-subtitle">What I Do ?</p>
                <h6 className="section-title mb-6">Services</h6>
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div className="service-card">
                            <div className="body">
                                <img src="assets/imgs/cloud.svg" className="icon" alt="Cloud Services" />
                                <h6 className="title">AWS & Serverless</h6>
                                <p className="subtitle">
                                    Build scalable, cost-effective backends using AWS Lambda, API Gateway, DynamoDB, and Serverless Framework.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <div className="service-card">
                            <div className="body">
                                <img src="assets/imgs/code.svg" className="icon" alt="Full Stack" />
                                <h6 className="title">Full Stack Development</h6>
                                <p className="subtitle">
                                    Develop robust web applications using React, Node.js, Express, and modern databases like MongoDB and PostgreSQL.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <div className="service-card">
                            <div className="body">
                                <img src="assets/imgs/devops.svg" className="icon" alt="DevOps" />
                                <h6 className="title">CI/CD & DevOps</h6>
                                <p className="subtitle">
                                    Automate deployment pipelines using Jenkins, GitHub Actions, and Kubernetes for smooth, scalable operations.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <div className="service-card">
                            <div className="body">
                                <img src="assets/imgs/design.svg" className="icon" alt="UI Lead" />
                                <h6 className="title">UI/UX Engineering</h6>
                                <p className="subtitle">
                                    Lead front-end architecture and UI/UX design with a focus on performance, responsiveness, and accessibility.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
