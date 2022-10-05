tag: #html #form #input 

# form 태그  

- form
	- 사용자에게 양식을 제공하고 값을 받아서(input : name, value) 서버에 전송(form : action)
	- form 태그에 action 속성을 지정하지 않으면 현재 페이지의 url이 디폴드 action으로 설정된다.

```html

<form action="{% url 'articles:create' %}">

<label for="title"> 제목 : </label>

<input type ="text" name="title" id="title">

<label for="content">내용 : </label>

<textarea name ="content" id="content" cols="30" rows="10"></textarea>

<input type="submit" value="글쓰기">


</form>

```

# Input 태그 

