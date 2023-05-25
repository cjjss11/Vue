# Lifecycle Hooks

- 각 Vue 인스턴스는 생성과 소멸의 과정 중 단계별 초기화 과정을 거침
  - Vue 인스턴스가 생성된 겨우, 인스턴스를 DOM에 마운트하는 경우, 데이터가 변경되어 DOM을 업데이트하는 경우 등

- 각 단계가 트리거가 되어 특정 로직을 실행할 수 있음


## created

- Vue instance가 생성된 후 호출됨

- data, computed 등의 설정이 완료된 상태

- 서버에서 받은 데이터를 vue instance의 data에 할당하는 로직을 구현하기 적합

- 단, mount 되지 않아 요소(HTML 요소)에 접근할 수 없음

- 데이터를 준비하는 단계


## mounted

- Vue instance가 요소에 mount된 후 호출됨

- mount된 요소를 조작할 수 있음

- 데이터와 html이 연결되는 단계


## updated

- 데이터가 변경되어 DOM에 변화를 줄 때 호출됨


## Lifecycle Hooks 특징

- instance마다 각각의 Lifecycle을 가지고 있음
  - 해당 프로젝트에서는 ChildComponent와 DogComponent가 각각의 Lifecycle을 가지고 있음

- Lifecycle Hooks는 컴포넌트별로 정의할 수 있음

- 해당 프로젝트 동작 순서
  - 1. App.vue 생성
  - 2. ChildComponent 생성
  - 3. ChildComponent 부착
  - 4. App.vue 부착
  - 5. ChildComponent 업데이트