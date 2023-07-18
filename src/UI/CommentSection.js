import React, { useRef, useState } from "react";
import './CommentSection.css'

const CommentSection = () => {
    const [com, setCom] = useState([]);

    const comRef = useRef();

    const subHandle = () => {

        const comment = comRef.current.value;
        if (comment.trim() === '') {
            return;
        }
        console.log("add comment is clicked");
        setCom((prevC) => [...prevC, comment])
        comRef.current.value = "";
    }

    return <div className="container-comment">

        <div >
            <input type="text" ref={comRef} />
            <button onClick={subHandle}>Add Com </button>
        </div>
        <div>
            Comments
            {com.map((cm) => <li>{cm}</li>)}
        </div>
    </div>
}

export default CommentSection
