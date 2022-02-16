import { useState } from "react";
import axios from "axios";

const Addmaterial = () => {
    const [materialName, setMaterialName] = useState('');
    const [materialPrice, setMaterialPrice] = useState('');
    const [materialQuantity, setMaterialQuantity] = useState('');
    const [msg, setMsg] = useState('');

    

    const addmaterials = (e) => {
        e.preventDefault();

        const config = {
            header: {
                Authorization: 'Bearer' + localStorage.getItem('token')
            }
        }

        const materialData = {materialName, materialPrice, materialQuantity};

        // const materialData = new FormData();
        // materialData.append('materialName', materialName);
        // materialData.append('materialPrice', materialPrice);
        // materialData.append('materialQuantity', materialQuantity);
        console.log(materialData);
        //console.log(localStorage.getItem('token'))

        axios.post("http://localhost:90/material/add", materialData, config)
        // .then(result => setMsg(result.data.message))
        // .catch()
        .then(result=>{
            if(result.data.success){
                // data inserted
                setMsg("Product Inserted Successfully!!");

            }
            else{
                setMsg("Something went wrong!!");
            }
        })
        .catch(e=>{
            setMsg("Something went wrong!!");
        });
    }
    
    return (
        <div className="container items">
            <div className="form">
                <div className="title">Welcome</div>
                <div className="subtitle">Let's add your material!</div>
                
                <div className="input-container ic1">
                    <input id="MaterialName" className="input" type="text" placeholder=" " 
                    value={materialName}
                    onChange={e=>{setMaterialName(e.target.value)}}/>
                    <div className="cut"></div>
                    <label htmlFor="MaterialName" className="placeholderM">Material Name</label>
                </div>
                <div className="input-container ic2">
                    <input id="MaterialPrice" className="input" type="number" placeholder=" " 
                    value={materialPrice}
                    onChange={e=>{setMaterialPrice(e.target.value)}}/>
                    <div className="cut"></div>
                    <label htmlFor="MaterialPrice" className="placeholderM">Material Price</label>
                </div>
                <div className="input-container ic2">
                    <input id="MaterialQuantity" className="input" type="number" placeholder=" " 
                    value={materialQuantity}
                    onChange={e=>{setMaterialQuantity(e.target.value)}}/>
                    <div className="cut cut-short"></div>
                    <label htmlFor="MaterialQuantity" className="placeholderM">Quantity</label>
                </div>
                <button type="text" className="submit" onClick={addmaterials}>Submit</button>
                
                <div className="subtitle">              
                {msg} </div>
            </div>


            {/* <div classNameName="row">
                <div classNameName="col-md-4"></div>
                <div classNameName="col-md-4">
                    <h2 classNameName="heading-h2-all">Add Material</h2>
                    <form>
                        <div classNameName="form-group">
                            <label>Material Name</label>
                            <input type="text" classNamename="form-control" 
                            value={MaterialName}
                            onChange={(e)=>setMaterialName(e.target.value)} />
                        </div>
                        <div classNameName="form-group">
                            <label>Material Price</label>
                            <input type="text" classNamename="form-control"
                            value={MaterialPrice}
                            onChange={(e)=>setMaterialPrice(e.target.value)} />
                        </div>
                        <div classNameName="form-group">
                            <label>Material Quantity</label>
                            <input type="number" classNamename="form-control" 
                            value={MaterialQuantity}
                            onChange={(e)=>setMaterialQuantity(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={addmaterial}>Submit</button>
                    </form>
                    {msg}
                </div>
            </div> */}

        </div>
    )
}

export default Addmaterial;