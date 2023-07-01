import React from "react";
import './App.css';
import { ListGroup, Badge } from "react-bootstrap";


const EachUser = (props) => {


    return <div>
        <div className="container-eachlist" >
            <ListGroup as="ol" >
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">

                        <div className="fw-bold">{props.dt.id}{'- '}{props.dt.name}</div>
                        <div>{props.dt.address.city} </div>
                        <Badge bg="primary" pill>
                        {props.dt.address.zipcode}
                    </Badge>
                        
                    </div>
                    
                    <Badge bg="dark" pill>
                        <button>
                            <div className="thumb-img">
                                <img className="img-fluid"  src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" />
                            </div>
                        </button>
                    </Badge>
                </ListGroup.Item>
            </ListGroup>
        </div>
    </div>
}

export default EachUser
