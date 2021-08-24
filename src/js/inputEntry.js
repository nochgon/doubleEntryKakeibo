import React, {useState} from "react";


export function InputEntry(props) {
    const [titleDebt, setTitleDebt] = useState('');
    const [amountDebt, setAmountDebt] = useState(0);
    const [titleCredit, setTitleCredit] = useState('');
    const [amountCredit, setAmountCredit] = useState(0);

    return (
        <div style={{}}>
            <label>借方　</label>
            <input name="titleDebt" value={titleDebt} onChange={(event) => setTitleDebt(event.target.value)}/>
            <input name="amountDebt" value={amountDebt} onChange={(event) => setAmountDebt(event.target.value)}/><br/>
            <label>貸方　</label>
            <input name="titleCredit" value={titleCredit}s onChange={(event) => setTitleCredit(event.target.value)}/>
            <input name="amountCredit" value={amountCredit} onChange={(event) => setAmountCredit(event.target.value)}/><br/>
            <p style={{alignItems: 'center'}}>
                <button onClick={() => {
                    props.repository.add(titleDebt, parseFloat(amountDebt), titleCredit, parseFloat(amountCredit));
                    props.setDebt(props.repository.get_debt())
                    props.setCredit(props.repository.get_credit())
                    if (props.functionClose){props.functionClose()}
                }}>add</button>
                <button onClick={() => {
                    props.functionClose()
                }}>close</button>
            </p>
        </div>

    )
}