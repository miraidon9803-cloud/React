import './App.css';
import ComClass1 from './component/ComClass1';
import ComFunction2 from './component/ComFunction2';
import ComFunctimg3 from './component/ComFunctImg3';
import Jsx1Variable from './component/Jsx1Variable';
import Jsx2Function from './component/Jsx2Function';
import Jsx3IF from './component/Jsx3IF';
import Jsx4Style from './component/Jsx4Style';
import Jsx5Import from './component/Jsx5Import';
import ComFuntProps1 from './component/ComFuntProps1';
import ComClassProps2 from './component/ComClassProps2';
import ComFunProps3 from './component/ComFunProps3';
import ComFunctProps4Object from './component/ComFunctProps4Object';
import ComFuctProps5Child from './component/ComFuctProps5Child';
import ComCombine1 from './component/ComCombine1';
import ComCombine2Object from './component/ComCombine2Object';
import ComCombine3Object from './component/ComCombine3Object';
import Comcondition1Class from './component/Comcondition1Class';
import ComCondition2Funct from './component/ComCondition2Funct';
import ComCondition3 from './component/ComCondition3';
import ComConditionLogin4 from './component/ComConditionLogin4';
import ComConditionLogin5 from './component/ComConditionLogin5';
import List1 from './component/List1';
import List2Object from './component/List2Object';
import List3Object from './component/List3Object';
import List4Object from './component/List4Object';
import List5Product from './component/List5Product';
import List6Filter from './component/List6Filter';
import List7Filter from './component/List7Filter';
import Event1 from './component/Event1';
import Event2 from './component/Event2';
import Event3 from './component/Event3';
import Event4Change from './component/Event4Change';
import Event5Change from './component/Event5Change';
import Event6ChangeRadio from './component/Event6ChangeRadio';
import Event7ChangeSelect from './component/Event7ChangeSelect';




const user = {
  name: "책상",
  imageUrl: "./images/desk.png",
  imageSize: 100

}
function App() {
  return (
    <div className="App">
      <h1>리액트 연습하기</h1>
      {/* <h1>react 연습페이지</h1>
      <h2>컴포넌트의 종류</h2>
      <p>클래스 컨포넌트</p>
      <ComClass1 />

      <p>함수 컨포넌트</p>
      <ComFunction2/>

      <hr/> */}
      {/* ratce
      r : react
      a : arrow
      f : functon
      c : component
      e : export */}
      {/* <h2>이미지 - 함수 컴포넌트 </h2>
      <ComFunctImg3/> */}
      {/* <h2>jsx 문법 알아보기</h2>
      <p>1. 부모요소가 반드시 하나가 감싸는 형태여야한다</p>
      <p>2. 자바스크립트 표현식(변수와 수식)을 사용할 수 있다 - {}로 묶어서 사용한다. </p>
      <p>3. 조건문 삼항조건연산자를 주로 사용한다</p>
      <p>4. 스타일 fontColor 카멜표기법만 사용가능하다 inline</p>
      <p>5. 주석 -  </p>

    
      <ComClass1/>
      <ComFunction2/>
      <ComFunctimg3/>
      <Jsx1Variable/>
      <Jsx2Function/>
      <Jsx3IF/>
      <Jsx4Style/>
      <Jsx5Import/>
      */}

      {/* <h2>컴포넌트 속성</h2>
      <p>컴포넌트 속성을 props 전달하여 값 사용하기</p> */}
      {/* <ComFuntProps1 name="홍길동" age={20} />
      <ComFuntProps1 name="짱구" age={7} />
      <ComClassProps2 city="서울" hour={1} />
      <ComFunProps3
        name={user.name}
        imgUrl={user.imageUrl}
        imgSize={user.imageSize} />

      <ComFunctProps4Object users={user} />

      <ComFuctProps5Child>
        <h3>컴포넌트 자식</h3>
        <p>컴포넌트 안에 내용을 넣을수 있어요</p>
      </ComFuctProps5Child> */}

       {/* <ComCombine1/> */}
      {/* <ComCombine2Object/> */}
      {/* <ComCombine3Object/>  */}
       {/* <Comcondition1Class/> */}
       {/* <ComCondition2Funct/>  */}
      {/* <ComCondition3/> */}

      {/* <h2>조건문</h2>
      <h3>클래스 컴포넌트</h3>
      상품명,품절을 출력해줄 컴포넌트 */}

      {/* <ComConditionLogin4/> */}
      {/* <ComConditionLogin5/> */}

      {/* <h1>리스트 렌더링</h1>
      <List1/>
     <List2Object/>
     <List3Object/> */}
     {/* <List4Object/> */}
     {/* <List5Product/> */}
     {/* <List6Filter/> */}
     {/* <List7Filter/> */}
     
     <h2>이벤트</h2>
     <p>마우스 이벤트 - onClick, onMouseEnter, onMouseLeaver, onMouseOver, onMouseOut</p>
     <p>키보드 이벤트 - onKeyDown, onKeyUp</p>
     <p>폼 이벤트 - onChange(입력값이 변경될때), onInput(입력할때마다), onSubmit(제출)</p>


     <Event1/>
     <Event2/>
     <Event3/>
     <Event4Change/>
     <Event5Change/>
     <Event6ChangeRadio/>
     <Event7ChangeSelect/>
    </div>
    
  
  );
}

export default App;
