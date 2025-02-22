import React from "react";
// import OwlCarousel from "react-owl-carousel"; // Importing OwlCarousel
// import "owl.carousel/dist/assets/owl.carousel.css"; // OwlCarousel CSS
// import "owl.carousel/dist/assets/owl.theme.default.css"; // OwlCarousel Theme CSS



import MainHeading from '../GlobalComponent/MainHeading'


const BrandsSection = () => {
    
    return (
        <>
    <section className="brands-section section-spacing">
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-lg-5 col-sm-12 col-12 text-lg-start text-center">
                    <MainHeading headingTag={'Partners in Excellence'} headingFirst={'Trusted'} subHeading={'Brands'}/>
                </div>
                <div className="col-xl-8 col-lg-7 col-sm-12 col-12">
                    {/* <OwlCarousel 
                        className="owl-theme brand-slider"
                        loop
                        margin={10}
                        nav
                        dots={true}
                        autoplay={true}
                        autoplayTimeout={3000}
                        responsive={{
                        0: { items: 1 },
                        600: { items: 2 },
                        1000: { items: 3 },
                        }}>
                            <div className="item">
                                <h4>Testimonial 1</h4>
                                </div>
                                <div className="item">
                                    <h4>Testimonial 2</h4>
                                </div>
                                <div className="item">
                                    <h4>Testimonial 3</h4>
                                </div>
                                <div className="item">
                                    <h4>Testimonial 4</h4>
                            </div>
                    </OwlCarousel> */}
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default BrandsSection