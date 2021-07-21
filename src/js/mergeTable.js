import React from "react";


export function DualTable(props){
    const listLeft = props.listLeft;
    const listRight = props.listRight;
    const RowsJSX = [];
    const lengthTable = listLeft.length >= listRight.length ? listLeft.length : listRight.length;
    for (var i = 0; i < lengthTable; i++) {
        RowsJSX.push(
            <tr key={i}>
                <td>{i < listLeft.length ? listLeft[i] : ""}</td>
                <td>{i < listRight.length ? listRight[i] : ""}</td>
            </tr>
        )
    }
    return (
        <table style={props.style}>
            <thead>
                <th>{props.headLeft}</th>
                <th>{props.headRight}</th>
            </thead>
            <tbody>{RowsJSX}</tbody>
        </table>
    )
};
