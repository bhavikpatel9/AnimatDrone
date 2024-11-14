import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { droneCarouselImages, drones } from "../utils/Data";

const DroneCarousel = () => {
    const items = [
        '/drone1.png',
        '/drone2.png',
        '/drone3.png',
        '/drone4.png',
    ];

    const sliderRef = useRef(null); // Reference to the slider
    const [currentSlide, setCurrentSlide] = useState(0); // State to track the current slide

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // Optionally disable default arrow buttons if needed
        arrows: false,
        centerMode: true,
        centerPadding: "0px",
        beforeChange: (current, next) => setCurrentSlide(next), // Update current slide index
    };

    const handleNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext(); // Move to the next slide
            window.scrollBy({ top: 430, behavior: 'smooth' }); // Scroll down
            if (currentSlide === droneCarouselImages.length - 1) {
                // If the current slide is the last one, scroll to the top
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    };

    const handlePrev = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev(); // Move to the previous slide
            window.scrollBy({ top: -430, behavior: 'smooth' }); // Scroll up
            if (currentSlide === 0) {
                // If the current slide is the last one, scroll to the top
                window.scrollTo({ top: (droneCarouselImages.length)*(430), behavior: 'smooth' });
            }
        }
    };

    return (
        <section className="w-[600px] h-[90px] relative">
            <button 
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
                onClick={handlePrev}
            >
                &#10094; {/* Left arrow symbol */}
            </button>
            <Slider ref={sliderRef} {...settings}>
                {droneCarouselImages.map((item, index) => (
                    <div key={index} className='flex items-center justify-center'>
                        <img src={item} alt="drone" className="w-[120px] h-[90px] " />
                    </div>
                ))}
            </Slider>
            <button 
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
                onClick={handleNext}
            >
                &#10095; {/* Right arrow symbol */}
            </button>
        </section>
    );
}

export default DroneCarousel;
