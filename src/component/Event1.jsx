import React from 'react'

const Event1 = () => {
  //1.변수
  //2.메서드
  // function handleClick(e){
  //   console.log("클릭되었습니다.")
  //   console.log(e);
  // }
  const handleClick =(e)=>{
    console.log("클릭되었습니다")
  }
  //화면 보여질 내용
  return (
    <div>
      <h2>Event1</h2>
      <button onClick={handleClick}>클릭</button>
    </div>
  )
}

export default Event1