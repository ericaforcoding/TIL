~태그: #django #error 

# 1. 가상환경 설치

# 2. 장고 프로젝트 생성하기

### 1. 오류 메세지 (python: can't open file '/Users/jj/Desktop/1005/manage.py': [Errno 2] No such file or directory)

```bash

(venv) Desktop/1005  > django-admin startproject pjt
(venv) Desktop/1005  > python manage.py runserver
python: can't open file '/Users/jj/Desktop/1005/manage.py': [Errno 2] No such file or directory

```

### 2. 해결방안

- 프로젝트 이름명 뒤에 띄어쓰기 + '.' 적기
- `.`  : '현재 디렉터리를 프로젝트 디렉터리로 만들라는 의미'

```bash
(venv) Desktop/1005  > django-admin startproject pjt .

# 프로젝트 이름명 뒤에 띄어쓰기 + '.' 적기


```

- 띄어쓰기 누락시 오류 메시지 발생

```bash

(venv) Desktop/1005  > django-admin startproject pjt.
CommandError: 'pjt.' is not a valid project name. Please make sure the name is a valid identifier.

```


### 3. 결과

```bash

(venv) Desktop/1005  > django-admin startproject pjt .
(venv) Desktop/1005  > python manage.py runserver
Watching for file changes with StatReloader
Performing system checks...

System check identified no issues (0 silenced).

You have 18 unapplied migration(s). Your project may not work properly until you apply the migrations for app(s): admin, auth, contenttypes, sessions.
Run 'python manage.py migrate' to apply them.
October 05, 2022 - 06:29:30
Django version 3.2.13, using settings 'pjt.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.


```

- http://127.0.0.1:8000/ 접속 후 로켓 발사 확인 후 ctrl+c로 서버 종료


# 장고 앱 생성하기


# 페이지 생성하기

## 1. 오류메시지( ModuleNotFoundError: No module named 'articles.urls')

```bash


# 1. pjt>urls.py 에서 article path 추가 

urlpatterns = [

path('admin/', admin.site.urls),

path('articles/', include('articles.urls')) #articles 앱 단위에서 관리하겠다는 뜻

]

#2. 서버 구동 시 에러 메시지 발생

(venv) Desktop/1005  > python manage.py runserver
Watching for file changes with StatReloader
Performing system checks...

...


ModuleNotFoundError: No module named 'articles.urls'

```

## 2. 해결방안

- include 하겠다고 했으면서 articles 앱에 urls.py를 생성하지 않았기 때문 
- articles 어플에 urls.py 파일 생성 후 urlpatterns = [ ] 를 생성해주면 서버 구동 가능
- 
``` bash

# 1. articles>urls.py 에서 urlpatterns 빈 리스트 추가 
# url 설정을 app 단위로 하기 때문! 

urlpatterns = [

]

#pjt>urls.py 에서 path('articles/', include('articles.urls'))와 연결시킨 것

urlpatterns = [

path('admin/', admin.site.urls),

path('articles/', include('articles.urls')) #articles 앱 단위에서 관리하겠다는 뜻

]
```

- 혹은 installed_apps에 맞게 추가하였는지 확인
- 뒤에 트레일링 컴마를 붙였는 지 확인할 것 

```
installed_apps =[
    'articles', 

]
    


```

## 1. 오류 메시지(TemplateDoesNotExist at /articles/)

```
# TemplateDoesNotExist at /articles/

```

## 2. 해결방안

- 오타 주의! (articles, templates)
- 이 경우에는 templates를 template로 오타가 있었음 
- 오타가 없다면 서버를 껐다가 켜보기
``` python

ctrl + C 
python manage.py runserver

```



# 모델 생성

## 1. 오류 메시지(TypeError: __init__() got an unexpected keyword argument 'MAX_LENGTH')

``` django

class Article(models.Model):

title = models.CharField(MAX_LENGTH=20)

content = models.TextField()

created_at = models.DateTimeField(auto_now_add=True)

updated_at = models.DateTimeField(auto_now=True)


```

## 2. 해결방안

- models.CharField(MAX_LENGTH=20) 내 max_length가 소문자로 되어야 함!! 