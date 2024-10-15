import React from 'react';
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import './footer.css';

function Footer() {
    return (
        <div className='footer'>

            <div class="about-us">
                {/*<div class="summary">
                    <ul>
                        <p> Get to Know with Amazon</p>
                        <li> Careers</li>
                        <li> Blog</li>
                        <li> About Amazon</li>
                        <li> Investor Relations</li>
                        <li>  Amazon Devices </li>
                        <li>  Amazon Science</li>
                    </ul>
                </div>*/}
                <div class="summary">
                    <ul>
                        <p>Make Money with Us </p>
                        <li> Sell products </li>
                        {/*<li>Sell on Amazon Business</li>
                        <li> Sell apps on Amazon</li>
                        <li> Become an Affiliate</li>
                        <li> Advertise Your Products</li>
                        <li> Self-Publish with Us</li>
                        <li> Host an Amazon Hub</li>
                        <li>See More Make Money with Us</li>*/}


                    </ul>
                </div>

                {/*<div class="summary">
                    <ul>
                        <p> Amazon Payment Products</p>
                        <li>    Amazon Business Card</li>
                        <li>    Shop with Points</li>

                        <li>    Reload Your Balance</li>
                        <li>    Amazon Currency Converter</li>
                    </ul>
                </div>*/}

                <div class="summary lastfooter">
                    <ul>
                        <p> Let Us Help You</p>
                        <li>     Your Account </li>
                        <li>     Your Orders</li>
                        <li>    Shipping Rates & Policies</li>
                        <li>    Returns & Replacements</li>
                        <li>    Help</li>
                    </ul>

                </div>
            </div>

            <div className='footer'>
                <div className='intro'>
                    <h4>Created by shobika</h4>
                    {/*</div><p>This site is for educational purposes only</p>*/}

                </div>
                <div className='footer_icons'>
                 <li>   <AiFillGithub /></li> 
                 <li>   <AiFillLinkedin /></li>
                 <li>   <AiFillInstagram /></li> 
                 <li>   <AiOutlineTwitter /> </li> 
                 <li>   <AiFillFacebook /> </li> 

                    
                </div>

            </div>
            </div>
        


    )
}

export default Footer
