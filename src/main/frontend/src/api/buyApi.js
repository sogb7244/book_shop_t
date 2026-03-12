import axios from "axios"

export const insertBuy = async(data) => {
  try{
    const response = await axios.post('http://localhost:8080/buys',data);
    return response;
  }catch(e){
    console.log('도서구매등록 axios 오류',e)
  }
}

export const selectBuyList = async(memEmail) =>{
  try{
    const response = await axios.get(`http://localhost:8080/buys/${memEmail}`)
    return response;
  }catch(e){
    console.log('도서구매목록 axios 오류',e)
  }
}
export const sales = async() => {
  try{
    const response = await axios.get('http://localhost:8080/buys/admin')
    return response;
  }catch(e){
    console.log('도서구매목록 axios 오류',e)
  }
}

export const salesMonth = async() => {
  try{
    const response = await axios.get('http://localhost:8080/buys/adminMonth')
    return response;
  }catch(e){
    console.log('도서구매목록 axios 오류',e)
  }
}

export const charts = async() => {
  try{
    const response = await axios.get('http://localhost:8080/buys/charts')
    return response;
  }catch(e){
    console.log('차트 axios 오류',e)
  }
}
export const rank = async() => {
  try{
    const response = await axios.get('http://localhost:8080/buys/purRank')
    return response;
  }catch(e){
    console.log('구매랭킹 axios 오류',e)
  }
}
export const bookRank = async() => {
   try{
    const response = await axios.get('http://localhost:8080/buys/bookRank')
    return response;
  }catch(e){
    console.log('도서랭킹 axios 오류',e)
  }
}
