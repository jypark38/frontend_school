import { useState } from 'react';

export default function Login({infoUser, setLogin, setModal}){
    const [id,setId] = useState("")
    const [pw,setPw] = useState("")
    
    const handleLoginSubmit = (e)=>{
        e.preventDefault()
        if(id===''){
            alert('아이디를 입력하지 않았음')
        }
        if(pw===''){
            alert('패스워드를 입력하지 않았음')
        }
        // alert(`id : ${id}, pw : ${pw}`)
        if(id === infoUser.idUser && pw === infoUser.pwUser){
            setLogin(true)
            setModal(false)
        }
    }
    
    const handleLoginInput = (e) =>{
        setId(e.target.value)
    }

    const handlePasswordInput = (e) =>{
        setPw(e.target.value)
    }

    return (
    <div>
        <form onSubmit={handleLoginSubmit}>
            <label>
                아이디 : 
                <input id='id' type="text" value={id} onChange={handleLoginInput}/>
            </label>
            <br />
            <label >
                비밀번호 : 
                <input id='pw' type="password" value={pw} onChange={handlePasswordInput}/>
            </label>
            <button type="submit">로그인</button>
        </form>
    </div>
    );
}