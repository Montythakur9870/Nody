import React from 'react'
import card1 from '../../assets/card-01.svg'
import card2 from '../../assets/card-02.svg'
import card3 from '../../assets/card-03.svg'
import { Link } from 'react-router-dom'

const Services = () => {
    return (
        <div>
            <section className="section bg-light" id="services">
                <div className="container">
                    <div className="justify-content-center row">
                        <div className="col-lg-7">
                            <div className="text-center mb-5">
                                <h2 className="">Our Services</h2>
                                <p className="text-muted">
                                    Boost your Instagram presence effortlessly! Gain followers, likes, and engagement with our
                                    secure and easy-to-use platform.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {/* Service 1 */}
                        <div className="col-lg-4">
                            <div className="card service-box text-center p-4">
                                <div className="service-icon-bg mx-auto avatar-xxl p-4">
                                    <div className="service-box-icon justify-content-center">
                                        <img src={card1} alt="24/7 Support" className="img-fluid d-block" />
                                    </div>
                                </div>
                                <h4 className="service-title mt-4 mb-3 f-18">24/7 Support</h4>
                                <p className="service-subtitle mb-4 f-15">
                                    Get instant support for any issues while growing your Instagram. We’re always here to help!
                                </p>
                                <Link className="read-more" to="/insta-followers">More<span className="right-icon ml-2">→</span></Link>
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className="col-lg-4">
                            <div className="card service-box text-center p-4">
                                <div className="service-icon-bg mx-auto avatar-xxl p-4">
                                    <div className="service-box-icon justify-content-center">
                                        <img src={card2} alt="Secure & Safe" className="img-fluid d-block" />
                                    </div>
                                </div>
                                <h4 className="service-title mt-4 mb-3 f-18">Secure & Safe</h4>
                                <p className="service-subtitle mb-4 f-15">
                                    Our platform ensures safe and genuine followers, protecting your Instagram from risks.
                                </p>
                                <Link className="read-more" to="/insta-followers">More<span className="right-icon ml-2">→</span></Link>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="col-lg-4">
                            <div className="card service-box text-center p-4">
                                <div className="service-icon-bg mx-auto avatar-xxl p-4">
                                    <div className="service-box-icon justify-content-center">
                                        <img src={card3} alt="Privacy Protection" className="img-fluid d-block" />
                                    </div>
                                </div>
                                <h4 className="service-title mt-4 mb-3 f-18">Privacy Protection</h4>
                                <p className="service-subtitle mb-4 f-15">
                                    We never ask for passwords! Your Instagram privacy and data security are our top priorities.
                                </p>
                                <Link className="read-more" to="/insta-followers">More<span className="right-icon ml-2">→</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services
