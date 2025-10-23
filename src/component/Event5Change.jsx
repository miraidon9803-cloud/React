import React, { useState } from 'react'

function Event5Change() {
  //1. 상태변수
  let [checked,setCheck] = useState(false)

  //2. 상태변수의 값 변경 메서드
  const handleChange = (e) => {
    console.log(e.target.checked);
    setCheck(e.target.checked)
  }

  //3. 화면에 보여줄 내용
  return (
    <div>
      <h2>checkbox</h2>
      <label>
        <input type="checkbox" onChange={handleChange} />
        약관의 동의합니다
      </label>
      <p>{checked?"동의함":"동의안함"}</p>
    </div>
  )
}

export default Event5Change