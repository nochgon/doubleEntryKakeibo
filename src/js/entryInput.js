import React, {useState} from "react"

export function EntryInput(props){
    //useStateの準備
    const [titleDebt, setTitleDebt] = useState('')
    const [titleCredit, setTitleCredit] = useState('')
    const [amountDebt, setAmountDebt] = useState(0)
    const [amountCredit, setAmountCredit] = useState(0)

    return (
        <div style={{}}>
            <label>借方　</label>
            <input></input>
            <input></input><br></br>
            <label>貸方　</label>
            <input></input>
            <input></input><br></br>
            <button>add</button>
        </div>
    )
};
