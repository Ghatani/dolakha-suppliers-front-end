import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Transaction = () =>{
    const [tdata, setTdata] = useState([]);

    const config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }

    useEffect(() => {
        axios.get("http://localhost:90/transaction/all", config)
            .then(result => {
                //console.log(result.data)
                setTdata(result.data)
            })
            .catch(e => {
                console.log(e)
            })
    }, []);

    const deletetransaction = (tid) => {
        //const pro_data = {tid}
        // console.log(tid)
        axios.delete("http://localhost:90/record/delete/" + tid, config)
            .then(result => { console.log(result.data) })
            .catch()
    }

    return(
        <div class="container">
            <div class="card-deck row">

            {tdata.map(singleData=>{
                return(
                    <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="card">



                        {/* <!--Card content--> */}
                        <div class="card-body">
                            <h4 class="card-title">{singleData.username}</h4>
                            <p class="card-text pd">
                                Type : {singleData.transName} <hr></hr>
                                Date : {singleData.transDate} <hr></hr>
                                Amount : {singleData.transAmount} <hr></hr>
                            </p>
                            <button type="button" class="btn btn-light-blue btn-md">Read more</button>
                        </div>
                    </div>
                    </div>

                )
            })}
                {/* Demo */}
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="card">

                        {/* <!--Card content--> */}
                        <div class="card-body">
                            <h4 class="card-title">Transaction</h4>
                            <p class="card-text pd">
                                Type : Salary <hr></hr>
                                Date : 2022-02-10 <hr></hr>
                                Amount : 15000 <hr></hr>
                            </p>
                            <button type="button" class="btn btn-light-blue btn-md">Read more</button>
                        </div>
                    </div>
                </div>
                {/* --- */}

            </div>
        </div>

    )
}

export default Transaction;