import React from "react";


const Header = () => {

    return(
        <div>
            <div className="single-hero-slide d-flex align-items-center justify-content-center">
                <div className="slide-img bg-img" id="first-top"></div>
                <div className="container ">
                    <div className="row ">
                        <div className="col-12 ">
                            <div className="hero-slides-content text-center ">
                                <h6 data-animation="fadeInUp " data-delay="100ms ">TOP PRODUCER</h6>
                                <h2 data-animation="fadeInUp " data-delay="300ms ">Loco Music <span>Loco Music</span></h2>
                                <a data-animation="fadeInUp " data-delay="500ms " href="#" className="btn oneMusic-btn mt-50 ">Discover <i className="fa fa-angle-double-right "></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Header;