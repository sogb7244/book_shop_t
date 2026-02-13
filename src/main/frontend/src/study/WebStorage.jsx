import React from 'react'

//Web Storage(cookie, localstorage, sessionstorage)
//얘는 문자열 데이터만 저장 가능
const WebStorage = () => {

  //Local Storage에 데이터를 저장
  localStorage.setItem('local-name','kim'); //key  , value
  localStorage.setItem('local-age','20');

  //Local Storage에 저장된 데이터 읽기
  localStorage.getItem('local-name'); //'kim'
  localStorage.removeItem('local-age'); // key가 local-age인 데이터 삭제
  //session stroage에 데이터 저장
  sessionStorage.setItem('session-name','lee');
  sessionStorage.setItem('session-age','30');
  sessionStorage.removeItem('session-age');
  //session stroage에 저장된 데이터 읽기
  sessionStorage.setItem('session-age'); //'30'
  //모든파일에서 찾기 ctrl + shift + f
  return (
    <div>WebStorage</div>
  )
}

export default WebStorage