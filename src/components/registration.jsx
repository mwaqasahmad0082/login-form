import React, { useState } from 'react'

const Firstform = () => {
    const [formvalue,setformvalue] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
    });
  return (
    <form onSubmit={ (e)=> {
        e.preventDefault();
        // console.log(JSON.stringify(formvalue));
        console.log(formvalue);
        if(!formvalue.firstName || !formvalue.lastName || !formvalue.email || !formvalue.phone || !formvalue.password){
            alert("all fields")
        }
    }}>
        <h1>first form</h1>
        <input type="text" placeholder='inter first name' name='firstName' onChange={ (e) => { setformvalue ({ ...formvalue,firstName:e.target.value});
    }}/>
        <input type="text" placeholder='inter last name' name='lastName' onChange={ (e) => {setformvalue({ ...formvalue,lastName:e.target.value});
    }}/>
        <input type="email" placeholder='inter your Email' name='email'onChange={(e)=> {setformvalue({ ...formvalue,email:e.target.value});
    }}/>
        <input type="number" placeholder='inter your phone Number' name='phone' onChange={ (e) => { setformvalue ({ ...formvalue,phone:e.target.value});
    }}/>
        <input type="password" placeholder='inter your password' name='password'onChange={ (e) => { setformvalue ({ ...formvalue,password:e.target.value});
    }}/>

        <button type='Submit'>Submit your form</button>
    </form>
  )
}

export default Firstform;