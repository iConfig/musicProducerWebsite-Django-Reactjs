import React,{ useState, useEffect } from "react";
import axios from 'axios';

const Beats = ()=> {

    // fetching reggea beats from backend server 
    const [Reggae, setReggae] = useState([]);
    
    const getReggae = async () => {
        const res = await axios.get('http://127.0.0.1:8000/beats/api/reggae/')
        setReggae(res.data)

    };

    useEffect(() => {
        getReggae();
    },[]);

    // fetching drum and bass beats from backend server 
    const [Drum, setDrum] = useState([]);

    const getDrum = async () => {
        const res = await axios.get('http://127.0.0.1:8000/beats/api/drum/')
        setDrum(res.data)

    };

    useEffect(() => {
        getDrum();
    },[]);


    // fetching trap beats from backend server 
    const [Trap, setTrap] = useState([]);
    
    const getTrap = async () => {
        const res = await axios.get('http://127.0.0.1:8000/beats/api/trap/')
        setTrap(res.data)

    };

    useEffect(() => {
        getTrap();
    },[]);        


    return (
        <React.Fragment>
        <div>
        <section id="sec-sec" className="breadcumb-area bg-img bg-overlay">
            <div className="bradcumbContent">
                <p>Get what’s new</p>
                <h2>Latest Beats</h2>
            </div>
        </section>
        </div><br/><br/><br/><br/>
        <div id="the-div" className="one-music-songs-area mb-70">
        
        {/* Reggae Beats  */}
        <div className="container">
            <div className="row">
            <h6 className="beat-h">Reggae Beats</h6>   
        { Reggae && Reggae.length > 0 ? Reggae.map((reggae) => (      
                    <div className="col-12"><br />  
                        <div className="single-song-area mb-30 d-flex flex-wrap align-items-end">
                            <div className="song-play-area">
                                <div className="song-name">
                                    <p>{reggae.beat_title}</p>
                                </div>
                                <audio className="audio" preload="auto" controls>
                                    <source src={reggae.beat_file} />
                                </audio>
                            </div>
                        </div>
                    </div> 
        )): <h6 className="no-beats">No beats to display </h6>}
                </div>
            </div>
    
        {/* Drum beats  */}
        <div className="container">
            <div className="row">
            <h6 className="beat-h">Drum Beats</h6>  
        { Drum && Drum.length > 0 ? Drum.map((drum) => (       
                    <div className="col-12"><br />  
                        <div className="single-song-area mb-30 d-flex flex-wrap align-items-end">
                            <div className="song-play-area">
                                <div className="song-name">
                                    <p>{drum.beat_title}</p>
                                </div>
                                <audio className="audio" preload="auto" controls>
                                    <source src={drum.beat_file} />
                                </audio>
                            </div>
                        </div>
                    </div> 
        )): <h6 className="no-beats">No beats to display </h6>}
                </div>
            </div>

        {/* Trap beats */}
        <div className="container">
            <div className="row">
            <h6 className="beat-h">Trap Beats</h6>   
        { Trap && Trap.length > 0 ? Trap.map((trap) => (      
                    <div className="col-12"><br />  
                        <div className="single-song-area mb-30 d-flex flex-wrap align-items-end">
                            <div className="song-play-area">
                                <div className="song-name">
                                    <p>{trap.beat_title}</p>
                                </div>
                                <audio className="audio" preload="auto" controls>
                                    <source src={trap.beat_file} />
                                </audio>
                            </div>
                        </div>
                    </div>
        )): <h6 className="no-beats">No beats to display </h6>}
            </div>
        </div>
        <br /> 

        {/* contact section  */}
        <section className="contact-area section-padding-100 bg-img bg-overlay bg-fixed has-bg-img" id="the-sec">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-heading white">
                        <p>See what’s new</p>
                        <h2>Get In Touch</h2>
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
    </div>
    </React.Fragment>
    )
}
export default Beats;