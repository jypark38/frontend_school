const { useState, useEffect } = React;

// React.memo

const MyHeader = React.memo(function MyHeader(props) {
  console.log(props);
  // function MyHeader({ pageName, a }) {
  // 구조분해할당
  // const { pageName, a } = props;
  // console.log(pageName, a);
  // console.log(props);
  // console.log(props.pageName);
  return (
    // 접어지게 만들자
    // div 싫으면 React.Fragment
    // 아니면 <></>
    <div>
      <h1>아 이건 제목이야 여기는 {props.pageName} 제목</h1>
      <h2>이건 부제목이야 여기는 {props.pageName} 부제목</h2>
      <p>{props.a}</p>
    </div>
  );
});
const Memo = ({ title, idx }) => {
  useEffect(() => {
    console.log("Memo", idx);
  }, [title, idx]);
  return (
    <div>
      <h3>{idx + 1}번 메모</h3>
      <article>{title}</article>
      <br />
    </div>
  );
};

function MemoList({ titles }) {
  useEffect(() => {
    console.log("MemoList");
  }, [titles]);

  return titles.map((title, idx) => {
    return <Memo key={idx} title={title} idx={idx} />;
  });
}

function HomePage() {
  const [title, setTitle] = useState("");
  const [titles, setTitles] = useState([]);
  const onChangeHandler = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };
  const onClickButtonHandler = () => {
    const newTitles = [...titles, title];
    // 불변성때문?
    setTitles(newTitles);
  };

  return (
    <div>
      {/* 이벤트 발생하고 리렌더링이 왜 전부다 돼? */}

      <input type="text" onChange={onChangeHandler} />
      <button onClick={onClickButtonHandler}>버튼</button>
      {/* <button onClick={() => buttonHandler()}>버튼</button> */}
      {/* 이 형태를 사용하는 경우? */}
      {/* <MemoList titles={titles} /> */}

      <p>!!!!</p>

      <div>
        <MyHeader pageName={title} a="a1" />
        <MyHeader pageName="페이지2" />
        <MyHeader pageName="홈페이지3" a="a3" />
        <MyHeader pageName="홈페이지4" a="a4" />
      </div>
    </div>
  );
}

function App() {
  // const root = document.getElementById("root");
  const root = ReactDOM.createRoot(document.getElementById("root"));

  // const header = document.createElement("h1");
  // header.innerText = "아 이건 제목이야";
  // root.appendChild(header);

  // 위에 세줄을 한줄로 바꾸기
  // ReactDOM.render(<h1>아 이건 제목이야</h1>, root);

  // createRoot
  root.render(<HomePage />);
}

App();

// 오늘 목표
// jsx란 무엇인가 (기초편)
// react component에서 props 부여하기
// react hook state
// 메모장

// 다음시간
// 기능분리
// jsx 더 살펴보기
// 오늘 했떤거 다시?

// 프로젝트 할때 어디까지 알아야됨?
// 필수는 State, Effect, js는 잘하면 잘할수록 좋음