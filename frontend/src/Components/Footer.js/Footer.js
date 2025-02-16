import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="mb-5"><a href="/">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAy4AAADICAMAAAA5mEWbAAAAe1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8uZL9FAAAAKHRSTlMAAS8FoMPxvRCw+yZy988KX7cg6eORqUTcNchqTVY9eoGJmNYUGmPAMXX29QAAGA5JREFUeNrtnduiorgShhNxgQqKoOIBdHmW93/CfTG9p2d1W0lVUuFk6nam1RXykb+OEcKbN2/tWpCfludNkS126zCc1bMwXO8WWbE5L0954JfHm7dfoIyWl2w3q2Gb7bLLc+Sh8fbhdq8uX/MaZ/OvS3X3S+btMy3dbm411W6bbeqXztunHStlNq/NbJ6V/pDx9kGsPKNZbWOzyBPj7SNMVlM7Vn4RM62kX0xvw7bHeV1z2fr88Avqbbi2H89qTpsVe7+o3gaqwqKa3yKvybwNEZZF7cYWHhhvA7PtoXZnh61fYG/DsVFWu7Vo5BfZ2zDsfq3d29UnYrwNwWkpw7oJm5fehfHWd4u/6qbsEHfmr56qf2nC+23qL3v5TdgXC87zujmbnYN+4DKPPS7e/j5aFnWztoh7gUv9JT0u3v70WuZ109YRD0aHC68c87gMISCW1W1Ydu8DLqxyzOPSf9uv63Zsve8BLqxyzOPSe3vO67ZsVvYAF0455nHpudcSXOs2bRx0HxdGOeZx6bdNXnW7dph0HhdGOeZx6fXZkt/qtm2ddx4XPjnmcem1k7+q27f5qfO4sMkxj0uPbWtWI7b+Gp+TZbWP8/s9kMH9nsf7apmcx1+GIbZl13Fhk2Mel/5aRQ+JTZMq/umcyx8bKcirZErn5dJ1XLjkmMelt37LkdqNX+hnIEkhpLyXBZWXV9pxXJjkmMelr0akJSsfQqAlyaMkFgqs427jwiTHPC49PVsqCi2rC303xxeSJxPuu40LjxzzuPTUyyfQcijNciOTktL2H+bdxoVFjnlcenm27PFe/tQ8zivlieD332SncWGRYx6XPlqMzrdMR8Jul4zw+/G727hwyDGPSw/tvsP69xxjW07YGX+ze7dxYZBjHpf+WYp0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" alt="" className="" height="28" /></a>
                                <p className="text-white-50 my-4">
                                    Your trust is our top priority. Our proven strategies ensure genuine, safe, and sustainable Instagram growth, backed by a dedicated support team. Experience secure and transparent service that puts your success first.
                                </p>
                                <a className="text-white-70"
                                    href="/"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        className="feather feather-instagram icon mr-1">
                                        <g>
                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                        </g>
                                    </svg> Join Us In Instagram</a>
                            </div>
                        </div>
                        <div className="offset-lg-1 col-lg-7">
                            <div className="row">
                                <div className="col-md-4">
                                    <h4 className="text-white f-22 fw-normal mb-3">Customer</h4>
                                    <ul className="list-unstyled footer-sub-menu">
                                        <li><a className="footer-link" href="/">Works</a></li>
                                        <li><a className="footer-link" href="/">Strategy</a></li>
                                        <li><a className="footer-link" href="/">Releases</a></li>
                                        <li><a className="footer-link" href="/">Press</a></li>
                                        <li><a className="footer-link" href="/">Mission</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <h4 className="text-white f-22 fw-normal mb-3">Product</h4>
                                    <ul className="list-unstyled footer-sub-menu">
                                        <li><a className="footer-link" href="/">Tranding</a></li>
                                        <li><a className="footer-link" href="/">Popular</a></li>
                                        <li><a className="footer-link" href="/">Customers</a></li>
                                        <li><a className="footer-link" href="/">Features</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <h4 className="text-white f-22 fw-normal mb-3">Learn More</h4>
                                    <ul className="list-unstyled footer-sub-menu">
                                        <li><a className="footer-link" href="/">Developers</a></li>
                                        <li><a className="footer-link" href="/">Support</a></li>
                                        <li><a className="footer-link" href="/">Customer Service</a></li>
                                        <li><a className="footer-link" href="/">Get Started</a></li>
                                        <li><a className="footer-link" href="/">Guide</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center mt-5">
                                <p className="text-white-50 f-15 mb-0">2025 © Nody. Develop By Narendra Singh</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
