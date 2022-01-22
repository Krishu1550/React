import React, {useState} from 'react';
const Content = (props) => {

    const handleup=()=>{
       let newText=text.toUpperCase();
         setText(newText);
        alert("hello sir ");
    }
    const handlecopy=()=>
    {
        navigator.clipboard.writeText(text);
        alert("Copied");
    }
    const handleclear=()=>
    {
     let newText="";
     setText(newText);
     alert("Clear");
    }
    const handlespace=()=>{
        
    }
    const handlelo=()=>
    {
     let newText=text.toLowerCase();
     setText(newText);
     alert("Changed into lowerCase");
    }
    const handlechange=(event)=>{
        
        setText(event.target.value);
        
    }
         const [text,setText] = useState('');
    return (
        <>

            <div className="container">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1"  className="form-label my-2 mx-5">
                    <h1 style={{color:props.mode==="dark"?"white":"black"}}>Enter Text For manipulation </h1></label>
                     <textarea className={`form-control `} style={{backgroundColor:props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"black"}} value={text} onChange={handlechange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button type="button" className={`btn btn-outline-${props.mode==="dark"?"light":"success"} mx-2 my-2`} onClick={handleup} >Change into LowerCase</button>
                <button type="button" className={`btn btn-outline-${props.mode==="dark"?"light":"success"} mx-2 my-2`} onClick={handlelo} >Change into LowerCase</button>
                <button type="button" className={`btn btn-outline-${props.mode==="dark"?"light":"success"} mx-2 my-2`} onClick={handlespace}>Remove Whitespace</button>
                <button type="button" className={`btn btn-outline-${props.mode==="dark"?"light":"success"} mx-2 my-2`} onClick={handleclear}>Clear</button>
                <button type="button" className={`btn btn-outline-${props.mode==="dark"?"light":"success"} mx-2 my-2`} onClick={handlecopy}>Copy</button>
            </div>
        </>
    );
}
export default Content;
