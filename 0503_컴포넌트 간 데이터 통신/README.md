# Data in components

- 한 페이지 내에서 같은 데이터를 공유 해야 함
  - 하지만 페이지들은 component로 구분이 되어있음

## pass props & emit event

- 부모 => 자식으로의 데이터의 흐름
  - pass **props**의 방식

- 자식 => 부모로의 데이터의 흐름
  - **emit** event의 방식


# Pass Props

- 요소의 속성(property)을 사용하여 데이터 전달

- props는 부모(상위) 컴포넌트의 정보를 전달하기 위한 사용자 지정 특성

- 자식(하위) 컴포넌트는 props 옵션을 사용하여 수신하는 props를 명시적으로 선언해야 함

## props in HelloWorld

- App.vue의 <HelloWorld/> 요소에 msg="~" 라는 property를 설정하였고, 하위 컴포넌트인 HelloWorld는 자신에게 부여된 msg property를 template에서 {{ msg }}의 형태로 사용한 것

## Pass Props

- 이렇게 부모 => 자식으로의 data 전달 방식을 pass props라고 함

- 정적인 데이터를 전달하는 경우 static props라고 명시하기도 함

- 요소에 속성을 작성하듯이 사용 가능하여, **prop-data-name="value"의 형태로 데이터를 전달
  - 이때 속성의 키 값은 kebab-case를 사용

- Prop 명시

- 데이터를 받는 쪽, 즉 하위 컴포넌트에서도 props에 대해 명시적으로 작성 해주어야 함

- 전달받은 props를 type과 함께 명시

- 컴포넌트를 문서화할 뿐만 아니라, 잘못된 타입이 전달하는 경우 브라우저의 자바스크립트 콘솔에서 사용자에세 경고

## Pass Props convention

- 부모에서 넘겨주는 props
  - **kebab-case**

- 자식에서 받는 props
  - **camelCase**

- 부모 템플릿(html)에서 kebab-case로 넘긴 변수를 자식의 스크립트(vue)에서 자동으로 camelCase로 변환하여 인식함


## Dynamic props

- 변수를 props로 전달할 수 있음

- v-bind directive를 사용해 데이터를 동적으로 바인딩

- 부모 컴포넌트의 데이터가 업데이트 되면 자식 컴포넌트로 전달되는 데이터 또한 업데이트 됨


## 컴포넌트의 data 함수

- 컴포넌트 내의 data는 함수여야 함

- 각 vue 인스턴스는 같은 data 객체를 공유하므로 새로운 data 객체를 반환(return)하여 사용해야 함


## Pass Props

- **:dynamic-props="dynamicProps"** 는 앞의 key값(dynamic-props)이란 이름으로 뒤의 " " 안에 오는 데이터(dynamicProps)를 전달하겠다는 뜻

- 즉, **:my-props="dynamicProps"** 로 데이터를 넘긴다면, 자식 컴포넌트에서 myProps로 데이터를 받아야 함

- v-bind로 묶여있는 " " 안의 구문은 javascript의 구문으로 볼 수 있음
  - 따라서 dynamicProps라고 하는 변수에 대한 data를 전달할 수 있는 것

- < SomeComponent num-props="1" />
  - 이 방식은 static props로 string으로써의 "1"을 전달

- < SomeComponent :num-props="1" />
  - 이 방식은 dynamic props로 숫자로써의 1을 전달


## 단방향 데이터 흐름

- 모든 props는 부모에서 자식으로 즉 아래로 단방향 바인딩을 형성

- 부모 속성이 업데이트되면 자식으로 흐르지만 반대 방향은 아님
  - 부모 컴포넌트가 업데이트될 때마다 자식 컴포넌트의 모든 prop들이 최신 값으로 새로고침 됨

- 목적
  - 하위 컴포넌트가 실수로 상위 컴포넌트 상태를 변경하여 앱의 데이터 흐름을 이해하기 힘들게 만드는 것을 방지

- 하위 컴포넌트에서 prop를 변경하려고 시도해서는 안되며 그렇게 하면 Vue는 콘솔에서 경고를 출력함


# Emit Event

- 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달할 때는 **이벤트를 발생 시킴**

- 이벤트를 발생시키기 위해 데이터를 전달하는 방법
  - 1. 데이터를 이벤트 리스너의 **콜백함수의 인자로 전달**
  - 2. 상위 컴포넌트는 해당 **이벤트를 통해 데이터를 받음**


## $emit

- $emit 메서드를 통해 부모 컴포넌트에 이벤트를 발생
  - **$emit('event-name')** 형식으로 사용하며 부모 컴포넌트에 **event-name**이라는 이벤트가 발생했다는 것을 알림
  - 마치 사용자가 마우스 클릭을 하면 click 이벤트가 발생하는 것처럼 **$emit('event-name')** 가 실행되면 **event-name** 이벤트가 발생하는 것

- [참고] $
  - javascript는 변수에 _, $ 두 개의 특수문자를 사용 가능
  - 이때, 기존에 사용하던 변수, 메서드들과 겹치지 않게 하기 위해서 vue는 $emit를 이벤트 전달을 위한 방식으로 택함


## Emit Event

1. 자식 컴포넌트에 버튼을 만들고 클릭 이벤트를 추가

2. $emit을 통해 부모 컴포넌트에게 child-to-parent 이벤트를 트리거




