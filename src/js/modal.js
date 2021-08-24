import React, { useState } from "react";

const styleBackground = {
    //
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}
const styleModal = {
    zIndex: '2',
    width: '80%',
    padding: '1em',
    background: '#fff'
}

export function Modal(props) {
    if (props.isShowModal){
        return (
            <div style={styleBackground}>
                <div style={styleModal}>
                    {props.childComponent}
                </div>
            </div>
        )                
    } else {
        return null
    }
}