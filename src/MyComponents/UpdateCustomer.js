import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const UpdateCustomer=()=> {
    const {cid} = useParams();

    const[cname, setcname]= useState('');
    const[caddress, setcaddress]= useState('');
    const [cphnno, setcphnno] = useState('');

    const config ={
        headers : {
            Authorization : 'Bearer '+ localStorage.getItem('token')
        }
    }

    useEffect(()=>{
        axios.get("http://localhost:90/material/single/"+mid, config)
        .then (result=>{
            //console.log(result.data)
            //setmymaterial(result.data)
            setcname(result.data.cname)
            setcaddress(result.data.caddress)
            setcphnno(result.data.cphnno)
        })
        .catch (e=>{

        },)
    },[])

    const updatecustomers =(e)=>{
        e.preventDefault();
        const customerdata ={
            cid, cname, caddress , cphnno
        }
        axios.put ("http://localhost:90/customer/update/", customerdata, config)
    }

    return(
        <div className="container items">
            <div className="form">
            {/* <div className="title">material id {mid}</div> */}
                <div className="title">Welcome</div>
                <div className="subtitle">Edit your customer!</div>
                
                <div className="input-container ic1">
                    <input id="cname" className="input" type="text" placeholder=" " 
                    value={cname} 
                    onChange={(e)=>setcname(e.target.value)}/>
                    <div className="cut"></div>
                    <label htmlFor="cname" className="placeholderM">Customer Name</label>
                </div>
                <div className="input-container ic2">
                    <input id="caddress" className="input" type="number" placeholder=" " 
                    value={caddress}
                    onChange={(e)=>setcaddress(e.target.value)}/>
                    <div className="cut"></div>
                    <label htmlFor="caddress" className="placeholderM">Address</label>
                </div>
                <div className="input-container ic2">
                    <input id="cphnno" className="input" type="number" placeholder=" " 
                    value={cphnno}
                    onChange={(e)=>setcphnno(e.target.value)}/>
                    <div className="cut cut-short"></div>
                    <label htmlFor="cphnno" className="placeholderM">Phone No</label>
                </div>
                <button type="text" className="submit" onClick={updatecustomers}>Update</button>
            </div>
        </div>
    )

}

export default UpdateMaterial;