import React from 'react'

export default function Homepage({setLogin}) {
    const handleLogout = ()=>{
        setLogin(false)
    }
    return (
        <>
            <h1>홈페이지에 오신 것을 환영합니다!</h1>
            <button onClick={handleLogout}>로그아웃</button>
        </>
    )
}