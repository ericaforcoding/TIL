#### [EMMET](https://docs.emmet.io/cheat-sheet/)이란?

> 강력한 자동완성 기능 등으로 HTML 작성 속도를 크게 향상시켜주는 플러그인

#####  

##### Emmet 문법?

1. 요소(Elements)생성

   - 생성하려는 요소의 이름을 입력한 뒤 `tab` 누르면 태그 자동생성

     ```html
     <!--div + tab -->
     
     <div></div>
     ```

2. 구조화 하기(Nesting operators)

> Emmet의 문법을 활용하여 요소들의 구조를 간편히 생성

- 자식 요소 :`>` 

  - `>` 을 사용하여 자식요소 생성

    ```html
    <!--div>ul>li + enter-->
    
    <div>
        <ul>
            <li></li>
        </ul>
    </div>
    
    ```

    

- 형제 요소: `+`

  - `+` 를 사용하여 한 요소와 같은 단계에 위치한 요소 생성

    ```html
    <!-- div+p+bq + enter -->
    
    <div></div>
    <p></p>
    <blockquote></blockquote>
    ```

    

- 한 단계 올리기: `^`

  - `^` 를 사용하여 한 단계 위에 요소를 배치할 수 있다.

  ``` html
  <!--div+div>p>span+em^bq-->
  
  <div>
      <div>
          <p><span></span><em></em></p>
          <blockquote></blockquote>
      </div>
  </div>
  
  <!--span+em은 p태그의 하위 단계에 위치하지만 bq는 ^로 인해 p태그와 같은 단계에 위치-->
  
  <!-- ^의 개수를 추가할수록 상위 단계로 올라갈 수 있음-->
  
  <!--div+div>p>span+em^^bq-->
  
  <div></div>
  <div>
      <p></p>
      <span></span><em></em></div>
  <blockquote></blockquote>
  
  ```

- Multiplication: `*`

  - `*`로 요소를 얼마나 많이 출력할지 결정가능

    ```html
    <!-- ul>li *2>
    
    <ul>
        <li></li>
        <li></li>
    </ul>
    
    <!--(ul>li)*2>
    
    <ul>
        <li></li>
    </ul>
    <ul>
        <li></li>
    </ul>
    ```

    