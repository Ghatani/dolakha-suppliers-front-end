import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Record = () => {
    const [rdata, setRdata] = useState([]);

    const config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }

    useEffect(() => {
        axios.get("http://localhost:90/record/all", config)
            .then(result => {
                //console.log(result.data)
                setRdata(result.data)
            })
            .catch(e => {
                console.log(e)
            })
    }, []);

    const deleteRecord = (rid) => {
        //const pro_data = {rid}
        // console.log(rid)
        axios.delete("http://localhost:90/record/delete/" + rid, config)
            .then(result => { console.log(result.data) })
            .catch()
    }

    return (

        <div class="container">
            <div class="card-deck row">

            {rdata.map(singleData=>{
                return(
                    <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="card">

                        {/* <!--Card content--> */}
                        <div class="card-body">
                            <h4 class="card-title">1 Card title</h4>
                            <p class="card-text">
                                Some quick example text to buil
                                card's content.</p>
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
                            <h4 class="card-title">1 Card title</h4>
                            <p class="card-text">
                                Some quick example text to build on the card title and make up the bulk of the
                                card's content.</p>
                            <button type="button" class="btn btn-light-blue btn-md">Read more</button>
                        </div>
                    </div>
                </div>
                {/* --- */}

            </div>
        </div>

    )
}

export default Record;