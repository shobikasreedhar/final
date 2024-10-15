import React from 'react';
import "./Productinfo.css";
import Product from './product';

import product1 from './images/Screenshot 2024-09-07 184953.png';
import product2 from './images/Screenshot 2024-09-07 190110.png';
import product3 from './images/Screenshot 2024-09-07 190809.png';
import product4 from './images/Screenshot 2024-09-07 191135.png';
import product5 from './images/Screenshot 2024-09-08 120745.png';

import product9 from './images/pro9.jpg';
import product10 from './images/Screenshot 2024-09-08 121611.png';
import product11 from './images/Screenshot 2024-09-08 122206.png';
import product12 from './images/Screenshot 2024-09-08 122427.png';

function productinfo() {
    return (
        <div className='iteams__container'>

            <div className='pro_iteam_row row1'>
                <Product
                    id="123451"
                    title='littles, comfy pampus,'
                    price={499}
                    rating={5}
                    image={product1}
                />

                <Product
                    id="123452"
                    title='vitamin D,Drisdol'
                    price={393}
                    rating={5}
                    image={product2}
                />

            </div>

            <div className='pro_iteam_row row2'>
                <Product
                    id="123453"
                    title='PrimeSurgicals Durable Plastic Jal Neti Pot With Neti Salt Sachets(Pack Of 1), White'
                    price={199}
                    rating={4}
                    image={product3}
                />

                <Product
                    id="123454"
                    title='Dogz & Dudez Herbal Ear Cleaner for Dogs and all Pets 200ml | Relieves Itchy Ear, Head Shaking, Prevents Ear Discharge & Odour, Fights Bacterial, Fungal and Yeast Infection, Treats Ear Mites'
                    price={432}
                    rating={4}
                    image={product4}
                />

                <Product
                    id="123455"
                    title='Prevagen Improves Memory - Regular Strength 10mg, 30 Capsules |1 Pack| with Apoaequorin & Vitamin D with Attractive and Stackable Prevagen Storage Box | Brain Supplement for Better Brain Health'
                    price={3186.78}
                    rating={4}
                    image={product5}
                />
            </div>

            {/*<div className='pro_iteam_row row3'>
                <Product
                    id="123456"
                    title='OnePlus 11 5G | 8GB RAM+128GB | Titan Black | US Factory Unlocked Android Smartphone | 5000 mAh battery '
                    price={35869}
                    rating={4}
                    image={product6}
                />

                <Product
                    id="123457"
                    title='SAMSUNG Galaxy Z Fold 4 Cell Phone, Factory Unlocked Android Smartphone, 256GB,with Flex Mode'
                    price={89789}
                    rating={4}
                    image={product7}
                />

                <Product
                    id="123458"
                    title='Redgear Gaming Wired Remote Control Headphone'
                    price={9998}
                    rating={4}
                    image={product8}
                />
            </div>*/}

            <div className='pro_iteam_row row4'>
                <Product
                    id="123459"
                    title='CeraVe Moisturizing Cream | Body and Face Moisturizer for Dry Skin'
                    price={1799}
                    rating={4}
                    image={product9}
                />

                <Product
                    id="123410"
                    title= 'dr.fredrick bandage '
                    price={1990}
                    rating={5}
                    image={product10}
                />

                <Product
                    id="123411"
                    title='Emergen-C Zero Sugar 1000 mg Vitamin C Powder for Daily Immune Support Caffeine Free Vitamin C Supplements with Zinc and Manganese, B Vitamins and Electrolytes, Raspberry Lemonade Flavor - 36 Count '
                    price={2354}
                    rating={4}
                    image={product11}
                />
                <Product
                    id="123412"
                    title='Good Morning - Hangover Pills | Clinically Tested | Drinking Relief + Liver Support with Electrolytes, Milk Thistle + DHM. Cheers!'
                    price={2095}
                    rating={3}
                    image={product12}
                />

            </div>

           {/* <div className='pro_iteam_row row5'>
                <Product
                    id="123415"
                    title='MSI Katana GF66, 144Hz Fast Gaming Headphone'
                    price={1990}
                    rating={3}
                    image={product13}
                />

                <Product
                    id="123416"
                    title='Esports Gaming suport wifi Enjoy Gaming with No lag'
                    price={7899}
                    rating={3}
                    image={product14}
                />

                <Product
                    id="123417"
                    title='Intel 12th Gen.i7-12650H, 40CM FHD 144Hz Gaming Desktop'
                    price={49998}
                    rating={4}
                    image={product15}
                />

                <Product
                    id="123418"
                    title='Buffalo Check Plaid Throw Pillow Covers Cushion Case Polyester Linen for Fall Home'
                    price={1699}
                    rating={4}
                    image={product16}
                />


            </div>

            <div className='pro_iteam_row row6'>
                <Product
                    id="123420"
                    title='Nokia keypad mobile'
                    price={1990}
                    rating={5}
                    image={product17}
                />
                <Product
                    id="123421"
                    title='Pocket Drug Guide BOOK'
                    price={1990}
                    rating={3}
                    image={product18}
                />

                <Product
                    id="123422"
                    title="Mans stylish sonata watch"
                    price={2199}
                    rating={4}
                    image={product19}
                />
                <Product
                    id="123423"
                    title='Royal Gaming Compertable Chair'
                    price={5899}
                    rating={4}
                    image={product20}
                />

                <Product
                    id="123424"
                    title=" Lewic  Glramous Man's Gray hodies"
                    price={4598}
                    rating={4}
                    image={product21}
                />

            </div>*/}


            <div className='pro_iteam_row home7'>
                
            </div>


        </div>

    )
}

export default productinfo;
