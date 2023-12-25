import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { logIn } from '../store/accountSlice';
import "./LogIn.css"
import { useNavigate } from 'react-router-dom'
const LogIn = () =>{
    const dispatch = useDispatch()
    const [user,setUser] = useState({})
    const [account,setAccount] = useState({
        UOE:"",
        Password:"",
    })
    const [users,setUsers] = useState([])
    const [errMsg,setErrMsg] = useState("")
    const navigate = useNavigate()
    const handleChange =(e)=>{
        setAccount(u=>({...u,[e.target.name]: e.target.value}))
    }
    const getUsers = async(e)=>{
        e.preventDefault();
        try {
            const res = await fetch("https://wafture-mysql-40fce40d5dcc.herokuapp.com/accounts");
            const data = await res.json();
            setUsers(data);

        } catch (err) {
            console.error(err);
        }
    }
    const createNewAccount = ()=>{
        navigate("/signup")
    }
    useEffect(()=>{
        users.forEach((user)=>{
            if((user.Username == account.UOE || user.Email == account.UOE) && user.Password == account.Password){
                setUser(user)
                dispatch(logIn(user))
                setErrMsg("")
                navigate('/')
            }else if(!(user.Username == account.UOE || user.Email == account.UOE) && user.Password != account.Password){
                setErrMsg("wat")
            }else if(!(user.Username == account.UOE  || user.Email == account.UOE) && user.Password == account.Password){
                setErrMsg("wue");
            }else if((user.Username == account.UOE  || user.Email == account.UOE) && user.Password != account.Password){
                setErrMsg("wpw")
            }
        })
    },[users])
    useEffect(()=>{
        const wuePar = document.querySelector("#wue");
        const wpwPar = document.querySelector("#wpw");
        switch (errMsg) {
            case 'wue':
                wuePar.style.display = 'block';
                wpwPar.style.display = 'none';
                break;
            case 'wpw':
                wpwPar.style.display = 'block';
                wuePar.style.display = 'none';
                break;
            case 'wat':
                wuePar.style.display = 'block';
                wpwPar.style.display = 'block';
                break;
            default:
                wuePar.style.display = 'none';
                wpwPar.style.display = 'none';
                break;
        }
    },[errMsg])
  return (
    <div className='LogIn'>
        <div className='formLbl'>
            <form onSubmit={getUsers}>
                <label>
                    <input className='input2' type="text" onChange={handleChange} placeholder='Username or Email' name='UOE'/>
                </label>
                <label>
                    <input className='input2' type="password" onChange={handleChange} placeholder='Password' name='Password'/>
                </label>
                    <p className='errMessage' id='wue'>Wrong username or email</p>
                    <p className='errMessage' id='wpw'>Wrong password</p>
                <div className='btns'>
                    <label>
                        <input className='btn2' type="submit" onClick={getUsers} value='Log In'/>
                    </label>
                    <label>
                        <input className='btn2' type="button" onClick={createNewAccount} value='Sign up'/>
                    </label>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LogIn