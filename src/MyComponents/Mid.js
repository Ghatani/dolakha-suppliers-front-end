import { Component } from "react";
import Home from "./Home";
import About from "./About";
import {Route, Routes} from 'react-router-dom';
import Contact from "./Contact";
import Material from "./Material";
import Register from "./Register";
import Login from "./Login";
import Addmaterial from "./AddMaterial,";
import ShowMaterial from "./ShowMaterial";

class Mid extends Component{
    render(){
        return(
            <div>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/material/:id' element={<Material />} />
                    <Route path='/user/register' element={<Register />} />
                    <Route path='/user/login' element={<Login />} />
                    <Route path='/material/add' element={<Addmaterial />} />
                    <Route path='/material/show' element={<ShowMaterial />} />
                </Routes>
                
            </div>
        )
    }
}

export default Mid;