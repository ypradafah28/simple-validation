import React, { useState } from 'react'

function Login() {

    const [user, setUser] = useState("")
    const [userErr, setUserErr] = useState(false)
    const [pass, setPass] = useState("")
    const [passErr, setPassErr] = useState(false)
    function userHandler(e) {
        let target = e.target.value
        if (target.length < 5) {
            setUserErr(true)
        }
        else {
            setUserErr(false)
        }
        setUser(target)
    } 
    function passHandler(e) {
        let target = e.target.value
        if (target.length < 5) {
            setPassErr(true)
        }
        else {
            setPassErr(false)
        }
        setPass(target)
    }
    function loginHandler(e) {
        if(user.length < 4 || pass.length < 4){
            alert("Invalid data")
        }
        else{
            alert("Login berhasil")
        }
        e.preventDefault()
    }
    return (
        <div className='p-10'>
            <form onSubmit={loginHandler} className='flex-row gap-5'>
                <input className='ring-2 ring-blue-500 mx-10 py-2 px-3' onChange={userHandler} type="text" placeholder='Username' name="" id="" />
                {userErr ? <span className='mx-5'>Invalid Data</span> : null}
                <input className='ring-2 ring-blue-500 py-2 px-3' type="password" onChange={passHandler} placeholder='Password' name="" id="" />
                {passErr ? <span className='mx-5'>Invalid Data</span> : null}
                <button className='bg-blue-700 rounded-md py-2 px-5 mx-5 text-white' type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login
