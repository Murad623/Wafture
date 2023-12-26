import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css"
const SignUp = () =>{
    const navigate = useNavigate()
    const [account,setAccount] = useState({
        Name:"",
        Username:"",
        Email:"",
        Password:"",
        Phone:"",
        Region:""
    })
    const [users,setUsers] = useState([]);
    const getUsers = async(e) =>{
        e.preventDefault();
        try {
            const res = await fetch("https://wafture-mysql-40fce40d5dcc.herokuapp.com/accounts");
            const data = await res.json();
            setUsers(data);
        } catch (err) {
            console.error(err);
        }
    }
    const createAccount = async() =>{
        let unax = true
        let emax = true
        users.forEach((userN)=>{
            if (userN.Username == account.Username) {
                return unax = false
            }
        })
        users.forEach((userE)=>{
            if (userE.Email == account.Email) {
                return emax = false
            }
        })
        if (unax && emax && account.Name != "" && account.Username != "" && account.Email != "" && account.Password.length >= 8) {
            try{
                await fetch("https://wafture-mysql-40fce40d5dcc.herokuapp.com/signup",{
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(account)
                });
                navigate("/login")
            }catch(error){
                console.error(error);
            }
        }else if(!unax && !emax){
            return alert("This username and email already used")
        }else if(!unax){
            return alert("This username already exists")
        }else if(!emax){
            return alert("This email already used")
        }
    }
    const login = ()=>{
        navigate("/login")
    }
    useEffect(()=>{
        createAccount()
    },[users])
    const handleChange =(e)=>{
        setAccount(u=>({...u,[e.target.name]: e.target.value.trim()}))
    }
    return(
        <div className="SignUp">
            <div className='formLbl'>
                <form onSubmit={(e)=>getUsers(e)}>
                    <label>
                        <input className='input2' type="text" onChange={handleChange} placeholder="Name" name="Name" required/>
                    </label>
                    <label>
                        <input className='input2' type="text" onChange={handleChange} placeholder="Username" name="Username" required/>
                    </label>
                    <label>
                        <input className='input2' type="email" onChange={handleChange} placeholder="Email" name="Email" required/>
                    </label>
                    <label>
                        <input className='input2' type="password" onChange={handleChange} placeholder="Password" name="Password" required/>
                    </label>
                    <label>
                        <input className='input2' type="tel" onChange={handleChange} placeholder="Phone" name="Phone"/>
                    </label>
                    <label>
                        <input className='input2' type="text" onChange={handleChange} placeholder="Region" name="Region"/>
                    </label>
                    <div className='btns'>
                        <label>
                            <input className='btn2' onClick={(e)=>getUsers(e)} type="submit" value="Sign up"/>
                        </label>
                        <label>
                            <input className='btn2' type="button" onClick={login} value="Log In"/>
                        </label>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default SignUp