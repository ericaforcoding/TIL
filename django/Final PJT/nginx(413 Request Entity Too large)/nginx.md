
# 에러 메시지

![[nginx.png]]

- 배포한 서버에서 사진 첨부시 "413 Request Entity Too Large" 에러 발생

# 해결 방법

- 참조 문서: https://blog.choyoungil.com/2021/08/06/aws-elastic-beanstalk-413-request-entity-too-large-%EC%98%A4%EB%A5%98-%ED%95%B4%EA%B2%B0/

- 배포되는 환경의 Nginx 설정을 수정
![[nginxfix.png]]

![[nginfix2.png]]