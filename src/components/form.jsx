import React, { useEffect, useState } from "react";
import './form.css'

const form = () => {
  const data = { name: "", email: "", password: "" };
  const [inputdata, setinputdata] = useState(data);
  const [flage,setflage] = useState(false)
  useEffect(()=>{
      console.log("registrad");
  },[flage])
  const handledata = (e)=>{
    setinputdata({ ...inputdata, [e.target.name]: e.target.value})
    console.log(inputdata)
  }
  const handlesubmit = (e) =>{
    e.preventDefault();
    if(!inputdata.name || !inputdata.email || !inputdata.password){
      alert('All fields are Mandatory')
    }
    else{
       setflage(true)
    }
  }
  return (
    <>
    <pre>{(flage)? <h2 className="ui-define">{inputdata.name},u are registrad Sucessfully</h2> : ""}</pre>
    <form className="container" onSubmit={handlesubmit}>
      <div className="header">
        <h1>Registration Form</h1>
      </div>
      <div>
        <input
          type="text"
          name="name"
          placeholder="input your name"
          value={inputdata.name}
          onChange={handledata}
        />
        <input
          type="email"
          name="email"
          placeholder="input your email"
          value={inputdata.email}
          onChange={handledata}
        />
        <input
          type="password"
          name="password"
          placeholder="input your password"
          value={inputdata.password}
          onChange={handledata}
        />
        <button type="submit">Submit</button>
      </div>
    </form>
    </>
  );
};

export default form;
