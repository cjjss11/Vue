# Basic of Syntax

## Text Interpolation

- 가장 기본적인 바인딩(연결) 방법

- 중괄호 2개로 표기

- DTL과 동일한 형태로 작성

- Text interpolation 방법은 모두 일반 텍스트로 표현


# Directives

- v-접두사가 있는 특수 속성에는 값을 할당 할 수 있음
  - 값에는 JS 표현식을 작성 할 수 있음

- directive의 역할은 표현식의 값이 변경될 떄 반응적으로 DOM에 적용하는 것

- v-on : submit.prevent = "onSubmit"
  - v-on => Name
  - submit => Argument
  - prevent => Modifiers
  - onSubmit => Value

- `:`을 통해 전달인자를 받을 수 있음

- `.`으로 표시되는 특수 접미사-directive를 특별한 방법으로 바인딩


## 새 Vue instance 생성

- 각각의 isntance들은 연결된 DOM element에만 영향을 미침

- 연결되지 않은 DOM이 Vue의 영향을 받지 않았던 것과 동일한 상황


## v-text 

- Template Interpolation과 함께 가자 기본적인 바인딩 방법

- {{}}와 동일한 역할


## v-html

- RAW HTML을 표현할 수 있는 방법

- 단 , 사용자가 입력하거나 제공하는 컨텐츠에는 **절대 사용 금지**


## v-show 

- 표현식에 작성된 값에 따라 element를 보여 줄 것인지 결정
  - boolean 값이 변경 될 때 마다 반응

- 대상 element의 display 속성을 기본 속성과 none으로 toggle

- 요소 자체는 항상 DOM에 렌더링 됨

- 바인딩 된 isActive의 값이 false이므로 첫 방문 시 p tag는 보이지 않음
  - vue dev tools에서 isActive 변경 시 화면에 출력
  - 값을 flase로 변경 시 다시 사라짐

- 화면에서만 사라졌을 뿐, DOM에는 존재
  - display 속성이 변경되었을 뿐


## v-if

- v-show와 사용 방법은 동일

- is Active의 값이 변경 될 때 반응

- 단, 값이 false인 경우 DOM에서 아예 사라짐

- v-if v-else-if v-else 형태로 사용


## v-show VS v-if

- v-show (Expensive initial load, cheap toggle) 
  - 초기에 만들어 놓고 숨김
  - 표현식 결과와 관계 없이 렌더링되므로 초기 렌더링에 필요한 비용은 v-if 보다 높을 수 있음
  - display 속성 변경으로 표현 여부를 판단하므로 렌더링 후 toggle 비용은 적음

- v-if (Cheap initial load, expensive toggle)
  - 처음부터 만들어 놓지 않음
  - 표현식 결과가 false인 경우 렌더링조차 되지 않으므로 초기 렌더링 비용은 v-show 보다 낮을 수 있음
  - 단, 표현식 값이 자주 변경되는 경우 잦은 재 렌더링으로 비용이 증가할 수 있음


## v-for

- **for .. in..** 형식으로 작성

- 반복한 데이터 타입에 모두 사용 가능

- index를 함께 출력하고자 한다면 **(char, index)** 형태로 사용 가능

- 배열 역시 문자열과 동일하게 사용 가능

- 각 요소가 객체라면 **dot notation(.)**으로 접근 할 수 있음


## 특수 속성 key

- **v-for 사용 시 반드시 key 속성을 각 요소에 작성**

- 주로 v-for directive 작성 시 사용

- vue 화면 구성 시 이전과 달라진 점을 확인하는 용도로 활용 => key가 중복되어서는 안됨

- 각 요소가 고유한 값을 가지고 있다면 생략할 수 있음

- 객체 순회 시 value가 할당되어 출력

- 2번째 변수 할당 시 key 출력 가능


## v-on

- `:`을 통해 전달받은 인자를 확인

- 값으로 JS 표현식 작성

- addEventListener의 첫 번째 인자와 동일한 값들로 구성

