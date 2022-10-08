tag: #html #form #input #django

# form 태그  

- form
	- 사용자에게 양식을 제공하고 값을 받아서(input : name, value) 서버에 전송(form : action)
	- form 태그에 action 속성을 지정하지 않으면 현재 페이지의 url이 디폴드 action으로 설정된다.
		- action = "" 은 결국 url을 현재 url 그대로 넣는다는 의미

```html

<form action="{% url 'articles:create' %}">

{% csrf_token %}

<label for="title"> 제목 : </label>

<input type ="text" name="title" id="title">

<label for="content">내용 : </label>

<textarea name ="content" id="content" cols="30" rows="10"></textarea>

<input type="submit" value="글쓰기">


</form>

```

## {% csrf_token %}

- 장고의 기본 기능
	- 장고 프로젝트 설치 시 자동으로 settings.py 파일의 MIDDLEWARE 항목에 추가
- form 엘리먼트를 통해 전송된 데이터(답변)이 실제로 웹 브라우저에서 작성된 데이터인지 판단하는 역할
- `<form>` 태그 바로 밑에 항상 배치하여야 함

# Input 태그 

