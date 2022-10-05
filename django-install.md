태그: #django #install


# 4. 페이지 생성

## urls.py

"""pjt URL Configuration

  

The `urlpatterns` list routes URLs to views. For more information please see:

https://docs.djangoproject.com/en/3.2/topics/http/urls/

Examples:

Function views

1. Add an import: from my_app import views

2. Add a URL to urlpatterns: path('', views.home, name='home')

Class-based views

1. Add an import: from other_app.views import Home

2. Add a URL to urlpatterns: path('', Home.as_view(), name='home')

Including another URLconf (다른 url 설정을 가지고 오고 싶다면)

1. Import the include() function: from django.urls import include, path

2. Add a URL to urlpatterns: path('blog/', include('blog.urls'))

"""


###  URL 맵핑
- URL 맵핑 시 끝에는 슬래시를 붙임
- 슬래시를 붙이면 사용자가 슬래시 없이 주소를 입력해도 장고가 저동으로 슬래시를 붙여줌

- ### URL 분리
	- Including another URLconf (다른 url 설정을 가지고 오고 싶다면)
		1. Import the include() function: from django.urls import include, path
		2. Add a URL to urlpatterns: path('blog/', include('blog.urls'))
			- *blog/로 시작되는 페이지 요청은 모두 blog/urls.py 파일에 있는 url 매핑을 참고하여 처리하라는 뜻*


```bash

# pjt > urls.py

urlpatterns = [

path('admin/', admin.site.urls),

path('articles/', include('articles.urls')) #articles/로 시작되는 페이지 요청은 모두 articles/urls.py 파일에 있는 url 매핑을 참고하여 처리하라는 뜻 

]

#articles > urls.py

from django.urls import path 

#urlpatterns 리스트 안에 path를 사용하기 위해 import 

# 2. app_name 설정

app_name = 'articles'

# 1. urlpatterns  빈 리스트를 만들어 준 후. 
urlpatterns = [

#각 path들 입력
]
```


# 5. 게시판 만들기(crud)

## 1. 모델 정의
- UI/DB는 밀접한 관계


### 1. 모델 설계

```django

class Article(models.Model):
title = models.CharField(MAX_LENGTH=20)
content = models.TextField()
created_at = models.DateTimeField(auto_now_add=True)
updated_at = models.DateTimeField(auto_now=True)

```

- CharField (): 글자 수를 제한하고 싶은 데이터
- TextField(): 글자 수 제한이 없는 데이터
- DateTimeField(): 날짜, 시간 관련 속성 
	- DateTimeField(auto_now_add=True): 추가될 때 자동으로 기록
	- DateTimeField(auto_now=True): 자동으로 기록


### 2. 데이터 베이스 반영

```bash
$ python manage.py makemigrations
$ python manage.py migrate

# 마이그레이션 확인

$ python manage.py showmigrations
```

## 2. CRUD 기능 구현
> 새 기능 추가->그 기능에 대응하는 url 추가 -> url에 대응되는 view 추가

- 새 기능 추가->그 기능에 대응하는 url 추가 -> url에 대응되는 view 추가
-  1개의 url에 1개의 view가 있어야 한다! 

### 1. 게시글 생성
> 사용자에게 HTML Form 제공, 입력한 데이터를 처리


#### 1. HTML Form 제공

