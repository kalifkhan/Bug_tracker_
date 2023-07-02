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
    const comEnable=()=>{
        console.log("Comment button enabled");
        setEnable(!enable);
        

    }

    const bugsDisplay = bugs.map((bug, index) => (bug.resolved === false &&
        (<React.Fragment >
            <EachBugItem key={index} bug={bug} > </EachBugItem>
            <Badge bg="light" >
                        <button className="btn btn-secondary custom-button" onClick={() => bugResolvedHandle(bug.id)}> In-Progress </button>
                        <button className="btn btn-secondary  custom-button " onClick={() => bugResolvedHandle(bug.id)}> Resolved </button>
                        <button className="btn btn-secondary  custom-button " 
                        onClick={() => comEnable()}> Comment </button>

            </Badge>
            { enable && <CommentSection> </CommentSection>}
        </React.Fragment>   
        )));

    const bugsSorted = bugs.map((bug, index) => (bug.resolved === true &&
        <EachBugItem key={index} bug={bug} > </EachBugItem>));

    return <div>
        <Container className="bugs-list-container">
            <Row className="buglist-row">
                <Col xs={6} md={4} className="bug-add">
                    Bug Added list
                    {bugsDisplay}
                </Col>
                <Col xs={6} md={4} className="bug-inprogress">
                    In-Progress Bug List

                    <ul>

                    </ul>
                </Col>
                <Col xs={6} md={4} className="bug-resolved">
                    Resolved
                    {bugsSorted}
                   
                </Col>
            </Row>
        </Container>

    </div>

}


export default BugList