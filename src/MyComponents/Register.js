import { useState } from "react";
import axios from "axios";

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phnno, setPhone] = useState('');
    const [msg, setMsg] = useState('');
    const userRegister=(e)=>{
        e.preventDefault();  //stops page from default bahaviour (refresh)
        //console.log({username},{password},{phnno});
        const userData = {username,password,phnno};
        //console.log(userData);
        axios.post("http://localhost:90/user/register", userData)
        .then(result=>setMsg(result.data.message))
        .catch()
    }
    return (
        <div className="container">
            <div className="row">
            {/* <div className="col-md-4">
                    
                </div>
            <div className="col-md-4">                
            <form className="form-group">
                <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="Enter Username"
                onChange={(e)=>setUsername(e.target.value)} />    
                </div>
                <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter Password"
                onChange={(e)=>setPassword(e.target.value)} />  
                </div>
                <div className="form-group">
                <label>Phone Number</label>
                <input type="text" className="form-control" placeholder="Enter Phone number"
                onChange={(e)=>setPhone(e.target.value)} />    
                </div>
                <div class="text-center">
                <button type="submit" class="btn btn-primary" onClick={userRegister}>Submit</button>
                </div>
                
            </form>   
            </div>
                {/* {username} <br></br>
                {password} <br></br>
                {phnno}  */}
                {msg} 
        </div>

        <section class="get-in-touch">
        <h1 class="title">REGISTER NEW USER</h1>
        <form class="contact-form row">
      <div class="form-field col-lg-6">
         <input id="name" class="input-text js-input" type="text" required 
         onChange={(e)=>setUsername(e.target.value)} />
         <label class="label" for="name">Username</label>
      </div>
      <div class="form-field col-lg-6 ">
         <input id="email" class="input-text js-input" type="email" required />
         <label class="label" for="email">E-mail</label>
      </div>
      <div class="form-field col-lg-6 ">
         <input id="password" class="input-text js-input" type="password" required 
         onChange={(e)=>setPassword(e.target.value)} />
         <label class="label" for="company">Password</label>
      </div>
       <div class="form-field col-lg-6 ">
         <input id="phone" class="input-text js-input" type="text" required 
         onChange={(e)=>setPhone(e.target.value)} />
         <label class="label" for="phone">Contact Number</label>
      </div>
      
      <div class="form-field col-lg-12">
         <input class="submit-btn" type="submit" value="Submit" onClick={userRegister}/>
      </div>
    </form>
    </section>

        </div>
            
    )
}

export default Register;