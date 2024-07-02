# Favorite 18 클라이언트

Favorite 18 의 클라이언트 앱입니다.  
React Native 0.74 버전을 기반으로 제작되었습니다.

> [!IMPORTANT]
> gradle 8.6 -> 8.5 로 변경함  
> 현재 세팅한 환경의 android 시뮬레이터는 gradle 8.5 버전에서 안정적이게 동작하는 것으로 보임 [[참고링크]](https://stackoverflow.com/questions/78384724/react-native-error-java-io-uncheckedioexception-could-not-move-temporary-work)  
> androd\gradle\gradle-wrapper.properties\distributionUrl=https\://services.gradle.org/distributions/gradle-8.5-all.zip

## 진행 순서

1. 샘플코드 제거
2. Stack Navigation 설치 (react router 역할)
3. Drawer Navigation 설치 (사이드 바)
4. 샘플용 스크린 구현 (로그인 전 홈, 로그인, 회원가입 스크린 포함)
5. 커스텀 컴포넌트 구현 (버튼, 인풋 필드)
6. 페치 클라이언트 설정 (axios, react-query)
   > axios 샘플 인스턴스 생성  
   > react-query 는 설치만 진행
7. 절대경로 alias 처리

> [!NOTE]
> 베이스 프로젝트용 템플릿 제작  
> 프로젝트용 공통 컴포넌트(헤더, 푸터, 네비게이션, 사이드바, 버튼, 인풋) 제작은 브랜치 추가하여 진행 예정
