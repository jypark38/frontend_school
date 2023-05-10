export default function Product() {
    const productList = {
        products: [
            {
                title: "개발자 무릎 담요",
                price: 17500,
                id: 101,
            },
            {
                title: "Hack Your Life 개발자 노트북 파우치",
                price: 29000,
                id: 102,
            },
            {
                title: "우당탕탕 라이켓의 실험실 스티커북",
                price: 29000,
                id: 103,
            },
            {
                title: "버그를 Java라 버그잡는 개리씨 키링",
                price: 29000,
                id: 104,
            },
        ],
    };

    // 이런 방식은 리액트를 무시하는 방식
    const deleteClick = (e)=>{
        // e.currentTarget.parentNode.parentNode.removeChild(e.currentTarget.parentNode)
        e.target.closest('li').remove()
    }

    const productComponentArray = productList.products.map((item,idx)=>(
        <li key={item.id}>
            <h2>{idx+1} {item.title}</h2>
            <p>{`${item.price}원`}</p>
            <button onClick={deleteClick}>삭제</button>
        </li>
    ))


    return (
        <ul >
            {productComponentArray}
        </ul>
    )
}
