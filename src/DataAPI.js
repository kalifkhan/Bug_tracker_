import React, { useEffect, useState } from "react"
import axios from "axios";
import EachUser from "./EachUser";



const DataAPI=()=>{
    const [data , setData] = useState([]);
    
    const fetchData =()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then( response => { setData(response.data)});
    }
    useEffect( ()=>{
        fetchData();


    } , [0] );

    const showData = data.map( (dt , index) => (<EachUser dt= {dt} key={index}> </EachUser> ));
    console.log(data);
    console.log(showData);
    return <div>
            <h2 > List Items  </h2>
            {showData}  
    </div>
}

export default DataAPI

