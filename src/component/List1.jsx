import React from 'react'

let fruits = ["사과", "배", "바나나"]
const List1 = () => {
  return (
    <div>    <div>
      <h2>리스트로 보여주기</h2>
      <p>배열에 데이터를 조작하여 새롭게 만들기</p>
      <p>배열 데이터를 li목록으로 만들기</p>
      <ul>
        {/* map 배열명.map((배열데이터저장변수, 순서저장변수, 배열명)=> 실행할문장) 
        배열명.map(()=>{
        return 반환값
        }) 
         */}
         {fruits.map((item,id)=><li key={id}>{item}</li>)}
      </ul>
    </div></div>
  )
}

export default List1