- 대기하고 있던 이벤트가 발생하면 할당된 표현식 실행

- method를 통한 data 조작도 가능

- method에 인자를 넘기는 방법은 일반 함수를 호출할 대와 동일한 방식

- `:`을 통해 전달된 인자에 따라 특별한 modifiers (수식어)가 있을 수 있음
  - ex) v-on:keyup.enter 등

- `@` shortcut 제공
  - ex) @keyup.click


## v-bind

- HTML 기본 속성에 Vue data를 연결

- class의 경우 다양한 형태로 연결 가능

  - **조건부 바인딩**
    - { 'class Name': '조건 표현식' }
    - 삼항 연산자도 가능
  
  - **다중 바인딩**
  - ['JS 표현식','JS 표현식',...]

- Vue data의 변화에 반응하여 DOM에 반영하므로 상황에 따라 유동적 할당 가능

- `:` shortcut 제공
  - ex) :class 등


## v-model

- Vue instance와 DOM의 **양방향 바인딩**

- Vue data 변경 시 v-model로 연결된 사용자 입력 element에도 적용


## computed (연산 프로퍼티)

- Vue instance가 가진 options 중 하나

- computed 객체에 정의한 함수를 페이지가 최초로 렌더링 될 때 호출하여 계산
  - 계산 결과가 변하기 전까지 함수를 재호출하는 것이 아닌 계산된 값을 반환

- 괄호가 있으면 안됨

## methods VS computed

- methods
  - 호출 될 때 마다 함수를 실행
  - 같은 결과여도 매번 새롭게 계산

- computed
  - 함수의 종속 대상의 변화에 따라 계산 여부가 결정됨
  - 종속 대상이 변하지 않으면 항상 저장(캐싱)된 값을 반환

## watch

- 특정 데이터의 변화를 감지하는 기능
  1. watch 객체를 정의
  2. 감시할 대상 data를 지정
  3. data가 변할 시 실행 할 함수를 정의

- 첫 번째 인자는 변동 후 data
- 두 번째 인사는 변동 전 data

- 실행 함수를 Vue method로 대체 가능
  1. 감시 대상 data의 이름으로 객체 생성
  2. 실행하고자 하는 method를 handler에 문자열 형태로 할당

- Array, Object의 내부 요소 변경을 감지를 위해서는 **deep** 속성 추가 필요

## filter

- 텍스트 형식화를 적용할 수 있는 필터

- interpolation 혹은 v-bind를 이용할 때 사용 가능

- 필터는 자바스크립트 표현식 마지막에 `|`(파이프)와 함께 추가되어야 함

# Vue Style Guide

## v-for는 항상 key와 함께 사용하기

- 내부 컴포넌트의 상태를 일관되게 유지하기 위해 v-for에 항상 key를 사용하기

- 데이터의 예측 가능한 행동을 유지 시키기 (객체 불변성)

## v-for를 쓴 element에 절대 v-if를 사용하지 말기

- 함께 쓸 수 있다고 생각되는 2가지 경우
  1. 목록의 항목을 필터링 할 때
    - (v-for="user in users" v-if="user.isActive")

  2. 숨김 목록의 렌더링을 피할 때
    - (v-for="user in users" v-if="shouldShowUsers")

## 목록의 항목을 필터링할 때 

- Vue가 directive를 처리할 때 v-for는 v-if보다 우선순위가 높음

- user의 일부분만 렌더링하고 싶은데도 불구하고, v-for가 우선순위를 가지기 때문에 모든 user에 대해 반복해야 함

- **computed를 사용해서 isActive가 true인 user만 반복하게 해서 효율적으로 렌더링할 수 있도록 함**

## 숨김 목록의 렌더링을 피할 대

- v-if를 컨테이너 element로 옮기기
  - 더 이상 목록의 모든 사용자에 대해 shouldShowUsers를 확인하지 않도록 함

한 번 확인하고 shouldShowUsers가 false인 경우 v-for를 평가하지도 않음

