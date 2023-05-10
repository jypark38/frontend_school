import { useState } from 'react';

export default function Counter() {
    const [count,setCount] = useState(0);

    const increase = ()=>{
        setCount(count+1)

        // 이전 상태에 대한 변화를 리액트로부터 보장받을 수 있다.
        setCount((prevCount)=>{
            return prevCount+1
        })
    }

    const decrease = ()=>{
        setCount(count-1)
        setCount((prevCount)=>{
            return prevCount-1
        })
    }

    // setCount를 연속으로 호출해서 이전 상태를 보장받지 못하는 형태
    // -1 만 된다
    const comb = ()=>{
        setCount(count+1)
        setCount(count-1)
    }

    return (
        <div>
            <h1>{`Counter : ${count}`}</h1>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <button onClick={comb}>!</button>
        </div>
    )
}
