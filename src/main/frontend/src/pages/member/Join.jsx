import React, { useState } from 'react'
import styles from './Join.module.css'
import Button from '../../components/common/Button'
import Input from '../../components/common/Input'
import axios from 'axios'
import { insertMember } from '../../api/memberApi'
import Login from './Login'
import { useNavigate } from 'react-router-dom'

const Join = () => {
  const nav = useNavigate();
  const [joinData,setJoindata] =useState({
    memEmail : '',
    memPw : '',
    confirmPw : '',
    memName : '',
    memTel : '', //완성된 연락처
    tel1 : '', //010
    tel2 : '', // 1111
    tel3 : '', // 2222
    memAddr : '',
    addrDetail : ''
  });
  console.log(joinData)
  //입력할 때마다 실행하는 함수
  const handleJoinData = (e) => {
    const {name, value} = e.target;
        
    setJoindata(prev => ({...prev, //join 데이터의 최신데이터
                [name] : value
                        })
               );
    //만약 연락처를 변경하고 있다면...
    
        if(name ==='tel1' || 
           name ==='tel2' || 
           name ==='tel3'){
            setJoindata(prev => ({
              ...prev,
              memTel : `${prev.tel1}-${prev.tel2}-${prev.tel3}`
            }))
        }
  }

  //회원가입 버튼 클릭 시 실행 함수
  const goJoin = async() => {
    const response = await insertMember(joinData);

    if(response.status === 201){
      alert('회원가입을 축하합니다.')
      nav('/login')
    }
    else{
      alert('오류 발생!!')
    }
  }
  return (
   <div className={styles.container}>
      <div
        className={styles.id_div}>
          <p>Email</p>
          <div>
            {/* 자동완성이 안될뿐 */}
            <Input 
              name='memEmail'
              value={joinData.memEmail}
              onChange={e => handleJoinData(e)}/>
            <Button title='중복확인'/>
          </div>
      </div>
      <div>
        <p>Password</p>
        <Input
          name='memPw'
          value={joinData.memPw}
          onChange={e => handleJoinData(e)} 
          type='password'/>
      </div>
      <div>
        <p>Confirm Password</p>
        <Input
         name='confirmPw'
         value={joinData.confirmPw}
         onChange={e => handleJoinData(e)} 
         type='password'/>
      </div>
      <div>
        <p>Name</p>
        <Input
          name='memName'
          value={joinData.memName}
          onChange={e => handleJoinData(e)} />
      </div>
      <div>
        <p>Tel</p>
        <div className={styles.tel_div}>
          <Input
            name='tel1'
            value={joinData.tel1}
            onChange={e => handleJoinData(e)} />
          <Input
            name='tel2'
            value={joinData.tel2}
            onChange={ e =>handleJoinData(e)} />
          <Input
            name='tel3'
            value={joinData.tel3}
            onChange={e => handleJoinData(e)} />
        </div>
      </div>
      <div className={styles.address}>
        <p>Address</p>
        <div>
          <Input
            name='memAddr'
            value={joinData.memAddr}
            onChange={ e =>handleJoinData(e)} />
          <Button title='검색' variant='gray'/>
        </div>
          <Input 
            name='addrDetail'
            value={joinData.addrDetail}
            onChange={e => handleJoinData(e)} />
      </div>
      <div className={styles.btn_div}>
         <Button 
          title='회원가입'
          variant='purple'
          onClick={e => {goJoin()}}/>
      </div>
   </div>
  )
}

export default Join