import React, { useState } from "react";
import '../App.css';

import { Container, Col, Row, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import store from "../store/store";
import { bugRESOLVED, bugSORTED } from "../store/actionCreator";
import EachBugItem from "./EachBugItem";
import { ListGroup, Badge } from "react-bootstrap";
import CommentSection from "./CommentSection";


const BugList = () => {
    const bugs = useSelector((state) => state);
    const [res, setRes] = useState(true);
    const [enable , setEnable] = useState(false);
    const [commentId , setComId ] = useState();


    const bugResolvedHandle = (id) => {
        store.dispatch(bugRESOLVED(id, res));
        console.log("called resolve function ")
        console.log(store.getState());
    }

    const resHandle = () => {
        store.dispatch(bugSORTED());
        console.log("sorted called");
        console.log(store.getState());

    }
    const comEnable=( id )=>{
        console.log("Comment button enabled");
        setEnable(!enable);
        setComId(id);
        

    }

    const bugsDisplay = bugs.map((bug, index) => (bug.resolved === false &&
        (<React.Fragment >
            <div className="display-flex-bug-button">

           
            <EachBugItem key={index} bug={bug} > </EachBugItem>
            <div bg="light" className="buttons-style" >
                        {/* <button  className="btn btn-secondary custom-button" onClick={() => bugResolvedHandle(bug.id)}> In-Progress </button> */}
                        <button className="button-45" 
                        onClick={() => bugResolvedHandle(bug.id)}> Resolved </button>
                        <button className="button-45"
                        onClick={() => comEnable(bug.id)}> Comment </button>

            </div>
           
            </div>
            { enable && commentId === bug.id && <CommentSection> </CommentSection>}
        </React.Fragment>   
        )));

    const bugsResolved = bugs.map((bug, index) => (bug.resolved === true &&
        <EachBugItem key={index} bug={bug} > </EachBugItem>));

    return <div className="container_body">
        <Container className="bugs-list-container">
            <Row className="buglist-row">
                <Col xs={6} md={6} className="bug-display">
                   <div className="title"> 
                   <h4 > Bug Added list </h4>
                   </div>
                    {bugsDisplay}
                </Col>
                {/* <Col xs={6} md={4} className="bug-inprogress">
                    In-Progress Bug List

                    <ul>

                    </ul>
                </Col> */}
                <Col xs={6} md={6} className="bug-display">
                <div className="title"> 
                   <h4 > Resolved List </h4>
                   </div>
                    {bugsResolved}
                   
                </Col>
            </Row>
        </Container>

    </div>

}


export default BugList