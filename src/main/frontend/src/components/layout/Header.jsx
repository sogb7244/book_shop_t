import React, { useEffect, useState } from 'react'
import styles from './Header.module.css'
import { Link, useNavigate } from 'react-router-dom'
//일반 사용자가 보는 페이지의 헤더 영역

const Header = ({setloginInfo}) => {
  const nav = useNavigate();
  // //로그인 여부 확인
  // //json 타입으로 가져옴 = 문자열로 가져옴
  // const loginInfo = sessionStorage.getItem('loginInfo');
  // console.log(loginInfo);
  // //json데이터를 객체로 변환
  // const loginInfo_obj = JSON.parse(loginInfo);
  // console.log(loginInfo_obj);
     const loginInfo = sessionStorage.getItem('loginInfo');
       const loginobj =JSON.parse(loginInfo);
  return (
    <div className={styles.container}>
      <div className={styles.top_menu}>
        <ul> 
          <>
          <li
           >
            {loginobj ? <p>{loginobj.memName}님 반갑습니다</p> : <Link to='/login'>login</Link>}
          </li>
          <li>
            <p>장바구니</p>
          </li>
          <li>
            {loginobj ? <p
              style={{cursor :'pointer'}}
              onClick={e => {
                sessionStorage.removeItem('loginInfo');
                setloginInfo({});
                nav('/');
              }}
              >logout</p> :<Link to='/join'>join</Link>}
          </li>
          </>
        </ul>
      </div>
      <div className={styles.banner_Div}>
        <img 
          className={styles.banner_img}
          src="/book_banner.PNG" 
          />
          <h3 className={styles.banner_title}>Book Shop</h3>
      </div>
      <div>
        일반 사용자가 보는 메뉴
      </div>
    </div>
  )
}

export default Header