import { Component } from "react";

class Home extends Component {
    render() {
        return (
            <div class="footergap">
                <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner slider">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <img src="https://www.fritsch-international.com/fileadmin/_processed_/csm_Sand_g_cf3b041233.png" class="d-block w-100" alt="..."></img>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="https://www.fritsch-international.com/fileadmin/_processed_/csm_Sand_g_cf3b041233.png" class="d-block w-100" alt="..."></img>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://www.fritsch-international.com/fileadmin/_processed_/csm_Sand_g_cf3b041233.png" class="d-block w-100" alt="..."></img>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div class="story-container">
                    <div class="ourservice">
                        <h3 class="text-center">
                            Our Services
                        </h3>
                        <p>
                            Our code generation engine enables API providers to generate SDKs for their APIs within minutes and at a fraction of the cost. We provide tools like our API editor and API transformer to further aid API providers in minimizing the time required to ship excellent quality SDKs to the developers using their APIs. Our code generation engine is also capable of generating succinct and error-free documentation for APIs and SDKs, both. The documentation for the SDKs includes dynamic screenshots detailing usage instructions tailored to the provider's specific API and also code snippets showing example usage. As the cherry on the cake, we provide beautifully designed DX portals to encapsulate this documentation.
                        </p> </div>
                </div>

                <div class="container d-flex align-items-center justify-content-center flex-wrap">
                    <div class="box">
                        <div class="body">
                            <div class="imgContainer"> <img src="https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /> </div>
                            <div class="content d-flex flex-column align-items-center justify-content-center">
                                <div>
                                    <h3 class="text-white fs-5">BRICK</h3>
                                    <p class="fs-6 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sed cum neque, rem provident ex. Laboriosam perspiciatis modi eveniet in?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="box">
                        <div class="body">
                            <div class="imgContainer"> <img src="https://images.pexels.com/photos/1532771/pexels-photo-1532771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" /> </div>
                            <div class="content d-flex flex-column align-items-center justify-content-center">
                                <div>
                                    <h3 class="text-white fs-5">SAND</h3>
                                    <p class="fs-6 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sed cum neque, rem provident ex. Laboriosam perspiciatis modi eveniet in?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="box">
                        <div class="body">
                            <div class="imgContainer"> <img src="https://images.pexels.com/photos/573238/pexels-photo-573238.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" /> </div>
                            <div class="content d-flex flex-column align-items-center justify-content-center">
                                <div>
                                    <h3 class="text-white fs-5">CHIPS</h3>
                                    <p class="fs-6 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sed cum neque, rem provident ex. Laboriosam perspiciatis modi eveniet in?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        )
    }
}

export default Home;