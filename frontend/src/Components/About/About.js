import React from 'react'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <section className="section section3bg" id="about">
                        <div className="container">
                            <div className="justify-content-center row">
                                <div className="col-lg-7">
                                    <div className="text-center mb-5">
                                        <h2 className="">About Us</h2>
                                        <p className="text-white">
                                            We help Instagram users grow their followers, increase likes, and boost engagement effortlessly.
                                            Get real interactions and organic reach with our trusted platform.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row text-white">
                                {/* Left Column */}
                                <div className="col-lg-4">
                                    <h2 className="fw-normal line-height-1_4 mb-5">
                                        Elevate Your Instagram with <span className="fw-medium">Real Engagement</span>
                                    </h2>
                                    <p className="text-white mb-4">
                                        Our smart technology ensures genuine followers, real likes, and authentic comments from active Instagram users.
                                    </p>
                                    <p className="f-17 text-white">
                                        ✅ Instant & Gradual Growth
                                    </p>
                                    <p className="f-17 text-white">
                                        ✅ Targeted Audience Reach
                                    </p>
                                    <p className="f-17 text-white mb-4">
                                        ✅ 100% Safe & Secure 
                                    </p>
                                    <Link className="read-more f-18" to="/insta-followers">
                                        Learn More <span className="ml-2 right-icon f-24">→</span>
                                    </Link>
                                </div>

                                {/* Center Column - Growth Services */}
                                <div className="col-lg-4">
                                    <div className="card border-0">
                                        <div className="bg-soft-primary about-img rounded">
                                            <img src={img1} alt="Instagram Growth" className="img-fluid d-block mx-auto" />
                                        </div>
                                        <div className="p-3">
                                            <p className="text-uppercase text-muted mb-2 f-13">Followers Growth</p>
                                            <h4 className="f-18">Boost Your Followers</h4>
                                            <p className="text-muted">
                                                Gain real followers with our AI-driven system. No fake bots—only organic growth tailored to your profile!
                                            </p>
                                            <Link className="read-more" to="/insta-followers">
                                                Get Followers <span className="ml-2 right-icon">→</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column - Marketing Services */}
                                <div className="col-lg-4">
                                    <div className="card border-0">
                                        <div className="bg-soft-info about-img rounded">
                                            <img src={img2} alt="Instagram Engagement" className="img-fluid d-block mx-auto" />
                                        </div>
                                        <div className="mt-3 p-3">
                                            <p className="text-uppercase text-muted mb-2 f-13">Engagement Boost</p>
                                            <h4 className="f-18">More Likes & Comments</h4>
                                            <p className="text-muted">
                                                Improve engagement with likes & comments from real users. Increase your post visibility & reach.
                                            </p>
                                            <Link className="read-more" to="/insta-likes">
                                                Get Likes & Comments <span className="ml-2 right-icon">→</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
    </div>
  )
}

export default About
