import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';


const Item = styled.div`
  margin: 60px auto;

  ul{
    padding: 10px;
  }

  li{
    margin: 20px 0;
    padding: 10px;
    border: 1px solid black;
    box-sizing: border-box;
    border-radius: 10px;
    list-style: none;
    box-shadow: 4px 4px 6px rgba(0,0,0,0.1);
  }
`



export default function NationList() {

  const [nations, setNations] = useState([]);
  const [url,setUrl] = useState("http://localhost:3000/nations")


  // fetch
  // useEffect(()=>{
  //   fetch("http://localhost:3000/nations")
  //     .then(response => {
  //       // http 상태코드가 200번가 아닐 경우
  //       if(!response.ok){
  //         throw new Error('네트워크 응답에 문제가 있다.')
  //       }
  //       return response.json()
  //     }
  //     ).then(json => setNations(json))
  //     .catch((error)=>{
  //       console.error('데이터를 가져오는 데 문제가 발생했다.',error)
  //     })
  // },[])
  // // 무한 호출 막기


  // async await
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("네트워크 응답에 문제가 있습니다.");
            }
            const json = await response.json();

            setNations(json);
        } catch (error) {
            console.error('데이터를 가져오는데 문제가 발생했습니다 : ', error);
        }
    }

    fetchData();
  }, [url]);

  console.log(nations)

  return(
    <Item>
      <h2>나라 목록</h2>

      <ul>
        {nations.map((nation)=>(
            <li key={nation.id}>
            <h3>나라 이름 : {nation.title}</h3>
            <p>인구 수 : {nation.population}</p>
          </li>
        ))}
      </ul>
      <div>
        {/* ?loc=europe : json서버 기능 */}
        {/* loc의 값이 europe인 데이터만 전송하게 한다 */}
        <button onClick={()=>{setUrl("http://localhost:3000/nations?loc=europe")}}>유럽목록</button>
        <button onClick={()=>{setUrl("http://localhost:3000/nations")}}>전체목록</button>
      </div>
    </Item>
  )
}