import React, { Component } from 'react';
import "./src/whythomso.css";
import Navbar from "../beta/home/Navbar.jsx";
import Arrow from "./src/svg/arrow"
import { Link } from "react-router-dom"
import LeftArr from "./src/svg/leftarr"
import "./src/arrow.css"


export default class WhyThomso extends Component {
    constructor() {
        super();
        this.state = {
            videos: ["https://www.youtube.com/embed/Q0yUYJtCDIE",
                "https://www.youtube.com/embed/0gosur3db5I",
                "https://www.youtube.com/embed/owPuQjInzO8",
                "https://www.youtube.com/embed/owPuQjInzO8"],
            slideindex: 0
        }
    }
    handlePrevious = () => {
        if (this.state.slideindex >= 0) {
            this.setState({
                slideindex: this.state.slideindex - 1
            })
            console.log(this.state.slideindex, "slideindex")

            document.getElementById(`i${this.state.slideindex - 1}`).classList = "translate-left"
            document.getElementById(`i${this.state.slideindex}`).classList = "translate-left"
        }
    }
    handleNext = () => {
        if (this.state.slideindex <= this.state.videos.length - 1) {
            this.setState({
                slideindex: this.state.slideindex + 1
            })
            document.getElementById(`i${this.state.slideindex + 1}`).classList.add("translate-right")
        }
    }
    render() {
        return (
            <div className="whythomso-parent">
                <Navbar background="false" />
                <div className="whythomso-child">
                    <div className="whythomso-child-whythomso">
                        <h3>WHY VISIT THOMSO ?</h3>
                    </div>
                </div>
                <div id="attractions" className="whythomso-second-child">
                    <div className="whythomso-second-child-top">
                        <div className="whythomso-second-child-attractions">
                            <h3>Attractions</h3>
                        </div>
                    </div>
                    <div className="whythomso-second-child-middle">
                        <div className="whythomso-second-child-the-institute">
                            <div className="whythomso-second-child-the-institute-image">
                            </div>
                            <div className="whythomso-second-child-the-institute-content">
                                <div className="whythomso-second-child-the-institute-content-heading">
                                    <h3>The Institute</h3>
                                </div>
                                <div className="whythomso-second-child-the-institute-content-content">
                                    <p>Amidst the foothills of Himalayas,fastering the spirit of adventure and excitement is located IIT Roorkee</p>
                                </div>
                            </div>
                        </div>
                        <div className="whythomso-second-child-the-legacy">
                            <div className="whythomso-second-child-the-legacy-image">
                            </div>
                            <div className="whythomso-second-child-the-legacy-content">
                                <div className="whythomso-second-child-the-legacy-content-heading">
                                    <h3>The Legacy</h3>
                                </div>
                                <div className="whythomso-second-child-the-legacy-content-content">
                                    <p>The 170 years old legacy of IIT Roorkee and 35+ successful years of Thomso are itself a testimony to the fest's grandeur</p>
                                </div>
                            </div>
                        </div>
                        <div className="whythomso-second-child-the-nightmare">
                            <div className="whythomso-second-child-the-nightmare-image">
                            </div>
                            <div className="whythomso-second-child-the-nightmare-content">
                                <div className="whythomso-second-child-the-nightmare-content-heading">
                                    <h3>The Nightmare</h3>
                                </div>
                                <div className="whythomso-second-child-the-nightmare-content-content">
                                    <p>With 150+ events and prizes woth more than 30 lakhs, Thomso attracts a crowd of over 30000 people</p>
                                </div>
                            </div>
                        </div>
                        <div className="whythomso-second-child-the-dots">
                        </div>
                    </div>
                </div>
                <div id="review" className="whythomso-third-child">
                    <div className="whythomso-third-child-top">
                        <div className="whythomso-third-child-review">
                            <h3>Review Media</h3>
                        </div>
                        <button className="whythomso-slider-rightarrow" onClick={this.handleNext} disabled={this.state.slideindex === this.state.videos.length - 1}>
                            NEXT<span className="whythomso-next-arrow"><Arrow /></span>
                        </button>
                        <button className="whythomso-slider-leftarrow" onClick={this.handlePrevious} disabled={this.state.slideindex === 0}>
                            <span className="whythomso-previous-arrow"><LeftArr /></span>PREV
                        </button>
                    </div>
                    <div className="whythomso-third-child-middle">
                        <div className="whythomso-third-child-sliderwrapper">
                            <div className="whythomso-third-child-slider">

                                <div className="cards-slider-wrapper" style={{
                                }}>
                                    {
                                        this.state.videos.map((video, i) => (
                                            <div key={i} className={`ii${i}`} id={`i${i}`}>
                                                <iframe key={i} src={video} height="300" width="600" frameBorder="0" allowFullScreen>
                                                </iframe>
                                            </div>
                                        ))
                                    }
                                </div>

                            </div>
                            <div className="whythomso-third-child-iit-content">
                                <div className="whythomso-third-child-iit-content-heading">
                                    <h3>IIT Roorkee</h3>
                                </div>
                                <div className="whythomso-third-child-iit-content-content">
                                    <p>IIT Roorkee video of IIT Roorkee video IIT Roorkee video IIT Roorkee video </p>
                                </div>
                            </div>
                        </div>
                        <div className="whythomso-second-child-the-dots">
                        </div>
                    </div>
                </div>
                <div id="blogs" className="whythomso-fourth-child">
                    <div className="whythomso-fourth-child-top">
                        <div className="whythomso-fourth-child-blogs">
                            <h3>Blogs</h3>
                        </div>
                    </div>
                    <div className="whythomso-fourth-child-recent-heading">
                        <h3><i>Recents</i></h3>
                    </div>
                    <div className="whythomso-fourth-child-middle">
                        <div className="whythomso-fourth-child-the-nightmare">
                            <div className="whythomso-fourth-child-the-nightmare-image">
                            </div>
                            <div className="whythomso-fourth-child-the-nightmare-content">
                                <div className="whythomso-fourth-child-the-nightmare-content-heading">
                                    <h3>The Nightmare</h3>
                                </div>
                                <div className="whythomso-fourth-child-the-nightmare-date">
                                    <h3>06.09.2069</h3>
                                </div>
                                <div className="whythomso-fourth-child-the-nightmare-content-content">
                                    <p>Amidst the foothills of Himalayas,fastering the spirit of adventure and excitement is located IIT Roorkee</p>
                                </div>
                            </div>
                        </div>
                        <div className="whythomso-fourth-child-the-daymare">
                            <div className="whythomso-fourth-child-the-daymare-image">
                            </div>
                            <div className="whythomso-fourth-child-the-daymare-content">
                                <div className="whythomso-fourth-child-the-daymare-content-heading">
                                    <h3>The Daymare</h3>
                                </div>
                                <div className="whythomso-fourth-child-the-daymare-date">
                                    <h3>06.09.2069</h3>
                                </div>
                                <div className="whythomso-fourth-child-the-daymare-content-content">
                                    <p>The 170 years old legacy of IIT Roorkee and 35+ successful years of Thomso are itself a testimony to the fest's grandeur</p>
                                </div>
                            </div>
                        </div>
                        <div className="whythomso-fourth-child-the-evemare">
                            <div className="whythomso-fourth-child-the-evemare-image">
                            </div>
                            <div className="whythomso-fourth-child-the-evemare-content">
                                <div className="whythomso-fourth-child-the-evemare-content-heading">
                                    <h3>The Evemare</h3>
                                </div>
                                <div className="whythomso-fourth-child-the-evemare-date">
                                    <h3>06.09.2069</h3>
                                </div>
                                <div className="whythomso-fourth-child-the-evemare-content-content">
                                    <p>With 150+ events and prizes woth more than 30 lakhs, Thomso attracts a crowd of over 30000 people</p>
                                </div>
                            </div>
                        </div>
                        <div className="whythomso-fourth-child-the-dots">
                        </div>
                    </div>
                    <div className="whythomso-fourth-child-viewall">
                        <Link to="">View all<span><Arrow /></span></Link>
                    </div>
                </div>
                <div id="previous" className="whythomso-fifth-child">
                    <div className="whythomso-fifth-child-top">
                        <div className="whythomso-fifth-child-previous">
                            <h3>Previous Artists</h3>
                        </div>
                    </div>
                    <div className="whythomso-fifth-child-middle">
                        <div className="whythomso-fifth-child-artist">
                            <div className="whythomso-fifth-child-bappi-image">
                            </div>
                            <div className="whythomso-fifth-child-bappi-name">
                                Bappi Lehri
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}
