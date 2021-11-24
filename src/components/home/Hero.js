import React from "react";
import Banner from '../../images/banner.jpg'
import Banner2 from '../../images/banner2.jpg'
import Banner3 from '../../images/banner3.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ className, style, onClick }) => (
    <div style={{ ...style, display: "none" }} onClick={onClick} className={className}>
    </div>
);

const PrevArrow = ({ className, style, onClick }) => (
    <div style={{ ...style, display: "none" }} onClick={onClick} className={className}>
    </div>
);

const settings = {
    dots: false,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
};
export default function Hero() {
    return (
        <section id='hero' className='bg-gray-700'>
            <Slider {...settings}>
                <div>
                    <div className="h-screen bg-cover" style={{
                        backgroundImage: `url(${Banner})`,
                    }}>
                        <div className="h-screen bg-gray-500 bg-opacity-50"></div>
                    </div>
                </div>
                <div>
                    <div className="h-screen bg-cover" style={{
                        backgroundImage: `url(${Banner2})`,
                    }}>
                        <div className="h-screen bg-gray-500 bg-opacity-50"></div>
                    </div>
                </div>
                <div>
                    <div className="h-screen bg-cover" style={{
                        backgroundImage: `url(${Banner3})`,
                    }}>
                        <div className="h-screen bg-gray-500 bg-opacity-50"></div>
                    </div>
                </div>
            </Slider>


            <div className="flex flex-col absolute top-1/3 left-0 right-0">
                <div className="flex flex-col text-white items-center justify-center mb-10">
                    <h1 className="text-6xl mb-4 font-bold">
                        Lorem Ipsum
                    </h1>
                    <p className=''>
                        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
                    </p>
                </div>
                <div className="flex flex-row mb-10 justify-center">
                    <input type="text" className="w-2/3 rounded-lg rounded-tr-none rounded-br-none p-3 px-5 focus:shadow focus:outline-none" placeholder="Search anything..." />
                    <button className='bg-white p-3 rounded-lg rounded-tl-none rounded-bl-none'>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>

                <div className="flex flex-row justify-center">
                    <a href='#popular' className='font-bold bg-gray-700 text-white py-3 px-10 rounded-lg hover:bg-white hover:text-gray-700'>Explore</a>
                </div>
            </div>

        </section >
    );
}
