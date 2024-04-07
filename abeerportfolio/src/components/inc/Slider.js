import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Slider.css";
import ProjectCard from "./ProjectCard";

function Sliders() {
    var settings = {
        className: "center",
        centerMode: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    centerMode:false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    centerMode:false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode:false
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
            <div >
                <ProjectCard />
            </div>
            <div>
                <ProjectCard />
            </div>
            <div>
                <ProjectCard />
            </div>
            <div>
                <ProjectCard />
            </div>
            <div>
                <ProjectCard />
            </div>
            <div>
                <ProjectCard />
            </div>
        </Slider>
    );
}

export default Sliders;
