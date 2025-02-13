import React from 'react'
import heroImage from '../../assets/instant-img.svg'
import { Link } from 'react-router-dom'
const Features = () => {
  return (
    <div>
      <section className="container py-5" id='features'>
                        <div className="row align-items-center">
                            <div className="col-lg-6 text-center text-lg-start">
                                <img src={heroImage} alt="Instagram Growth" className="img-fluid" />
                            </div>
                            <div className="col-lg-6 text-center text-lg-start">
                                <h2>
                                    Download Ins Followers to Get Benefits from Instagram Followers
                                    <span className="text-success"> Free</span>
                                </h2>
                                <p>
                                    A large number of <strong>Instagram followers free</strong> is more
                                    beneficial than you can imagine. A powerful account’s posts are more
                                    favored by the Instagram algorithm. Moreover, an account with a huge
                                    follower base is naturally prone to attract followers. Please feel no
                                    hesitation to use this 100% free App of getinsfollowers right now!
                                </p>
                                <div className="d-flex justify-content-center justify-content-lg-start gap-3 mt-3">
                                    <Link to='/insta-followers' className="btn btn-primary btn-lg d-flex align-items-center">
                                        <i className="bi bi-person-plus me-2"></i> Get Free Followers
                                    </Link>
                                    <Link to="/insta-likes" className="btn btn-danger btn-lg d-flex align-items-center">
                                        <i className="bi bi-cart me-2"></i> Get Free Likes
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
    </div>
  )
}

export default Features
