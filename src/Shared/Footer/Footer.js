import React from 'react';
import mapImg from '../../assets/icons/map-pin-2-fill.png'
import { Link } from 'react-router-dom';
import vec from '../../assets/icons/Vector.png'
import vec1 from '../../assets/icons/Vector-1.png'
import vec2 from '../../assets/icons/Vector-2.png'
import vec3 from '../../assets/icons/Vector-3.png'

const Footer = () => {
    return (
        <footer className=" p-10 bg-primary text-white">
            <div className='footer'>
                <div className='flex'>
                    <img src={mapImg} alt="" className='w-8' />
                    <p>H#000 (0th Floor), Road #00,
                        <br /> New DOHS, Mohakhali, Dhaka, Bangladesh</p>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to='/' className="link link-hover">About</Link>
                    <Link to='/' className="link link-hover">Project</Link>
                    <Link to='/' className="link link-hover">Our Team</Link>
                    <Link to='/' className="link link-hover">Terms Condition</Link>
                    <Link to='/' className="link link-hover">Submit Listing</Link>
                </div>
                <div>
                    <span className="footer-title">Quick Links</span>
                    <Link to='/' className="link link-hover">Quick Links</Link>
                    <Link to='/' className="link link-hover">Contact</Link>
                    <Link to='/' className="link link-hover">Rental</Link>
                    <Link to='/' className="link link-hover">Sales</Link>
                    <Link to='/' className="link link-hover">Our Blog</Link>
                </div>
                <div>
                    <span className="footer-title">About Us</span>
                    <small>Lorem ipsum dolor sit amet, consectetur <br />
                        adipiscing elit. Purus commodo ipsum <br />
                        duis laoreet maecenas. Feugiat </small>
                    <div className="flex">
                        <img src={vec} alt="" className='w-7' />
                        <img src={vec1} alt="" className='w-7 ml-8' />
                        <img src={vec2} alt="" className='w-7 ml-8' />
                        <img src={vec3} alt="" className='w-7 ml-8' />
                    </div>

                </div>
            </div>
            <div className='text-center mt-28'>
                <p>Copyright © 2023 - All right reserved by JERINS parlour Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;