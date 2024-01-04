### 🖤 API 통신에 대하여 

- 로딩/에러 처리를 하는 방법에는 어떤 것들이 있을까?
    1. API Call 함수: try/catch 문을 사용하여 API Call 을 하는 부분에서 처리를 하거나, axios와 같이 interceptor을 지원하는 라이브러리의 경우 interceptor에서 처리할 수도 있다.
    2. 서버 상태 관리 라이브러리의 Error Callback에서 처리: React Query나 SWR 같은 서버 상태 관리 라이브러리를 사용하면, 라이브러리 내부에서 관리할 수 있다. 
    3. ErrorBoundary: 에러를 로그에 남긴다.


- 패칭 라이브러리란 무엇이고 어떤 것들이 있을까?
    - 데이터 패칭이란 웹 에플리케이션에서 서버로부터 데이터를 가져오는 기능을 뜻한다. 이러한 작업을 단순화하고 관리를 유용하게 하기 위해 사용하는 것이 데이터 패칭 라이브러리라고 한다.
    - axios, React Query, SWR 등이 있다.


- 패칭 라이브러리를 쓰는 이유는 무엇일까?
    - 성능과 효율성 증가
        - 데이터를 가져오는 데에 네트워크 비용과 시간이 많이 소모되는데 데이터 요청과 응답 처리를 최적화하여 애플리케이션의 성능을 향상시켰다.
    - 최적화된 데이터 요청 필요
        - 종종 동일한 데이터를 여러 번 요청하는 상황이 발생한다. 이러한 중복 요청을 방지하고, 이미 캐시된 데이터를 사용하여 성능을 최적화할 수 있어졌다.


🖤 참조링크
- [데이터 패칭이란?](https://velog.io/@diso592/%EB%8D%B0%EC%9D%B4%ED%84%B0-%ED%8C%A8%EC%B9%AD-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-%EB%B0%B0%EA%B2%BD%EA%B3%BC-%EA%B0%9C%EB%85%90)
- [API 에러 관리](https://medium.com/@jnso5072/kor-react-api-%EC%97%90%EB%9F%AC-%EB%A1%9C%EA%B9%85%EC%9D%80-%EC%96%B4%EB%94%94%EC%84%9C-%EC%B2%98%EB%A6%AC%ED%95%98%EB%8A%94-%EA%B2%83%EC%9D%B4-%EC%A2%8B%EC%9D%84%EA%B9%8C-feat-react-query-fe67feec8e4c)