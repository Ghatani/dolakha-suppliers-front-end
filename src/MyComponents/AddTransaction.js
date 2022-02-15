import { useState } from "react";
import axios from "axios";

const Addtransaction = () => {
    const [transName, settransName] = useState('');
    const [transDate, settransDate] = useState('');
    const [transAmount, settransAmount] = useState('');
    const [msg, setMsg] = useState('');

    const config = {
        header: {
            Authorization: 'Bearer' + localStorage.getItem('token')
        }
    }

    const addtransaction = (e) => {
        e.preventDefault();
        // const transData = { transName, transDate, transAmount};
        const transData = new FormData();
        
        transData.append('transName', transName);
        transData.append('transDate', transDate);
        transData.append('transAmount', transAmount);

        
        axios.post("http://localhost:90/transaction/insert", transData, config)
            .then(result => setMsg(result.data.message))
            .catch()
    }

    return (
        <div className="container items"> 
            <div className="form">
                <div className="title">Welcome</div>
                <div className="subtitle">Let's add transaction!</div>

                <div className="input-container ic1">
                    <input id="transName" className="input" type="text" placeholder=" " 
                    value={transName}
                    onChange={(e)=>settransName(e.target.value)}/>
                    <div className="cut"></div>
                    <label htmlFor="transName" className="placeholderM">Transaction Type</label>
                </div>

                <div className="input-container ic2">
                    <input id="transDate" className="input" type="date" placeholder=" " 
                    value={transDate}
                    onChange={(e)=>settransDate(e.target.value)}/>
                    <div className="cut"></div>
                    <label htmlFor="transDate" className="placeholderM">Date</label>
                </div>

                <div className="input-container ic2">
                    <input id="transAmount" className="input" type="number" placeholder=" " 
                    value={transAmount}
                    onChange={(e)=>settransAmount(e.target.value)}/>
                    <div className="cut cut-short"></div>
                    <label htmlFor="transAmount" className="placeholderM">Amount</label>
                </div>        
                <button type="text" className="submit" onClick={addtransaction}>Submit</button>
            </div>
            {transName} {transDate} {transAmount} {msg}
            </div>
    )

}

export default Addtransaction;