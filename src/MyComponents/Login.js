import axios from "axios";
import { useState } from "react";

const Login = ()=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const userLogin=(e)=>{
        e.preventDefault();
        const userData = {
            username, password
        }
        axios.post('http://localhost:90/user/login', userData)
        .then(result=>{
            if(result.data.token){
                //login success
                localStorage.setItem('token',result.data.token);
                window.location.replace('/material/show');
            }
            else{
                //login fail
                setMessage("Invalid user!!")
            }
        })
        .catch()
    }

    return(
        <div className="container">
            <div className="row">
            {message}
                {/* <div className="col-md-4">
                    {message}
                </div>          
                <div className="col-md-4">      
                    <form>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" className="form-control"
                            value={username}
                            onChange={(e)=> setUsername(e.target.value)}
                            />
                        </div>                                             
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" 
                            value={password}
                            onChange={(e)=> setPassword(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input type="button" class="btn btn-primary" value="LOGIN"
                            onClick={userLogin}
                            />
                        </div>
                    </form>
                </div> */}
                
                
                               
            </div>


            <section class="get-in-touch">
            <h1 class="title">LOGIN</h1>
            <form class="contact-form row">
            <div class="form-field col-lg-login">                     
            <input id="name" class="input-text js-input" type="text" required 
            onChange={(e)=>setUsername(e.target.value)} />
            <label class="label" for="name">Username</label>
            </div>
            
            <div class="form-field col-lg-login ">
            <input id="password" class="input-text js-input" type="password" required 
            onChange={(e)=>setPassword(e.target.value)} />
            <label class="label" for="company">Password</label>
            </div>
      
            <div class="form-field col-lg-12">
            <input class="submit-btn" type="submit" value="LOGIN" onClick={userLogin}/>
            </div> 
                      
            </form>
            </section>
           
        </div>
    )
}

export default Login;