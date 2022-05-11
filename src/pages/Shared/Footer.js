import React from 'react';
import bg from '../../assets/images/footer.png'
const Footer = () => {
    return (
        <footer
            style={{
                backgroundImage: `url(${bg})`
            }}
            className='bg-left bg-cover lg:pl-24'>
            <section class="footer p-10  ">

                <div>
                    <span class="footer-title text[#939393]">Services</span>
                    <a class="link link-hover">Emergency Checkup</a>
                    <a class="link link-hover">Monthly Checkup</a>
                    <a class="link link-hover">Weekly Checkup</a>
                    <a class="link link-hover">Deep Checkup</a>
                </div>
                <div>
                    <span class="footer-title text[#939393]">ORAL HEALTH</span>
                    <a class="link link-hover">Fluoride Treatment</a>
                    <a class="link link-hover">Cavity Filling</a>
                    <a class="link link-hover">Teath Whitening</a>

                </div>
                <div>
                    <span class="footer-title text[#939393]">OUR ADDRESS</span>
                    <p>New York - 101010 Hudson</p>
                </div>
            </section>
            <section class="footer footer-center p-4  text-base-content">
                <div>
                    <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
                </div>
            </section>
        </footer>
    );
};

export default Footer;