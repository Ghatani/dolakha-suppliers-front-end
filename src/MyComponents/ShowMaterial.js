import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ShowMaterial =()=>{
    const [mdata, setmdata] = useState([]);

    const config ={
        headers : {
            Authorization : 'Bearer '+ localStorage.getItem('token')
        }
    }

    useEffect(()=>{
        axios.get("http://localhost:90/material/single", config)
        .then(result=>{
            //console.log(result.data)
            setmdata(result.data)
        })
        .catch(e=>{
            console.log(e)
        })
    },[]);

    const deleteMaterial=(mid)=>{
        //const pro_data = {mid}
       // console.log(mid)
    axios.delete("http://localhost:90/material/delete/"+mid, config)
    .then(result=>{console.log(result.data)})
    .catch()
    }

    return(
        <div className="container">
            <div className="row">                       

            {mdata.map(singleData=>{
                return(
                    <div className="col-md-4">
                    {/* <h2>Material Name : {singleData.materialName}</h2>
                    <p><img src={'http://localhost:90/'+singleData.materialImage} className="img-fluid"  /></p>
                    <p className="pname">Material Price : {singleData.materialPrice}</p>
                    
                    <p>Material Quantity : {singleData.materialQuantity}</p>
                    <button onClick={()=>{deleteMaterial(singleData._id)}}>Delete</button>
                    <Link to={'/updateMaterial/'+singleData._id}>Read More..</Link> */}
                    
                    
                    <section class="sectionmaterial">
                    <div class="container">
                    <div class="row">
                        <h1 class="text-center"><span>Bootstrap 4 Cards</span>Created with <i class="fa fa-heart"></i> from Grafreez</h1>
                        <div class="col-md-4">
    		            <div class="card profile-card-1">
    		            <img src="https://images.pexels.com/photos/946351/pexels-photo-946351.jpeg?w=500&h=650&auto=compress&cs=tinysrgb" alt="profile-sample1" class="background"/>
    		            <img src="https://randomuser.me/api/portraits/women/20.jpg" alt="profile-image" class="profile"/>
                        <div class="card-content">
                        <h2>Savannah Fields<small>Engineer</small></h2>
                        <div class="icon-block"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"> <i class="fa fa-twitter"></i></a><a href="#"> <i class="fa fa-google-plus"></i></a></div>
                        </div>
                        </div>
                    <p class="mt-3 w-100 float-left text-center"><strong>Basic Profile Card</strong></p>
    		        </div>
                    </div>
                    </div>

                    </section>
                    
                    
                    </div>                   
                   
                )
            })}

                    <section class="sectionmaterial">
                    <div class="container">
                    <div class="row">
                        <h1 class="text-center"><span>Bootstrap 4 Cards</span>Created with <i class="fa fa-heart"></i> from Grafreez</h1>
                        <div class="col-md-4">
    		            <div class="card profile-card-1">
    		            <img src="https://images.pexels.com/photos/946351/pexels-photo-946351.jpeg?w=500&h=650&auto=compress&cs=tinysrgb" alt="profile-sample1" class="background"/>
    		            <img src="https://randomuser.me/api/portraits/women/20.jpg" alt="profile-image" class="profile"/>
                        <div class="card-content">
                        <h2>Savannah Fields<small>Engineer</small></h2>
                        <div class="icon-block"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"> <i class="fa fa-twitter"></i></a><a href="#"> <i class="fa fa-google-plus"></i></a></div>
                        </div>
                        </div>
                    <p class="mt-3 w-100 float-left text-center"><strong>Basic Profile Card</strong></p>
    		        </div>
                    </div>
                    </div>

                    </section>
                                         
            </div>
        </div>
    )

}

export default ShowMaterial;