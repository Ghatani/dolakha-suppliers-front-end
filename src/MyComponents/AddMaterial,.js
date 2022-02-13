import { useState } from "react";
import axios from "axios";

const Addmaterial = () => {
    const [MaterialName, setMaterialName] = useState('');
    const [MaterialPrice, setMaterialPrice] = useState('');
    const [MaterialQuantity, setMaterialQuantity] = useState('');
    const [msg, setMsg] = useState('');
    const addmaterial = (e) => {
        e.preventDefault();
        const materialData = { MaterialName, MaterialPrice, MaterialQuantity };
        const config = {
            header: {
                Authorization: 'Bearer' + localStorage.getItem('token')
            }
        }
        axios.post("http://localhost:90/material/add", materialData, config)
            .then(result => setMsg(result.data.message))
            .catch()
    }

    return (
        <div className="container items">
            <div class="form">
                <div class="title">Welcome</div>
                <div class="subtitle">Let's add your material!</div>
                <div class="input-container ic1">
                    <input id="MaterialName" class="input" type="text" placeholder=" " 
                    value={MaterialName}
                    onChange={(e)=>setMaterialName(e.target.value)}/>
                    <div class="cut"></div>
                    <label for="MaterialName" class="placeholderM">Material Name</label>
                </div>
                <div class="input-container ic2">
                    <input id="MaterialPrice" class="input" type="number" placeholder=" " 
                    value={MaterialPrice}
                    onChange={(e)=>setMaterialPrice(e.target.value)}/>
                    <div class="cut"></div>
                    <label for="MaterialPrice" class="placeholderM">Material Price</label>
                </div>
                <div class="input-container ic2">
                    <input id="MaterialQuantity" class="input" type="number" placeholder=" " 
                    value={MaterialQuantity}
                    onChange={(e)=>setMaterialQuantity(e.target.value)}/>
                    <div class="cut cut-short"></div>
                    <label for="MaterialQuantity" class="placeholderM">Material Quantity</label>
                </div>
                <button type="text" class="submit" onClick={addmaterial}>submit</button>
            </div>


            {/* <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <h2 className="heading-h2-all">Add Material</h2>
                    <form>
                        <div className="form-group">
                            <label>Material Name</label>
                            <input type="text" classname="form-control" 
                            value={MaterialName}
                            onChange={(e)=>setMaterialName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Material Price</label>
                            <input type="text" classname="form-control"
                            value={MaterialPrice}
                            onChange={(e)=>setMaterialPrice(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Material Quantity</label>
                            <input type="number" classname="form-control" 
                            value={MaterialQuantity}
                            onChange={(e)=>setMaterialQuantity(e.target.value)} />
                        </div>
                        <button type="submit" class="btn btn-primary" onClick={addmaterial}>Submit</button>
                    </form>
                    {msg}
                </div>
            </div> */}

        </div>
    )
}

export default Addmaterial;