import React, { useRef, useState } from "react";
import './App.css'
import store from "./store/store";
import * as actions from './store/actionTypes'
import { bugADDED, bugREMOVED } from "./store/actionCreator";
import ShowItem from "./UI/ShowItem";
import { Provider, useSelector } from "react-redux/es";
import Header from "./UI/Header";
import BugList from "./UI/BugList";
import { Container, Row } from "react-bootstrap";

const MyRedux = (props) => {
    const inputRef = useRef(null);
    const inputType = useRef(null)

    //const [inputType , setType] = useState('');




    //store.dispatch(bugADDED("BUG1 - Memory full" , "project tpe"))
    store.dispatch(bugREMOVED(1))

    const addHandle = (e) => {
        e.preventDefault();
        const bugInput = inputRef.current.value;
        const bugType = inputType.current.value;

        //console.log(inputRef.current.value)
        //store.dispatch(bugADDED(inputRef.current.value));  
        if (bugInput.length > 0 && bugType.length > 0) {
            store.dispatch(bugADDED(bugInput, bugType));
        }
        console.log(store.getState());
        inputType.current.value = '';
        inputRef.current.value = '';

    }

    console.log(store);
    return <div>
        <h2> </h2>
        <div>
            <Header flag={props.flag} onSubmititing={props.onSubmititing}> </Header>
            <Provider store={store}>
                <BugList> </BugList>
            </Provider>

            <Container className="text-center-bug">
                <Row >
                    <div className="input__container">
                        <label > Enter the Bug <input name="bug" ref={inputRef} /></label>
                        <button onClick={addHandle}> ADD BUG </button>

                        <select className="select" ref={inputType}>
                            <option> Project Bug </option>
                            <option> System Bug </option>
                            <option> Logic Bug </option>
                        </select>

                    </div>

                </Row>
            </Container>



        </div>
    </div>
}

export default MyRedux 