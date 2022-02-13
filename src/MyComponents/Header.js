import { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component{
    render(){

        const logout=()=>{
            localStorage.clear();
            window.location.replace('/');
        }      
        var menu;

        if(localStorage.getItem('token')){
            menu=(
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto tm-navbar-nav">
                    <li class="nav-item active"><Link class="nav-link" to="/">Home</Link></li>
                    <li class="nav-item"><Link class="nav-link" to="/about">About</Link></li>
                    <li class="nav-item"><Link class="nav-link" to="/contact">Contact Us</Link></li>
                    <li class="nav-item"><Link class="nav-link" to="/material/1122">Material</Link></li>                        
                    <li class="nav-item"><Link class="nav-link" to="/material/add">Add Material</Link></li>
                    <li class="nav-item"><Link class="nav-link" to="/material/show">Show Material</Link></li>
                    <li class="nav-item"><button onClick={logout}>Log out</button></li>
                </ul>
            </div>
            )
        }
        else{
            menu=(
            <div class="row">
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto tm-navbar-nav">
                    <li class="nav-item active"><Link class="nav-link" to="/">Home
                    </Link></li>
                    <li class="nav-item"><Link class="nav-link" to="/about">About</Link></li>
                    <li class="nav-item"><Link class="nav-link" to="/contact">Contact Us</Link></li>
                    <li class="nav-item"><Link class="nav-link" to="user/register">Register</Link></li>               
                    <li class="nav-item"><Link class="nav-link" to="/user/login">Login</Link></li>              
                </ul>
                </div>
            </div>
            )
        }

        return(
            <>
            <div class="background">
            {/* page header */}           
            {/* <div class="container" id="home">
            <div class="col-12 text-center">
            <div class="tm-page-header">
            <i class="fas fa-4x fa-chart-bar mr-4"></i>
            <h1 class="d-inline-block text-uppercase">DOLAKHA SUPPLIERS</h1>
            
            </div>
            </div>
            </div> */}

            <div className="tm-nav-section">
            <div class="container">
            <div class="row">
            <div class="col-12">
            {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">WELCOME</a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
                
              </button>
              {menu}
              </nav> */}
              <nav class="navbar navbar-expand-md navbar-light">
                <div class="container-fluid">
                <p class="head" data-text="DOLAKHA SUPPLIERS">DOLAKHA SUPPLIERS</p>
                <button class="navbar-toggler" type="button" 
                data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                aria-controls="navbarNav" aria-expanded="false" 
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                {menu}
                </div>
            </nav>


              </div></div></div></div>

              </div>
            
            </>
        )
    }
}

export default Header;