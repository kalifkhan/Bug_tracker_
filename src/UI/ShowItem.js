import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from 'react-redux';

const ShowItem = () => {
    const bugs = useSelector((state) => state);

    const dis = bugs.map((bug, index) => (<li key={index}> {bug.id} {bug.description} {bug.inputType} </li>))


    return <div>
        <Container>
            {dis}
        </Container>

    </div>
}


export default ShowItem