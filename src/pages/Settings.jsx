import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logIn, selectAccout } from '../store/accountSlice'
import "./Settings.css"
import { useNavigate } from 'react-router-dom'
const Settings = () => {
    const slAcc = useSelector(selectAccout)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [account,setAccount] = useState({})
    const [user,setUser] = useState([]);
    const [oldPass,setOldPass] = useState("")
    const [newPass,setNewPass] = useState("")
    const [confirmPass,setConfirmPass] = useState("")
    const [updateBtnValid, setUpdateBtnValid] = useState(true)
    const getUser = async() =>{
        try {
            const res = await fetch("https://wafture-mysql-40fce40d5dcc.herokuapp.com/accounts");
            const data = await res.json();
            setUser(data);
        } catch (err) {
            console.error(err);
        }
    }
    useEffect(()=>{
        setAccount(slAcc)
        setOldPass(slAcc.Password)
        if (slAcc.ID == undefined) {
            navigate("/")
        }
    },[])
    const changeHandle = (e) =>{
        setAccount(u=>({...u,[e.target.name]: e.target.value}))
    }
    const curentPass = (e) =>{
        if(e.target.value == slAcc.Password){
            e.target.style.backgroundColor = "rgb(0,255,0)"
        }else{
            e.target.style.backgroundColor = "rgb(255,0,0)"
        }
    }
    useEffect(()=>{
        const confPass = document.querySelector("#confPass")
        if(confirmPass.length > 7){
            if (confirmPass == newPass) {
                confPass.style.backgroundColor = "rgb(0,255,0)"
                setAccount(u=>({...u,["Password"]: newPass}))
                setUpdateBtnValid(false)
            }else{
                setAccount(u=>({...u,["Password"]: oldPass}))
                confPass.style.backgroundColor = "rgb(255,0,0)"
                setUpdateBtnValid(true)
            }
        }else{
            setUpdateBtnValid(true)
            setAccount(u=>({...u,["Password"]: oldPass}))
            confPass.style.backgroundColor = "rgb(255, 187, 0)"
        }
    },[confirmPass])
    useEffect(()=>{
        const confPass = document.querySelector("#confPass")
        if(confirmPass.length > 7){
            if (confirmPass == newPass) {
                confPass.style.backgroundColor = "rgb(0,255,0)"
                setAccount(u=>({...u,["Password"]: newPass}))
                setUpdateBtnValid(false)
            }else{
                setAccount(u=>({...u,["Password"]: oldPass}))
                confPass.style.backgroundColor = "rgb(255,0,0)"
                setUpdateBtnValid(true)
            }
        }else{
            setUpdateBtnValid(true)
            setAccount(u=>({...u,["Password"]: oldPass}))
            confPass.style.backgroundColor = "rgb(255, 187, 0)"
        }
    },[newPass])
    useEffect(()=>{
        getUser()
        if (account.Name != slAcc.Name || 
            account.Username != slAcc.Username || 
            account.Email != slAcc.Email ||
            account.Password != slAcc.Password || 
            account.Phone != slAcc.Phone || 
            account.Region != slAcc.Region) {
            if (account.Password != undefined && account.Password.length == 0) {
                setAccount(u=>({...u,["Password"]: oldPass}))
            }
            else{
                setUpdateBtnValid(false)
            }
        }else{
            setUpdateBtnValid(true)
        }
    },[account])
    const updateAcc = async(e) =>{
        if(confirmPass == newPass){
            if (!updateBtnValid) {
                if (account.Name != "" && account.Username != "" && account.Email != "" && account.Password.length >= 8) {
                    try{
                        await fetch("https://wafture-mysql-40fce40d5dcc.herokuapp.com/update",{
                            method: 'POST',
                            headers: {
                                'Content-type': 'application/json'
                            },
                            body: JSON.stringify(account)
                        });
                        dispatch(logIn(account))
                    }catch(error){
                        console.error(error);
                    }
                }
            }
        }
        e.target.style.backgroundColor = "rgb(255, 187, 0)"
        setUpdateBtnValid(true)
    }
    const updateBtnEnter = (e) =>{
        if (!updateBtnValid) {
            e.target.style.backgroundColor = "rgb(128, 255, 0)"
            e.target.style.scale = "1.05"
            e.target.style.boxShadow = "2px 2px"
        }
    }
    const updateBtnLeave = (e) =>{
        e.target.style.scale = "1"
        e.target.style.boxShadow = "0 0"
        e.target.style.backgroundColor = "rgb(255, 187, 0)"
    }
    const deleteAcc = () =>{
        const sets = document.querySelectorAll("#setAccount")
        const del = document.querySelector("#deleteAccount")
        sets.forEach(item =>{
            item.style.display = "none"
        })
        del.style.display = "flex"
    }
    const goBack = () =>{
        const sets = document.querySelectorAll("#setAccount")
        const del = document.querySelector("#deleteAccount")
        sets.forEach(item =>{
            item.style.display = "flex"
        })
        del.style.display = "none"
    }
    const confirmDelete = async() =>{
        try{
            await fetch("https://wafture-mysql-40fce40d5dcc.herokuapp.com/delete",{
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(account)
            });
            dispatch(logIn({}))
            navigate('/')
        }catch(error){
            console.error(error);
        }
    }
    return (
        <div className='Settings'>
            <div className='header' id='setAccount'>
                <h1 className='headlineS'>Settings</h1>
                <input className='sendBtn' id='update' type="submit" onMouseEnter={updateBtnEnter} onMouseLeave={updateBtnLeave} onClick={updateAcc} value="Update" disabled={updateBtnValid}/>
            </div>
            <div className='SettingsDetails' id='setAccount'>
                <div className='setBlock'>
                    <h2 className='headline'>Name</h2>
                    <input className='accountDetail' type="text" name='Name' value={account.Name} onChange={changeHandle}/>
                </div>
                <div className='setBlock'>
                    <h2 className='headline'>Username</h2>
                    <input className='accountDetail' type="text" name='Username' value={account.Username} onChange={changeHandle}/>
                </div>
                <div className='setBlock'>
                    <h2 className='headline'>Change password</h2>
                    <div className='passBlock'>
                        <input className='passArea' type="password" name='password' placeholder='Curent password' onChange={curentPass}/>
                        <input className='passArea' type="password" name='password' placeholder='New password' value={newPass} onChange={e => setNewPass(e.target.value.trim())}/>
                        <input className='passArea' id="confPass" type="password" name='password' placeholder='Confirm password' value={confirmPass} onChange={e => setConfirmPass(e.target.value.trim())}/>
                    </div>
                </div>
                <div className='setBlock'>
                    <h2 className='headline'>Email</h2>
                    <input className='accountDetail' type='email' name='Email' value={account.Email} onChange={changeHandle}/>
                </div>
                <div className='setBlock'>
                    <h2 className='headline'>Phone</h2>
                    <input className='accountDetail' type='tel' name='Phone' value={account.Phone} onChange={changeHandle}/>
                </div>
                <div className='setBlock'>
                    <h2 className='headline'>Region</h2>
                    <input className='accountDetail' type='text' name='Region' value={account.Region} onChange={changeHandle}/>
                </div>
                <div className='setBlock'>
                    <h2 className='headlineD'>Delete account</h2>
                    <input className='delete' type="submit" value="Delete" onClick={deleteAcc}/>
                </div>
            </div>
            <div className='conDelete' id='deleteAccount'>
                <div className='confirm'>
                    <h1 className='hlD'>Delete</h1>
                    <p id='ays'>Are you sure ?</p>
                    <div className='ans'>
                        <input className='sendBtn' id='goback' type="submit" name='no' onClick={goBack} value="No"/>
                        <input className='sendBtn' id='deleteAcc' type="submit" name='yes' onClick={confirmDelete} value="Yes"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings