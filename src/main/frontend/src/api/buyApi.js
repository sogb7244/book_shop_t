import axios from "axios"

export const insertBuy = async(data) => {
  try{
    const response = await axios.post('http://localhost:8080/buys',data);
    return response;
  }catch(e){
    console.log('도서구매등록 axios 오류')
  }
}