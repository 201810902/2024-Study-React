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

<h1>axios</h1>
<p>
<div>callback 함수 : 어떤 함수가 처리된 후 어떠한 작업을 하고싶을때 사용 (콜백안에 또 콜백을 넣을시 여러번 중첩되어 가독성이 안좋아짐)<br/>
Promise :  콜백함수의 변형 <br/>
async/await : Promise를 더 사용하기 쉽게 해주는 문법</div><br/>
<div>axios : HTTP 요청을 Promise 기반으로 처리한다.(async/await으로 바꿔서 처리할수 있다.)<br/>
npm install axios 로 설치</div>
<div>자주 활용하는 경우 usePromise를 활용해 커스텀 훅을 만들어서 호출해서 사용가능</div><br/>
<div>axios GET : 단순 데이터 요청 시,파라미터 데이터를 포함시킬 때 (사용자 번호에 따라서 조회하기)<br/>
axios POST : 데이터를 Message Body에 포함시켜서 보냄,GET 메서드에서 params를 사용한 경우와 비슷하게 수행<br/>
axios DELETE : body가 비어있음, DB에서 저장되있는 내용을 삭제하는 목적으로 사용, 헤더에 너무 많은 데이터를 담을 수 없을 때는 두 번째 인자에 data 추가 가능<br/>
axios PUT : DB에 저장되있는 내용을 갱신 및 수정하는 목적으로 사용, 서버 내부적으로 GET -> POST 과정을 거치기에 POST 메서드와 비슷한 형태<br/>
</div>
</p>

<h1>Context API</h1>
<p>
<div>context API : 전역적으로 여러곳에서 사용되는 상태가 있고 컴포넌트 수가 많을때 사용</div><br/>
<div>Consumer : Context 안에있는 컴포넌트 Consumer 사이에 jsx 혹은 함수를 전달</div><br/>
<div>Provider : Context의 value를 변경 할수있다</div><br/>
</p>

<h1>리덕스</h1>
<p>
<div>리덕스 : 리액트 상태 관리 라이브러리로 읽기 전용 상태라 상태를 업데이트 할 때 새로운 객체를 생성해 주어야 한다.<br/>
npm install redux react-redux로 설치 후 사용</div>
<div>액션 : 상태에 변화가 필요할때 발생<br/>
액션 객체는 type필드를 반드시 가지고 있어야 하며 이 값이 액션의 이름이라고 생각하면 된다.</div>
<div>리듀서 : 액션을 만들어서 발생시키면 리듀서가 현재 상태와 전달받은 액션 객체를 파라미터로 받아온다.<br/>
리듀서 함수는 순수한 함수여야 하며 이전 상태와 액션 객체를 파라미터로 받고 파라미터 외의 값에는 의존하면 안된다<br/>
이전 상태는 건드리지 않고 변화를 준 새로운 상태 객체를 만들어서 반환해야한다<br/>
똑같은 파라미터로 호출된 리듀서 함수는 언제나 같은 결과 값을 반환해야 한다</div><br/>
<div>스토어 : 프로젝트에 리덕스를 적용하기 위해 만든다<br/>
한 프로젝트에 하나의 스토어만 가질 수 있다</div><br/>
<div>디스패치 : 스토어의 내장 함수중 하나로 액션을 발생시키는것 dispatch(action)의 형태로 호출</div><br/>
<div>구독 : 스토어의 내장함수 중 하나로 상태가 업데이트 될때마다 호출된다</div><br/>
<div>redux-actions : redux-action : 리듀스를 작성할때 쓰는 라이브러리<br/>
npm install redux-actions로 설치</div><br/>
<div>컨테이너 컴포넌트 : 리덕스 스토어와 연동된 컴포넌트 커넥트 함수를 사용해 연동한다<br/>
커넥트로 만들었을시에는 해당 컴포넌트의 prop이 바뀌지 않으면 리렌더링이 방지되어 성능이 최적화 되지만 hook으로 만들었을시 성능 최적화를 위해서는 React.memo사용해야 한다.</div><br/>
</p>

<h1></h1>
<p>
<div></div><br/>
<div></div><br/>
<div></div><br/>
<div></div><br/>
<div></div><br/>
</p>