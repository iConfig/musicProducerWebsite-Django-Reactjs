import React,{ useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";


const Home = () => {

    // fetching featured beat from server 
    const [featuredBeat, setFeaturedBeat] = useState([]);

    const getFeaturedBeat = async () => {
        const res = await axios.get('http://127.0.0.1:8000/beats/api/featured/')
        setFeaturedBeat(res.data[0])
        console.log(res.data[0])

    };

    useEffect(() => {
        getFeaturedBeat();
    },[]);

    return(
        <React.Fragment>
        <Header />
        <div className="container">
            <div>
                <br/><br/>
            </div>
            <div className="row ">
                <div className="col-12 ">
                    <div className="section-heading style-2 ">
                        <h2>ABOUT</h2><br/>
                        <div className="row justify-content-center ">
                        <div className="col-12 col-lg-9 ">
                            <div className="ablums-text text-center mb-70 ">
                                <p>Nam tristique ex vel magna tincidunt, ut porta nisl finibus. Vivamus eu dolor eu quam varius rutrum. Fusce nec justo id sem aliquam fringilla nec non lacus. Suspendisse eget lobortis nisi, ac cursus odio. Vivamus nibh velit, rutrum
                                    at ipsum ac, dignissim iaculis ante. Donec in velit non elit pulvinar pellentesque et non eros.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div> 

        </div>
         <div>
        <section id="img-sec" className="featured-artist-area section-padding-100 bg-img bg-overlay bg-fixed">
            <div className="row align-items-end ">
                <div  id="img-sec2" className="col-12 col-md-7 col-lg-8 ">
                    <div className="featured-artist-content " >
                        <div className="section-heading white text-left mb-30 ">
                            <p>Listen to what’s new</p>
                            <h2>GET What’s New</h2>
                        </div>
                        <p>Nam tristique ex vel magna tincidunt, ut porta nisl finibus. Vivamus eu dolor eu quam varius rutrum. Fusce nec justo id sem aliquam fringilla nec non lacus. Suspendisse eget lobortis nisi, ac cursus odio. Vivamus nibh velit, rutrum
                        at ipsum ac, dignissim iaculis ante. Donec in velit non elit pulvinar pellentesque et non eros.</p>
                        {/* { featuredBeat && featuredBeat.length > 0 ? featuredBeat.map((feature) => (              */}
                            <div className="song-play-area" >
                            <div className="song-name ">
                                <p>{featuredBeat.beat_title}</p>
                            </div>
                            <audio preload="auto " controls >
                                <source src={featuredBeat.beat_file} type="audio/wav" />
                            </audio>
                            </div>

                        {/* // )):<h6 style={{color:'white'}}>No beat to display </h6>} */}
                    </div>
                </div>
            </div>
        </section> 

       <br/><br/><br/><br/><br/><br/>
        <div class="add-area mb-100">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="adds">
                        <a href="#"><img src={require('../static/img/bg-img/add3.gif')} alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
         {/* /* footer  */ }
         <footer className="footer-area">
             <div className="container">
                 <div className="row d-flex flex-wrap align-items-center">
                     <div className="col-12 col-md-6">
                         {/* <a href="#"><img src="img/core-img/logo.png" alt=""></a> */}
                         <p className="copywrite-text">
                             <a href="#" />
                                 Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0.
                                 Copyright &copy;
                                 <script>
                                     document.write(new Date().getFullYear());
                                 </script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https:colorlib.com" target="_blank">Colorlib</a>
                         </p>
                     </div>
                 </div>
             </div>
         </footer>
         </div>

       </React.Fragment>

    )
}
export default Home;

