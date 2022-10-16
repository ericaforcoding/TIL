# 1. Django App URL 매핑

- 하나의 프로젝트 내에 여러 장고 앱이 존재할 때
- 각각의 장고 앱 안에 urls.py 파일을 만들고, 메인 urls.py 파일에서 각 장고 앱의 urls.py 파일로 URL 매핑을 위탁

![[스크린샷 2022-10-13 오후 1.54.34.png]]

- 메인 URL 파일에서 1개의 장고 앱 URL 파일을 include하여 사용한 것
- "articles/" 로 시작되는 URL 들을 articles.urls 즉 articles 앱의 urls.py에 있는 매핑을 사용하는 것


![[스크린샷 2022-10-13 오후 1.57.36.png]]

- 각 장고 앱에 있는 urls.py는 메인과 동일한 방식으로 매핑을 정의
- 단, 웹 루트(/)가 아닌 현재 앱의 상대적 위치를 기준으로 url 경로를 지정함
- 첫번째 path() 함수는 공백, 즉 디폴트 웹페이지 url인 경우 articles/views.py에 있는 index()함수를 호출하는 것 
- 두번째 path()함수는 웹 클라이언트가 "/articles/new"를 요구했을 때  URL은 articles.views.new를 호출하는 것
- 
