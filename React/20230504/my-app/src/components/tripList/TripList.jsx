import './TripList.css'

let list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: true },
    { no: 3, area: "목포", visited: false },
    { no: 4, area: "제주도", visited: false },
];

function List(item){
    return (<li key={item.item.no} className={item.item.visited ? 'list-area-item active' : 'list-area-item'}>{item.item.area}</li>)
}

function TripList(){
    return (<ul className='list-area'>
        {list.map((item)=> (<List item={item}/>))}
        </ul>)
}

export default TripList;