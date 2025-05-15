import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className="container">
            <footer className="footer">
                <div className="social-links text-right m-auto ml-sm-auto">
                    <a href="javascript:void(0)" className="link"><i className="ti-facebook"></i></a>
                    <a href="javascript:void(0)" className="link"><i className="ti-twitter-alt"></i></a>
                    <a href="javascript:void(0)" className="link"><i className="ti-google"></i></a>
                    <a href="javascript:void(0)" className="link"><i className="ti-pinterest-alt"></i></a>
                    <a href="javascript:void(0)" className="link"><i className="ti-instagram"></i></a>
                    <a href="javascript:void(0)" className="link"><i className="ti-rss"></i></a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;