# SPA (Single Page Application)
- 이전까지는 사용자의 요청에 대해 적절한 페이지 별 template을 반환
- SPA는 서버에서 최초 1장의 HTML만 전달받아 모든 요청에 대응하는 방식
  - **CSR** (Client Side Rendering) 방식으로 요청을 처리하기 때문에 한 페이지로 모든 요청에 대응 할 수 있음

# SSR (Server Side Rendering)
- 기존의 요청 처리 방식은 SSR
- Server가 사용자의 요청에 적합한 HTML을 렌더링하여 제공하는 방식
- 전달 받은 새 문서를 보여주기 위해 브라우저는 새로고침을 진행

# CSR (Client Side Rendering)
- 최초 한 장의 HTML을 받아오는 것은 동일
  - 단, server로부터 최초로 받아오는 문서는 빈 html 문서
- 각 요청에 대한 대응을 JavaScript를 사용하여 필요한 부분만 다시 렌더링
1. 필요한 페이지를 서버에 **AJAX**로 요청
2. 서버는 화면을 그리기 위해 필요한 데이터를 JSON 방식으로 전달
3. **JSON** 데이터를 JavaScript로 처리, DOM 트리에 반영(렌더링)

# CSR 방식을 사용하는 이유
1. 모든 HTML 페이지를 서버로부터 받아서 표시하지 않아도 됨
  - 클라이언트 - 서버간 통신 즉, 트래픽 감소
  - 트래픽이 감소한다 -> 응답 속도가 빨라진다

2. 매번 새 문서를 받아 새로고침하는 것이 아니라 필요한 부분만 고쳐 나가므로 각 요청이 끊임없이 진행
  - SNS에서 추천을 누를 때 마다 첫 페이지로 돌아감
  - 요청이 자연스럽게 진행이 됨 -> UX 향상

3. BE와 FE의 작업 영역을 명확히 분리 할 수 있음
  - 각자 맡은 역할을 명확히 분리한다 -> 협업이 용이해짐

# Vue

## MVVM Pattern
- 소프트웨어 아키텍처 패턴의 일종
- 마크업 언어로 구현하는 그래픽 사용자 인터페이스 (view)의 개발을 Back-end(model)로부터 분리시켜 view가 어느 특정한 모델 플랫폼에 종속되지 않도록 함
- **View**
  - 우리 눈에 보이는 부분 = DOM
- **Model**
  - 실제 데이터 = JSON
- **View Model** (Vue)
  - View를 위한 Model
  - View와 연결(binding)되어 Action을 주고 받음
  - Model이 변경되면 View Model도 변경되고 바인딩된 View도 변경됨
  - View에서 사용자가 데이터를 변경하면 View Model의 데이터가 변경되고 바인딩된 다른 View도 변경됨

## el (element)
- Vue instance와 DOM을 mount(연결)하는 옵션
  - View와 Model을 연결하는 역할
  - HTML id 혹은 class와 마운트 가능

- Vue instance와 연결되지 않은 DOM 외부는 Vue의 영향을 받지 않음
  - Vue 속성 및 메서드 사용 불가

- 새로운 Vue instance 생성

- 생성자 함수 첫번째 인자로 **Object** 작성

- el 옵션에 **#app** 작성 = DOM 연결

- Vue와 연결되지 않은 div 생성
  - 두 div 모두 {{ message }} 작성

## data
- Vue instance의 **데이터 객체** 혹은 **인스턴스 속성**
- 데이터 객체는 반드시 기본 객체 { }(Object)여야 함
- 객체 내부의 아이템들은 value로 모든 타입의 객체를 가질 수 있음
- 정의된 속성은 interpolation {{}}을 통해 view에 렌더링 가능함
- Vue instance에 **data** 객체 추가하고 data 객체에 **message** 값 추가
- 추가된 객체의 각 값들은 **this.message** 형태로 접근 가능

## method
- Vue instance의 **method**들을 정의하는 곳
- method 객체 정의
  - 객체 내 **print method** 정의
  - print method 실행 시 Vue instance의 data내 message 출력
- 콘솔창에서 app.print() 실행
- method를 호출하여 data 변경 가능
  - 객체 내 bye method 정의
  - print method 실행 시 Vue instance의 data내 message 변경
- 콘솔창에서 app.bye() 실행
  - DOM에 바로 변경된 결과 반영
  - Vue의 강력한 반응성(reactivity)

## [주의] methods with Arrow Function
- **메서드를 정의 할 때, Arrow Function을 사용하면 안됨**
- Arrow Function의 this는 함수가 선언될 때 상위 스코프를 가리킴 즉, this가 상위 객체 window를 가리킴
- 호출은 문제 없이 가능하나 this로 Vue의 data를 변경하지 못함
