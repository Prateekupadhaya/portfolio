import React from 'react';

const Testimonials: React.FC = () => {
    return (
        <section className="section" id="testmonial">
            <div className="container text-center">
                <p className="section-subtitle">What Think Client About Me ?</p>
                <h6 className="section-title mb-6">Testmonial</h6>
                <div className="row">
                    <div className="col-md-6">
                        <div className="testimonial-card">
                            <div className="testimonial-card-img-holder">
                                <img src="assets/imgs/avatar2.jpg" className="testimonial-card-img" alt="Emily Reb" />
                            </div>
                            <div className="testimonial-card-body">
                                <p className="testimonial-card-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit. Eaque doloribus autem aperiam earum nostrum omnis blanditiis corporis perspiciatis
                                    adipisci nihil.</p>
                                <h6 className="testimonial-card-title">Emily Reb</h6>
                            </div>
                        </div>
                    </div>
                    {/* Repeat for other testimonials */}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;