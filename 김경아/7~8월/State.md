# State : Component Memory

***_useState_***
<br/>
렌더링 간 데이터를 기억할 수 있는 상태 변수를 선언하고, 관리할 수 있다.<br/>
상태 변수를 업데이트하고, 컴포넌트를 다시 렌더링 할 수 있는 상태 업데이트 함수를 제공한다.
<br/>

```javascript
    import { useState } from 'react';

    export default function Counter () {
        const [ number, setNumber ] = useState(0);

        function handleClick(){
            setNumber(number+1);
        }

        return (
            <>
            <h1>{number}</h1>
            <button type="button" onClick={handleClick}> +1 </button>
            </>
        )
    }

```

<p>*React에서는 use로 시작하는 함수는 모두 hooks라고 한다. hooks는 React가 렌더링 되는 동안에만 사용할 수 있다. </p>

> React hook은 컴포넌트나 use로 시작하는 다른 함수(custom hooks)안에서만 사용할 수 있다. <br/> 또, 최상위 수준에서만 호출할 수 있다. (조건문이나 반복문, 일반 함수 안에서 사용할 수 없다.)

연관성이 없는 경우에는 여러 상태 변수로 나누어 관리하는 것이 좋다. 하지만 2개의 상태 변수가 함께 변경되어야 하는 경우라면 하나의 상태변수로 결합하여 관리하는 것이 훨씬 편리하다.

## 상태 = 독립적인 비공개 데이터

> "State is isolated and private"

상태 변수는 화면의 컴포넌트 인스턴스에 대한 지역 변수로, **독립적이다.** <br/>
같은 컴포넌트가 여러 번 렌더링되어도 각각의 상태변수는 서로에게 영향을 받지 않는다.

만약 두 개의 컴포넌트에서 상태를 동기화된 상태로 유지하려면 자식 컴포넌트에서 상태를 제거하고, 2개 컴포넌트를 공유하는 가장 가까운 부모 컴포넌트로 상태를 끌어올려서 관리하면 된다.
