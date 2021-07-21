import React from "react";
import ReactDOM from "react-dom";
import {DualTable} from "./mergeTable";
import {DualEntry} from "./dualEntry";
import {ObjectRepository} from "./repository/objectRepository"

/*
const listLeft = ["aaa", "bbb"];
const listRight = ["ccc", "ddd", "eee"];
*/

const debt = {"食費": 10000, "書籍": 7000, "小物": 2000, "交通費": 1000};
const credit = {"現金": 10000, "Suica": 10000}

const styleTable = {
    border: "solid 1px"
};

let repository = new ObjectRepository(debt, credit);

class Layout extends React.Component {
    render() {
        return (
            <div>
                <br></br>
                <DualEntry debt={repository._debt} credit={repository._credit} styleTable={styleTable} />
            </div>
        )
    }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);

//<DualTable headLeft={"test1"} headRight={"test2"} listLeft={listLeft} listRight={listRight} style={tableStyle()}/>
