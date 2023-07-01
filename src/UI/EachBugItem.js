import React, { useState } from "react";
import '../App.css';
import store from "../store/store";
import { ListGroup, Badge } from "react-bootstrap";

import { bugRESOLVED } from "../store/actionCreator";



const EachBugItem = (props) => {
    
    return <div>
        <ListGroup as="ol" >
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">

                    <div className="fw-bold">{props.bug.id.slice(0, 4)}{'- '}{props.bug.description} {'   '}</div>
                    <div>{props.bug.inputType} </div>
                    
                </div>
            </ListGroup.Item>
        </ListGroup>

    </div>
}



export default EachBugItem

