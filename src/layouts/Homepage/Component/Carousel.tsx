import React from "react";
const images: Record<string, string> = {
    slide1: require('../../../images/books/slider1.jpg'),
    slide2: require('../../../images/books/slider2.jpg'),
    slide3: require('../../../images/books/slider3.jpg'),
    slide4: require('../../../images/books/slider4.jpg'),
    slide5: require('../../../images/books/slider5.jpg'),
    slide6: require('../../../images/books/slider6.jpg'),
};
const Carousel:React.FC =()=>{
    return(
        <div className="top-slider carousel slide" id="carouselExample" >
            <div className="top-slider-left carousel-inner">
                <div className="swipe-button-left " data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="ico_arrow_gray left"></span>
                </div>
                <div className="slider carousel-item active">
                    <img src={images.slide1} alt="slider1" className="d-block w-100"/>
                </div>
                <div className="slider carousel-item ">
                    <img src={images.slide2} alt="slider2" className="d-block w-100"/>
                </div>
                <div className="slider carousel-item ">
                    <img src={images.slide3} alt="slider3" className="d-block w-100"/>
                </div>
                <div className="slider carousel-item ">
                    <img src={images.slide4} alt="slider3" className="d-block w-100"/>
                </div>
                <div className="slider carousel-item ">
                    <img src={images.slide5} alt="slider3" className="d-block w-100"/>
                </div>
                <div className="slider carousel-item ">
                    <img src={images.slide6} alt="slider3" className="d-block w-100"/>
                </div>
                <div className="swipe-button-right " data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="ico_arrow_gray right"></span>
                </div>
            </div>


            <div className="top-slider-right">

                <div className="top-slider-child-static">
                    <img src={require('../../../images/public/static1.png')} alt="slider2"/>
                </div>

                <div className="top-slider-child-static">
                    <img src={require('../../../images/public/static2.png')} alt="slider2"/>
                </div>
            </div>
        </div>
    )
}
export default Carousel