# React 공부
<h1>라이프사이클의 이해</h1>
<p><div>마운트 : DOM이 생성되고 처음 웹에 나타나는것</div>
<div>업데이트 : props이 바뀔때, state가 바뀔때, 부모컴포넌트가 리렌더링될때, 강제로 렌더링을 트리거할때 업데이트가 된다</div>
<div>언마운트 : 마운트의 반대, 컴포넌트를 DOM에서 제거하는것</div></p>
<h1>Hooks</h1>
<p><div>useState : 컴포넌트에서 가변적인 상태를 지니게 해주는 Hook</div><br/>
<div>useEffect : 컴포넌트가 렌더링될때마다 특정 작업을 수행하도록 설정할수 있는 Hook 
<br/>
그냥 사용시에는 마운트,업데이트될때마다 작업을 수행 
<br/>
마운트 시에만 사용하고싶을시 함수의 두번째 파라미터에 [ ]를 추가하면 마운트시에만 사용
<br/>
특정값이 업데이트될때만 사용하고 싶을시 배열안에 특정값을 넣어서 사용 배열을 생략해서 사용하는 상황은 거의 없음
<br/>
컴포넌트가 언마운트 되기 전이나 업데이트 되기 직전에 작업을 수행시 return ()=>{}을 사용
</div><br/>
<div>
useReducer : useState보다 더 다양한 컴포넌트 상황에 따라 상태를 다른값으로 업데이트 할때 사용하는 Hook
<br/>
useState처럼 사용도 가능하지만 간단한 상태관리는 useState를 복잡하거나 상태변경이 여러 단계인경우에는 useReducer를 사용
</div><br/>
<div>useMemo : 컴포넌트 내부에서 발생하는 연산을 최적화 할때 사용 혹은 컴포넌트가 불필요하게 렌더링되는것을 방지할때 사용</div><br/>
<div>useCallback : useMemo와 비슷하다, 렌더링 성능을 최적화 할때 사용<br/> 이Hook을 통해 만들어놨던 함수를 재사용 할수 있다.</div><br/>
<div>useRef : 함수컴포넌트에서 DOM의 id처럼 사용<br/>
컴포넌트의 로컬 변수<strong>(렌더링과 상관없이 바뀔수 있는 값)</strong>를 사용해야 할때도 활용 가능</div><br/>
<div>CustomHook : 여러 컴포넌트에서 비슷한 기능을 공유할경우 커스텀 훅을 만들어 로직을 재사용 하는 것</div><br/>
</p>

<h1>컴포넌트 성능 최적화</h1>
<p>
<div>React.memo를 활용하여 불필요한 상황에 리렌더링 하지 않도록 한다.<br/>
useState대신 useReducer를 사용</div>
<div>개발자 도구를 활용한 성능 모니터링 : React DevTools 를 활용하여 측정, Profiler 탭에서 녹화 버튼을 누르고서 성능을 측정한다</div>
<div>react-virtualized : 스크롤 되기 전에 보이지 않는 컴포넌트는 렌더링하지 않고 크기만 차지하게끔 하는 라이브러리<br/>
npm install react-virtualized --save을 사용하여 다운<br/>
vite의 경우 : **npm install https://github.com/samarai-project/react-virtualized-fixed.git 를 사용 하여 다운**</div>
</p>

<h1>immer</h1>
<p>
<div>immer : 구조가 복잡한 객체 혹은 배열의 상태를 불변성을 유지하며 업데이트 할수있게 하는 라이브러리 <br/></div>
<div>npm install immer use-immer로 다운후 사용</div>
</p>


<h1>리액트 라우터</h1>
<p>
<div>라우팅 : 사용자가 요청한 URL에 맞는 페이지를 보여주는 것<br/>
리액트 라우터 : 리액트의 라우팅 관련 라이브러리, 컴포넌트 기반으로 라우팅 시스템 설정 가능<br/>
npm install react-router-dom로 다운 받아서 사용</div><br/>
<div>싱글 페이지 애플리케이션 : 서버에서 필요한 데이터만 비동기로 받아와서 동적으로 현재 화면에 다시 렌더링 하는 방식,  여러 페이지가 존재하지만 다수의 페이지를 표시하는데 있어 페이지 전환을 수행하지 않고 하나의 페이지인 것처럼 처리하는 기술</div><br/>
<div>Route : 브라우저 주소 경로에 따라 원하는 컴포넌트를 보여줄때 사용<br/>
Link : 다른페이지로 이동할때 사용<br/>
URL 파라미터 : useParams라는 훅을 사용해 객체 형태로 조회한다 /라우트할 js파일명/:pram명 으로 링크를 만들수 있다</div><br/>
<div>중첩 라우트 : <Outlet /> 을 사용하여 Outlet 컴포넌트가 사용된 자리에 중첩된 라우트가 보여지게 된다</div><br/>
<div>공통 레이아웃 컴포넌트 : Head, Footer 같은 각 페이지 컴포넌트에서 재사용하는 컴포넌트</div><br/>
<div>useNavigate : Link를 사용하지 않고 페이지를 이동할때 사용한다</div><br/>
</p>

<h1></h1>
<p>
<div></div>
</p>
