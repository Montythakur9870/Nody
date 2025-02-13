import React from 'react'
import Home from '../Home/Home'
import HowItWorks from '../HowItWorks/HowItWorks'
import About from '../About/About'
import Services from '../Services/Services'
import Features from '../Features/Features'

function HomePageMiddle() {


    return (
        <div>
            <div>
                <div id="root">
                    {/* <Header /> */}
                    <Home />
                    <About />
                    <HowItWorks />
                    <Services />
                    <Features />
                    {/* <Footer /> */}
                </div >
            </div >
        </div>
    )
}

export default HomePageMiddle
