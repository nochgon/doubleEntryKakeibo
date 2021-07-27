import React from "react";
import ReactDOM from "react-dom";
import {DualEntry} from "./dualEntry";
import {ObjectRepository} from "./repository/objectRepository"


const debt = {"食費": 10000, "書籍": 7000, "小物": 2000, "交通費": 1000};
const credit = {"現金": 10000, "Suica": 10000}

const styleTable = {
    border: "solid 1px"
};

let repository = new ObjectRepository(debt, credit);

class Layout extends React.Component {
    render() {
        return (
            <div style={{position: 'relative', left: '50px'}}>
                <br></br>
                <DualEntry repository={repository} styleTable={styleTable} />
                <br></br>
                <input></input><input></input><br></br>
                <button>add</button>
            </div>
        )
    }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);
