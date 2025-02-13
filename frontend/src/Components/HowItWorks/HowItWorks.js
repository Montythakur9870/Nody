import React from 'react'
import step1 from '../../assets/step-1.webp'
import step2 from '../../assets/step-2.webp'
import step3 from '../../assets/step-3.webp'
import floatingImage from '../../assets/img2.png'
import { Link } from 'react-router-dom'


const HowItWorks = () => {

    const steps = [
        {
            id: 1,
            title: "Enter Instagram Username",
            description: "We only need your Instagram username and password to deliver your free followers.",
            image: step1, // Replace with actual image path
            bgColor: "bg-blue-500",
        },
        {
            id: 2,
            title: "Confirm Account",
            description: "When your profile is loaded, make sure it's correct, then proceed to get your followers!",
            image: step2, // Replace with actual image path
            bgColor: "bg-pink-500",
        },
        {
            id: 3,
            title: "Enjoy Your Followers!",
            description: "Done! It'll take 60 seconds for our amazing Instagram followers to be sent your way.",
            image: step3, // Replace with actual image path
            bgColor: "bg-purple-500",
        },
    ];
    return (
        <div>
            <section className=" section py-12 bg-white text-center" id="steps">
                <div className="container">
                    <div className="justify-content-center row">
                        <div className="col-lg-7">
                            <div className="text-center mb-5">
                                <h2 className=""> Claim Your Free Instagram Followers In 3 Easy Steps.</h2>

                            </div>
                        </div>
                    </div>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-10 row">
                        {steps.map((step) => (
                            <div key={step.id} className="border col-md-4 col-12 rounded-lg p-6 text-center">
                                <div className={`w-10 h-10 flex items-center justify-center text-white text-lg font-bold rounded-full ${step.bgColor} mx-auto`}>
                                    {step.id}
                                </div>
                                <img src={step.image} alt={step.title} className="w-24 h-24 mx-auto my-4" />
                                <h3 className="text-xl font-semibold">{step.title}</h3>
                                <p className="text-gray-600 mt-2">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="hero">
                        <div className="container">
                            <h1>
                                Login and Get Unlimited <span className="highlight">Free</span> Instagram Followers
                            </h1>
                            <p>
                                It’s all about increase free Followers. This Ins Followers App offers multiple ways
                                for you to swell the size of your follower base. Sharing Ins Followers with your friends, opening
                                the lucky draw, finishing the daily tasks, and the unlimited growth of free insta followers is
                                just a few clicks away.
                            </p>

                            {/* Floating Image */}
                            <div className="floating-elements">
                                <img src={floatingImage} alt="Instagram Engagement Elements" />
                            </div>

                            {/* Buttons */}
                            <div className="buttons">
                                <Link to="/insta-followers" className="btn btn-green">👤 Get Free Followers</Link>
                                <Link href="/insta-likes" className="btn btn-red">🛒 Get Free Likes</Link>
                            </div>
                        </div>
                    </section>

        </div>
    )
}

export default HowItWorks
