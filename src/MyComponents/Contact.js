import { Component } from "react";

class Contact extends Component{
    render(){
        return(
            <div class="bgcontact">
                <div class="containercontact mt-xl-5 mb-5">
    <div class="d-flex justify-content-center pt-5">
        <h2 class="font-weight-bold h2contact">Get in touch!</h2>
    </div>
    <div class="d-flex justify-content-center text-muted">Contact us for a quote, help to join the team.</div>
    <div class="d-md-flex flex-md-row justify-content-center py-4">
        <div class="d-md-flex flex-md-column contact px-4">
            <div class="d-md-flex justify-content-center icon py-2"> 
            <span class="fa fa-map-marker"></span> <span class="mobile-info p-2 pb-3">
                102 street 2714 Don</span> </div>
            <div class="contact-info"><p class="fontcolor">102 street 2714 Don</p></div>
        </div>
        <div class="d-flex flex-column contact px-4">
            <div class="d-md-flex justify-content-center icon py-2"> 
            <span class="fa fa-phone"></span> <span class="mobile-info p-2 pb-3">
            +02 1234 567</span> </div>
            <div class="contact-info"><p class="fontcolor">+02 1234 567</p></div>
        </div>
        <div class="d-flex flex-column contact px-4">
            <div class="d-md-flex justify-content-center icon py-2 fontcolor"> 
            <span class="fa fa-envelope"></span> <span class="mobile-info p-2 pb-3">
            dolakhasuppliers@gmail.com</span> </div>
            <div class="contact-info"><p class="fontcolor">dolakhasuppliers@gmail.com</p></div>
        </div>
    </div>
    <div class="d-flex flex-row justify-content-center">
        <form class="w-xl-50 w-lg-75 formcontact">
            <div class="containercontact">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group"> 
                        <label class="labelabout" for="name">OWNER NAME</label>
                            <div class="input-field"> <span class="fa fa-user-o p-2 border-right"></span> 
                            <input class="form-controlcontact" type="text" value={"Santosh Ghatani"} disabled /> </div>
                        </div>
                        <div class="form-group"> 
                        <label class="labelabout" for="name">Mail</label>
                            <div class="input-field"> <span class="fa fa-envelope-o p-2"></span> 
                            <input class="form-controlcontact" type="email" value={"santght90@gmail.com"} disabled /> </div>
                        </div>
                        <div class="form-group"> 
                        <label class="labelabout" for="name">PhoneNumber</label>
                            <div class="input-field"> <span class="fa fa-mobile p-2"></span> 
                            <input class="form-controlcontact" type="tel" value={"+977-9803740995"} disabled /> </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group"> 
                        {/* <label class="labelabout" for="msg">Message</label>
                            <div class="input-field bg-light"> 
                            <textarea name="message" id="msg" cols="10" rows="9" class="form-controlcontact bg-light" placeholder="Your Name"></textarea> 
                            </div> */}
                        </div>
                    </div>
                    <div class="d-flex flex-row justify-content-center w-100">
                        </div>
                </div>
            </div>
        </form>
    </div>
</div>
            </div>
        )
    }
}

export default Contact;