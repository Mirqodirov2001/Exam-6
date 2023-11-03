import React from 'react';
import marketing from "../../../assets/images/marketing.svg";
import img1 from "../../../assets/images/div.features-box-image.svg"
import img2 from "../../../assets/images/div.features-box-image (1).svg"
import img3 from "../../../assets/images/div.features-box-image (2).svg"
import img4 from "../../../assets/images/div.features-box-image (3).svg"
import img5 from "../../../assets/images/div.features-box-image (4).svg"
import './style.scss';

const CategoryCard = () => {
    return (
        <>
            <div><h1 className=' text-center text-[45px] font-extrabold text-[#2AAA94]'><span className=' font-extrabold text-[#323232]'>Top</span> Categories</h1></div>
            <p className=' text-center font-medium text-[25px] text-[#4E596B] mt-[42px] text-["Saira"] mb-[100px]'>12,000+ unique online course list designs</p>
            <div className='flex gap-5 justify-center'>
                <div className='category_card cursor-pointer'>
                    <div className='icon_container'>
                        <img src={marketing} alt="Marketing icon" />
                    </div>

                    <h4>Digtal Marketing</h4>

                    <p>25 Courses</p>
                </div>

                <div className='category_card cursor-pointer'>
                    <div className='icon_container'>
                        <img src={img1} alt="Marketing icon" />
                    </div>

                    <h4>Web Development</h4>

                    <p>16 Courses</p>
                </div>

                <div className='category_card cursor-pointer'>
                    <div className='icon_container'>
                        <img src={img2} alt="Marketing icon" />
                    </div>

                    <h4>Art & Humanities</h4>

                    <p>76 Courses</p>
                </div>

                <div className='category_card cursor-pointer'>
                    <div className='icon_container'>
                        <img src={img3} alt="Marketing icon" />
                    </div>

                    <h4>Personal Development</h4>

                    <p>22 Courses</p>
                </div>

                <div className='category_card cursor-pointer'>
                    <div className='icon_container'>
                        <img src={img4} alt="Marketing icon" />
                    </div>

                    <h4>IT and Software</h4>

                    <p>110 Courses</p>
                </div>

                <div className='category_card cursor-pointer'>
                    <div className='icon_container'>
                        <img src={img5} alt="Marketing icon" />
                    </div>

                    <h4>Graphic Design</h4>

                    <p>5 Courses</p>
                </div>
            </div>
        </>

    )
}

export default CategoryCard