import React from 'react';

const About: React.FC = () => {
    return (
        <section className="section pt-0" id="about">
            <div className="container text-center">
                <div className="about">
                    <div className="about-img-holder">
                        <img src="/assets/imgs/man.png" className="about-img" alt="About Me" />
                    </div>
                    <div className="about-caption">
                        <p className="section-subtitle">Who Am I ?</p>
                        <h2 className="section-title mb-3">About Me</h2>
                        <p>
                        Result-driven Full Stack Developer and UI Lead with over four years of experience in designing, developing, and supporting scalable software solutions. Skilled in AWS, Serverless Framework, RESTful APIs, and databases (SQL, PostgreSQL, MongoDB). Proficient in CI/CD with Jenkins and Kubernetes, creating design documentation, and leading POCs. Strong in client communication, automation testing, and mentoring.
                            <br />
                        </p>
                        <a 
                            href="assets/resume/Resume_5.pdf" 
                            download 
                            className="btn-rounded btn btn-outline-primary mt-4"
                            >
                            Download CV
                            </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;