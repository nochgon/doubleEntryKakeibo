import React, {useState} from "react";
import ReactDOM from "react-dom";
import {DualEntry} from "./dualEntry";
import {ObjectRepository} from "./repository/objectRepository"


const debt = {"食費": 10000, "書籍": 7000, "小物": 2000, "交通費": 1000};
const credit = {"現金": 10000, "Suica": 10000}

const repository = new ObjectRepository(debt, credit);

const styleTable = {
    border: "solid 1px"
};

function Layout(props){
    // useStateの準備
    const [debt, setDebt] = useState(props.repository._debt)
    const [credit, setCredit] = useState(props.repository._credit)
    const [titleDebt, setTitleDebt] = useState('');
    const [amountDebt, setAmountDebt] = useState(0);
    const [titleCredit, setTitleCredit] = useState('');
    const [amountCredit, setAmountCredit] = useState(0);

    return (
        <div style={{position: 'relative', left: '50px', top: '30px'}}>
            <DualEntry debt={debt} credit={credit} styleTable={styleTable}/><br/>
            <div style={{}}>
                <label>借方　</label>
                <input name="titleDebt" value={titleDebt} onChange={(event) => setTitleDebt(event.target.value)}/>
                <input name="amountDebt" value={amountDebt} onChange={(event) => setAmountDebt(event.target.value)}/><br/>
                <label>貸方　</label>
                <input name="titleCredit" value={titleCredit} onChange={(event) => setTitleCredit(event.target.value)}/>
                <input name="amountCredit" value={amountCredit} onChange={(event) => setAmountCredit(event.target.value)}/><br/>
                <button onClick={() => {
                    props.repository.add(titleDebt, parseFloat(amountDebt), titleCredit, parseFloat(amountCredit));
                    setDebt(props.repository.get_debt())
                    setCredit(props.repository.get_credit())
                }}>add</button>
            </div>
        </div>
    )
}

const app = document.getElementById('app');
ReactDOM.render(<Layout repository={repository}/>, app);
