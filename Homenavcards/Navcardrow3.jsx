import React from 'react';
import "./Navcardrow1.css";

import iteam9 from './images/image.png';
import iteam10 from './images/Screenshot 2024-09-08 123746.png';
import iteam11 from './images/Screenshot 2024-09-08 123933.png';
import iteam12 from './images/Screenshot 2024-09-08 124059.png';


function Navcardrow3() {
    return (
        <div>
            <div className='home__nav__row3'>
                <div className='product-cards'>
                    <h3 className='product-heading'>stomach ache</h3>
                    <div className='product-image'>
                        <img src={iteam9} alt="error" />
                    </div>

                    <p className='about'>see Now</p>
                </div>

                <div className='product-cards'>
                    <h3 className='product-heading'>liver care</h3>
                    <div className='product-image'>
                        <img src={iteam10} alt="error" />
                    </div>

                    <p className='about'>Shop Now</p>
                </div>

                <div className='product-cards'>
                    <h3 className='product-heading'>bone,joint ,muscle</h3>
                    <div className='product-image'>
                        <img src={iteam11} alt="error" />
                    </div>

                    <p className='about'>Shop Now</p>
                </div>


                <div className='product-cards last'>
                    <h4 className='product-heading'>diabetic</h4>

                    <div className='product-image'>
                        <img src={iteam12} alt='Error' />
                    </div>
                    <div>
                        <p className='about' >Explore More</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navcardrow3
