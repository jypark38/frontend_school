import './App.css';

import Menu from './components/menu/Menu.jsx'
import NewMenu from './components/newMenu/NewMenu.jsx'
import TripList from './components/tripList/TripList'

// function App() {

//   return (
//     <div>
//       {/**jsx안의 주석이다 */}
//       <h1>안녕 라이캣!</h1>
//       <h1>안녕 라이캣 2호!</h1>
//     </div>
//   );
// }

// 연습문제 틀린부분 찾아 수정하기
function TextArea() {
	return (
		<div className="wrapper">
		<textarea
			readOnly
			maxLength={3}
			style={{backgroundColor: "blue"}}
		/>
		</div>	
	);   
}

function App() {
	//여기는 js할 때와 똑같이 주석을 입력합니다! 왜냐면 여기는 JS의 영역이니까요 :)

	const name = "라이캣!!!!"
	const 변수 = '변수'
	function 함수() {
		console.log('함수 함수!')
	}
	const 값 = true;
	const someStyle = {backgroundColor:"black", color:"white"};

	const today = new Date();
	const year = today.getFullYear()
	const yearStyle = {backgroundColor:"seagreen", color:"yellow"}
	const month = today.getMonth()+1;
	const day = today.getDate();
	const dateStyle = {backgroundColor:"pink", color:"purple"}
	const h = today.getHours();
	const m = today.getMinutes();
	const s = today.getSeconds();
	const timeStyle = {backgroundColor:"royalblue", color:"gold"}

	return (
		
		<div>
			{100 + 1}
			{'hello' + 'world'}
			{[1, 2, 3].map(x => x**2)}
			{[1, 2, 3]}
			{함수()}
			{변수}
			{값?'one':'two'}
			{/* 여기부터는 jsx! 주석은 이런식으로 작성합니다~ 한 줄 주석은 따로 존재하지 않습니다. div 밖에 쓰면 오류가 나네?*/}

	      	{/* 최상위 태그는 하나만! */}
			<h1 style={someStyle}>안녕, 라이캣 1호</h1>
			<h1>
				안녕, {name} 2호!
			</h1>{/* 태그는 무조건 닫아줘야합니다! 안그러면 에러나와요! */}
			<div/>{/* 이런식으로 바로 태그를 닫히게 할 수도 있어요! */}

			<TextArea></TextArea>
			<Menu></Menu>
			<NewMenu></NewMenu>
			
			<div style = {{backgroundColor:'hotpink'}}>
				<h1 style={yearStyle}>년 : {year}</h1>
				<h1 style={dateStyle}>월/일 : {month}/{day}</h1>
				<h1 style={timeStyle}>시간 : {h}시 {m}분 {s}초</h1>
			</div>
			
			<TripList></TripList>
		</div>	
	);
}

export default App;
