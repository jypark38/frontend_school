const { useState } = React;

// 나중에 질문
// key, ref는 안넘어가는거임?
function Button({ children, ...props }) {
  console.log(props);
  //  props {onClick:  실행시키면num증가}
  // props는 js 객체다!!!
  return (
    <button onClick={props.onClick} style={{ width: "50px", height: "50px" }}>
      {children}
    </button>
  );
}

function Counter(props) {
  // 아래에 span 안의 숫자 0 부분에서 0 을 변수로 만들어 주세요
  // 버튼에 클릭이 되었습니다 라고 로그가 찍히는 이벤트를 넣고 싶다

  let num = 0;
  // 일반 변수를 바꾸는건 화면에 그려주는건 안함

  // setCount는 count를 바꿔주고 화면에 새로 그려주는 함수인거임
  const 실행시키면num증가 = () => {
    props.setCount(props.count + 1);
  };

  const 실행시키면num감소 = () => {
    props.setCount(props.count - 1);
  };

  // jsx안에서 값을 사용하고 싶으면 중괄호로 감싸라
  // 함수도 값이다.

  console.log(
    "jsx로그찍어보기",
    <button
      onClick={실행시키면num감소}
      style={{
        width: "50px",
        height: "50px",
      }}
    >
      -
    </button>
  );
  console.log(<Button onClick={실행시키면num증가}>+</Button>);
  return (
    <>
      <span>여기는 숫자 {props.count}</span>
      <Button onClick={실행시키면num증가}>+</Button>
      <Button onClick={실행시키면num감소}>-</Button>
    </>
  );
}

function Homepage() {
  const [count, setCount] = useState(0); // 배열을 줌
  // 배열 첫번째에는 상태가 있고
  // 두번째는 상태를 바꿔주는 함수가 있다
  //

  // 원래는 Counter 컴퍼넌트에서만 num이라는 state가 필요하다
  // 근데 그 상위에 있는 Homepage에서 num이라는 state가 필요해짐
  return (
    <div>
      <h1>숫자 카운터 만들기</h1>
      <Counter count={count} setCount={setCount} />
      <div>num 곱하기 2 한 값을 출력하고싶어오 {count * 2}</div>
    </div>
  );
  // 원래는 Counter컴포넌트에서만 num이라는 state가 필요했다.
  // 그런데 그 상위에있는 Homepage에서 num라는 state가 필요해짐...
  // 상태 끌어올리기 언쩨씀???
  // 내가 전달해줄수없는 컴포넌트가 생겼을때 공통 부모에서 관리하도록 하고싶을때
}

function App() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Homepage />);
}

App();
