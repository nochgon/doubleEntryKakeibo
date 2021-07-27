import React, {useState} from "react";

const styleHeader = {
    border: "solid 1px"
}
const styleAccount = {
    width: 80
}
const styleAmount = {
    width: 40,
    textAlign: "right"
}
const styleSeparator = {
    border: "solid 1px"
}

export function DualEntry(props){
    /*
    // useStateの準備
    const [debt, setDebt] = useState(props.repository._debt)
    const [credit, setCredit] = useState(props.repository._credit)
    */
    const listDebt = Object.entries(props.debt);
    const listCredit = Object.entries(props.credit);

    const lengthTable = listDebt.length >= listCredit.length ? listDebt.length : listCredit.length;

    const RowsJSX = [];
    for (var i = 0; i < lengthTable; i++) {
        RowsJSX.push(
            <tr key={i}>
                <td style={styleAccount}>{i < listDebt.length ? listDebt[i][0] : ""}</td>
                <td style={styleAmount}>{i < listDebt.length ? listDebt[i][1] : ""}</td>
                <td style={styleSeparator}></td>
                <td style={styleAccount}>{i < listCredit.length ? listCredit[i][0] : ""}</td>
                <td style={styleAmount}>{i < listCredit.length ? listCredit[i][1] : ""}</td>
            </tr>
        )
    }

    return (
        <table style={props.styleTable}>
            <thead style={styleHeader}>
                <tr>
                    <th>{"借方"}</th>
                    <th></th>
                    <th style={{border: "solid 1px"}}></th>
                    <th>{"貸方"}</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>{RowsJSX}</tbody>
        </table>
    )
};
