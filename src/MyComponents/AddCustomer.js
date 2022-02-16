import { useState } from "react";
import axios from "axios";

const Addcustomer=()=> {

    const[cname, setcname]= useState('');
    const[caddress, setcaddress]= useState('');
    const [cphnno, setcphnno] = useState('');
    const [msg, setMessage] = useState('');

    const config ={
        headers : {
            Authorization : 'Bearer ' + localStorage.getItem('token')
        }
    }

    const addcustomers=(e)=>{
        e.preventDefault();
        const custData = {
            cname, caddress, cphnno
        }

        axios.post("http://localhost:90/customer/add", custData, config)
        .then(result=>{
            if(result.data.success){
                // data inserted
                setMessage("Product Inserted Successfully!!");

            }
            else{
                setMessage("Something went wrong!!");
            }
        })
        .catch(e=>{
            setMessage("Something went wrong!!");
        });
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <h2 className="heading-h2-all">Add customer Details :</h2>
                    <p>{msg}</p>
                    <form>
                        <div className="form-group">
                            <label> Name</label>
                            <input type="text" className="form-control"
                            value={cname}
                            onChange={e=>{setcname(e.target.value)}}
                            />
                        </div>

                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" className="form-control"
                             value={caddress}
                             onChange={e=>{setcaddress(e.target.value)}}
                            />
                        </div>
            
                        <div className="form-group">
                            <label>Phone No</label>
                            <input type="text" className="form-control"
                             value={cphnno}
                             onChange={e=>{setcphnno(e.target.value)}}
                            />
                        </div>                    


                        <p><input type='submit' className="btn btn-primary" onClick={addcustomers} /></p>
                    </form>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    )
}

export default Addcustomer;