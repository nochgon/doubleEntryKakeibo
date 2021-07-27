import React, {useState} from "react";
import ReactDOM from "react-dom";
import {DualEntry} from "./dualEntry";
import {EntryInput} from "./entryInput";
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

    return (
        <div style={{position: 'relative', left: '50px'}}>
            <br></br>
            <DualEntry debt={debt} credit={credit} styleTable={styleTable} /><br></br>
            <EntryInput repository={repository} />
        </div>
    )
}

const app = document.getElementById('app');
ReactDOM.render(<Layout repository={repository}/>, app);
