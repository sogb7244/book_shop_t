//회원과 관련된 axios 기능을 정의한 파일

import axios from "axios"

/**
 * 회원가입 쿼리실행 axios 함수
 * @param {Object} joinData 회원가입 시 입력한 객체 데이터
 * @returns 
 */
//회원가입 요청 api
export const insertMember = async(joinData) =>{
  try{
    const response = await axios.post('http://localhost:8080/members',joinData)
    return response;
  } catch (e){
    console.log('회원가입 오류', e);
  }
  axios.put
}
/**
 * 입력한 이메일이 중복인지 확인하는 api이다.
 * @param {string} memEmail 입력한 이메일
 * @returns 
 */
export const checkId = async (memEmail) => {
  try{
    const response = await axios.get(`http://localhost:8080/members/checkId/${memEmail}`)
    return response
  } catch(e) {
    console.log('이메일 중복 확인 axios 에러',e)
  }
}

//로그인 함수
export const login = async(loginData) => {
  try{
    //params 안의 데이터는 리엑트에서 던지는 데이터임
    const response = await axios.get('http://localhost:8080/members/login',{params : loginData})
    return response;
  } catch(e) {
    console.log('로그인 오류입니다',e)
  }
}