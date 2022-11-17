
#django  

FIX Signup 회원가입 오류 수정 

# 문제 상황

- 기존 부트스트랩으로 작성되었던 signup.html을 변경하는 과정에서 발생 
 
![[signuptemplatesbug.png]]

- `<input type="submit" value="회원가입" class='btn btn-primary'>` 클릭시 터미널에서 POST는 뜨지만, 회원 정보가 DB로 전송이 안 되는 오류 발생.


# 해결 과정


1. 에러 발생한 페이지 print 찍어보기

accounts/views.py

``` python 
def signup(request):
    if request.method =="POST":
        form = SignupForm(request.POST)
        print(form)
        print(request.POST)
        if form.is_valid():
            user = form.save()
            auth_login(request, user)
            return redirect("accounts:index")
    else:
        form = SignupForm()
    context = {"form": form}
    return render(request, "accounts/signup.html", context)
 ```

2. forms.py 확인

accounts/forms.py

```python 
class SignupForm(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        model = get_user_model()
        fields = (
            "username",
            "password1",
            "password2",
            "last_name",
            "email",
        )
        labels = {
            "username": "아이디",
            "password1": "비밀번호",
            "password2": "비밀번호 확인",
            "last_name": "이름",
            "email": "이메일",
        }
```

- fields명에 'password1', 'password2', 'last_name'이라 기재되어 있음. 

3. accounts/templates/signup.html 의 input name 확인 

``` python 
          <div class="input-box">
            <input id="password" type="password" name="password1" placeholder="비밀번호">
            <label for="password">&nbsp;&nbsp;비밀번호</label>
            </div>&nbsp;&nbsp;다른 개인 정보와 유사한 비밀번호는 사용할 수 없습니다.<br>
            &nbsp;&nbsp;비밀번호는 최소 8자 이상이어야 합니다.<br>
            &nbsp;&nbsp;통상적으로 자주 사용되는 비밀번호는 사용할 수 없습니다.<br>
            &nbsp;&nbsp;숫자로만 이루어진 비밀번호는 사용할 수 없습니다.
    
          <div class="input-box">
            <input id="password" type="password" name="password2" placeholder="비밀번호 확인">
            <label for="password">&nbsp;&nbsp;비밀번호 확인</label>
          </div>&nbsp;&nbsp;확인을 위해 이전과 동일한 비밀번호를 입력하세요.
```

- forms.py에서 지정한 fields명과 html에서 사용하는 input의 name값을 일치시켜줘야 함.
    - name만 일치시켜주면 됨!!

