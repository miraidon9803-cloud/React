import React from 'react'

const Jsx3IF = () => {
  const isLogin = true;
  return (
    <div>
      <h2>JSX 에서 조건문</h2>
      <p>삼항조건연산자</p>
      <p>조건?조건참:조건거짓</p>
      <h3>{isLogin ?"홍길동 환영합니다":"로그인을 환영합니다"}</h3>
    </div>
  )
}

export default Jsx3IF