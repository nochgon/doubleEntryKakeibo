import React, {useState} from "react";
import ReactDOM from "react-dom";
import {DualEntry} from "./dualEntry";
import {ObjectRepository} from "./repository/objectRepository"
import {Modal} from "./modal";
import {InputEntry} from "./inputEntry"


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
    const [isShowModal, setIsShowModal] = useState(false);

    return (
        <div style={{position: 'relative', left: '50px', top: '30px'}}>
            <DualEntry debt={debt} credit={credit} styleTable={styleTable}/><br/>
            <button onClick={() => {
                setIsShowModal(true)
            }}>記帳</button>
            <Modal isShowModal={isShowModal} setIsShowModal={setIsShowModal} childComponent={
                <dev><InputEntry setDebt={setDebt} setCredit={setCredit} repository={repository} functionClose={() => {setIsShowModal(false)}}/></dev>
            }/>
        </div>
    )
}

const app = document.getElementById('app');
ReactDOM.render(<Layout repository={repository}/>, app);
