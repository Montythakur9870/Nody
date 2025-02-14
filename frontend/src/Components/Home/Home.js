import React from 'react'
import homebanner from "../../assets/homebanner.png"
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <section class="hero-1-bg bg-light homebannerbg" id="home">
                <div class="container">
                    <div class="align-items-center justify-content-center row">
                        <div class="col-lg-6">
                            <h1
                                className="display-4 fw-medium mb-4"
                                style={{
                                    background: "linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Hello,
                            </h1>
                            <h1 class="hero-1-title fw-normal text-dark mb-4">Grow Your Instagram Instantly!</h1>
                            <p class="text-muted mb-4 pb-3">Increase your Instagram followers, likes, and comments effortlessly. Get real engagement and boost your profile visibility today.</p>
                            <Link class="btn btn-primary" to="/insta-followers">Get Free Followers <span class="ml-2 right-icon">→</span></Link>
                        </div>
                        <div class="col-md-10 col-lg-6">
                            <div class=" mt-5 mt-lg-0"><img src={homebanner} alt=""
                                class="img-fluid d-block mx-auto" /></div>

                        </div>
                        <div className="buttons mt-5 col-md-12 col-12">
                            <Link to="/insta-followers" className="btn btn-green">👤 Get Free Followers</Link>
                            <Link to="/insta-likes" className="btn btn-red">🛒 Get Free Likes</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
