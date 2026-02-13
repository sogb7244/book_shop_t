import React, { useState } from 'react'
import Input from '../../components/common/Input'
import Button from '../../components/common/Button'
import styles from './Login.module.css'
import { login } from '../../api/memberApi'
import { useNavigate } from 'react-router-dom'

const Login = ({setloginInfo}) => {
  const nav = useNavigate();
  //입력한 정보를 저장할 state변수
  const [loginData, setLoginData] = useState({
    memEmail : '',
    memPw : ''
  });
  //입력할 때마다 실행하는 함수
  const handleLoginData  = (e) => {
    setLoginData(prev => ({...prev,[e.target.name] : e.target.value}));
  }

  //로그인 눌렀을 때 실행 함수
  const goLogin = async() => {
   const response = await login(loginData);
   //spring에서 null이 리턴되면 react에서는 빈문자('')로 전달받음
   //falsy : 0,'',null,undefined,NaN
   //밑에 해석하면 response.data 가 위에 해당할 때 펄시임
   if(response.data !== ''){//로그인 가능하면
      alert('성공')
      //로그인한 회원이 이메일, 이름, 권한 정보를 가진 변수
      const loginInfo ={
        memEmail : response.data.memEmail,
        memName : response.data.memName,
        memRole : response.data.memRole
      };
      //로그인 정보를 sessionStorage에 저장하기 위해서 json(객체를 문자화시킨것)으로 변경
      // JOSN.stringify(객체); -> 객체를 json으로 변경
      // JSON.parse(json); -> json 데이터를 객체로 변경

      //session storage에 로그인한 유저 정보를 저장
      sessionStorage.setItem('loginInfo',JSON.stringify(loginInfo));
      //App컴포넌트에서 만든 loginInfo 변수에 로그인 정보를 저장
      setloginInfo(loginInfo);
      //도서 목록 페이지로 이동
     console.log(loginInfo);
      if(loginInfo.memRole ==='USER'){
        nav('/')
      }
      else if(loginInfo.memRole ==='MANAGER'){
        nav('/manage/book-form')
        
      }
      
      
   }else{
      alert('아이디,비번을 확인하세요')

      //입력 데이터 초기화
      setLoginData({
        memEmail : '',
        memPw : ''
      });      

   }
  }
  return (
    <div>
      <p>로그인페이지입니다</p>
      <div className={styles.container}>
        <Input 
          name='memEmail'
          value={loginData.memEmail}
          onChange={e => {
            handleLoginData(e);
          }}
         />
        <Input
          type='password'
          name='memPw'
          value={loginData.memPw}
          onChange={e => {
            handleLoginData(e);
          }}
          //키보드 엔터 입력 시 로그인 기능 실행
          //모르면 콘솔로그 보셈
          onKeyDown={e => {
           if(e.key === 'Enter') {
              goLogin(e);
           }
          }}
          />
        <Button
          title='로그인'
          onClick={(e) =>{
            goLogin(e);
          }} />
      </div>
    </div>
  )
}

export default Login