// 리렌더링 == 함수 실행
function App() {
  const [num, setNum] = React.useState(0);
  const [num2, setNum2] = React.useState(0);
  // 화면에 값 변하는거 쓰고 싶으면 useState 쓰기
  // state랑 setState가 있는데 setState는 state를 바꿀때 사용
  // setState를 이용해서 값을 바꾸면 화면이 새로 그려짐

  // React.useEffect(() => {}, []);
  // 콜백함수: 인자로서 함수를 넘겨주면 함수 안에서 다시 호출
  // 의존성 배열: [의존성 배열] 안의 값이 바뀌면 효과를 일으켜준다

  // 마운트: 컴포넌트 생겼을 때
  // 업데이트: 컴포넌트 바꼈을 때, setState가 일어나면
  // 언마운트: 컴포넌트 사라졌을 때

  React.useEffect(() => {
    // 의존성 배열에 빈 배열을 주면 마운트일 때만(최초 컴포넌트가 만들어질 때만) 실행된다
    // 최초에 한 번만 실행된다
    console.log("마운트가 되었습니다");
    // 의존성 배열에 빈배열을 주면 클린업 함수는 언마운트일 때만 실행된다
    return () => {
      console.log("언마운트가 되었습니다");
    };
  }, []);

  // 매렌더링때마다 효과 실행
  // 1)
  console.log("렌더링");
  // 2)
  React.useEffect(() => {
    // 배열은 넣지 않고 함수만 넣는다
    // 의존성 배열에 아무것도 넣지 않는게 아니라 아예 아무것도 적지 않으면
    // 여기는 모든 렌더 순간, 마운트/업데이트일 때 실행된다
    return () => {
      // 여기는 업데이트/언마운트일 때 실행된다
    };
  });
  // 왜 굳이 useEffect 쓰는데?
  // 렌더링과 관련한 이펙트라는 것을 명시, 클린업 함수가 있음
  // 웬만하면 클린업 함수 적어주는게 좋음

  // num에 관련해서 뭔가 하고 있음
  React.useEffect(() => {
    console.log("num이 바뀌었습니다");
    if (num % 2 == 0) {
      alert("num이 짝수입니다.");
    }
    // 이펙트 일어나면 클린업은 무조건 일어난다
    // 언마운드 단계에서 클린업이 일어나는 이유: 이펙트가 앞에서 일어났기 때문에
    return () => {
      console.log(num, "num에 의존하는 클린업!"); // 다음 이펙트 이전에 할 일
    };
  }, [num]);

  // num2에 관련해서 뭔가 하고 있음
  React.useEffect(() => {
    console.log("num2가 바뀌었습니다");
  }, [num2]);

  // useEffect는 [의존성 배열] 안의 값이 바뀌면 효과를 일으켜준다
  // 그래서 언제 쓰는데? 내가 원하는 state가 변할 때마다 관련하여 어던 행동을 하고 싶을 때 한다
  // 비동기 코드는 주로 useEffect 안에 적어준다

  return (
    <div>
      {num} counter {num2}
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        더하기
      </button>
      <button
        onClick={() => {
          setNum2(num2 - 1);
        }}
      >
        빼기
      </button>
    </div>
  );
}

function index() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
}

index();
