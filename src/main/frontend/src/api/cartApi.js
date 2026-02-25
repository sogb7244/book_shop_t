import axios from "axios";

export const regCart = async (regData) => {
  try{
    const response = await axios.post('http://localhost:8080/carts', regData);
    return response;
  } catch(e){
    console.log('장바구니 등록 axios 오류', e);
  } 
}

export const selectCart = async(memEmail) => {
  try{
    const response = await axios.get(`http://localhost:8080/carts/${memEmail}`);
    return response;
  } catch(e){
    console.log('장바구니 불러오기 오류',e)
  }
}

export const deleteCart = async(bookNum) => {
  try{
    const response = await axios.delete(`http://localhost:8080/carts/${bookNum}`)
    return response;
  }catch(e){
    console.log('장바구니 선택 목록 삭제오류',e)
  }
}