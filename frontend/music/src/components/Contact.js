import React from "react";



const Contact = ()=> {
    return (
        <React.Fragment>
        <div>
            <section className="breadcumb-area bg-img bg-overlay" id="con-sec">
                <div className="bradcumbContent">
                    <p>Get what’s new</p>
                    <h2>Contact Loco </h2>
                </div>
            </section>

            {/* contact  */}
            <section className="contact-area section-padding-100-0">
            <div className="container">
                <div className="row">

                    <div className="col-12 col-lg-3">
                        <div className="contact-content mb-100">
                            <div className="contact-title mb-50">
                                <h5>Contact Info</h5>
                            </div>

                            <div className="single-contact-info d-flex align-items-center">
                                <div className="icon mr-30">
                                    <span className="icon-placeholder"></span>
                                </div>
                                <p>1481 Creekside Lane Avila Beach, CA 931</p>
                            </div>

                            <div className="single-contact-info d-flex align-items-center">
                                <div className="icon mr-30">
                                    <span className="icon-smartphone"></span>
                                </div>
                                <p>+53 345 7953 32453</p>
                            </div>

                            <div className="single-contact-info d-flex align-items-center">
                                <div className="icon mr-30">
                                    <span className="icon-mail"></span>
                                </div>
                                <p>loco@gmail.com</p>
                            </div>

                            <div className="contact-social-info mt-50">
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Pinterest"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Dribbble"><i className="fa fa-dribbble" aria-hidden="true"></i></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Behance"><i className="fa fa-behance" aria-hidden="true"></i></a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Linkedin"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                            </div>

                        </div>
                    </div>

                    <div className="col-12 col-lg-9">
                        <div className="map-area mb-100">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22236.40558254599!2d-118.25292394686001!3d34.057682914027104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2z4Kay4Ka4IOCmj-CmnuCnjeCmnOCnh-CmsuCnh-CmuCwg4KaV4KeN4Kav4Ka-4Kay4Ka_4Kar4KeL4Kaw4KeN4Kao4Ka_4Kav4Ka84Ka-LCDgpq7gpr7gprDgp43gppXgpr_gpqgg4Kav4KeB4KaV4KeN4Kak4Kaw4Ka-4Ka34KeN4Kaf4KeN4Kaw!5e0!3m2!1sbn!2sbd!4v1532328708137"
                                allowfullscreen></iframe>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        {/* contact form  */}
        <section className="contact-area section-padding-0-100" id="con-form">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-heading">
                            <p style={{color:'white'}}>Get what’s new</p>
                            <h2 style={{color:'white'}}>Contact Loco</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="contact-form-area">
                            <form action="#" method="post">
                                <div className="row">
                                    <div className="col-md-6 col-lg-4">
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="name" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4">
                                        <div className="form-group">
                                            <input type="email" className="form-control" id="email" placeholder="E-mail" />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <textarea name="message" className="form-control" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-12 text-center">
                                        <button className="btn oneMusic-btn mt-30" type="submit">Send <i className="fa fa-angle-double-right"></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* footer  */}
        <footer class="footer-area">
            <div class="container">
                <div class="row d-flex flex-wrap align-items-center">
                    <div class="col-12 col-md-6">
                        {/* <a href="#"><img src="img/core-img/logo.png" alt=""></a> */}
                        <p class="copywrite-text">
                            <a href="#" />
                                Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0.
                                Copyright &copy;
                                <script>
                                    document.write(new Date().getFullYear());
                                </script> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        </div>
        </React.Fragment>
    )
}
export default Contact;