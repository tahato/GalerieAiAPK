import e from "express";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";

const Try = () => {
    const [file, setFile] = useState();
// const drop=(e)=>{
//     e.preventDefault()
//     useCallback(() => {
//     setFile(URL.createObjectURL(e.target.files[0]));
//   }, []);
// }


    function handleChange(e) {
        console.log(e);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <div  style={{width:"300px",height:"300px",backgroundColor:"purple"}} >
             <h2>Add Image:</h2>
            <input type="file" onChange={handleChange} />
            <img src={file} />
        </div>
    );
};

export default Try;