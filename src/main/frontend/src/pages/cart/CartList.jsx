import React, { useEffect, useState } from 'react'
import Header from "../../components/layout/Header";
import styles from './CartList.module.css'
import { deleteCart, selectCart } from '../../api/cartApi';
import ListTable from '../../components/common/ListTable';
import Button from '../../components/common/Button'
import dayjs from 'dayjs';
import Input from '../../components/common/Input'
import axios from 'axios';

const CartList = () => {

  //조회한 장바구니 목록을 저장할 변수
  const [cartList,setCartList] = useState([]);
  //마운트되면 장바구니 목록을 조회
  useEffect(() =>{
    getList();
   
  },[])
  //총 구매 가격 변수
const [totalPrice, setTotalPrice] = useState(0);
  //장바구니 목록 다시 조회
const getList = async() => {
  //로그인한 회원의 아이디
 const memEmail = JSON.parse(sessionStorage.getItem('loginInfo')).memEmail;
  
const response = await selectCart(memEmail);
console.log(response.data);
setCartList(response.data);
//총 구매가격 세팅
let sum = 0;
for(const e of response.data){
  sum = sum + e.cartCnt * e.bookDTO.bookPrice;
}
setTotalPrice(sum);
}

//삭제 버튼 클릭 시 실행 함수
const deletec = async(cartNum) => {
if(confirm('정말 삭제할까요?')){
  const response = await deleteCart(cartNum);
  alert('삭제했습니다.');
  getList();
  }
}



const total = () => {
  let total = 0; 
  for (let i = 0; i < cartList.length; i++) {
     total += cartList[i].cartCnt *cartList[i].bookDTO.bookPrice;
  }
  return total; 
}

  return (
    <div className={styles.container}>
      <div>
        <ListTable>
          <colgroup>
          <col width='3%'/>
          <col width='3%'/>
          <col width='*'/>
          <col width='10%'/>
          <col width='10%'/>
          <col width='10%'/>
          <col width='15%'/>
          <col width='10%'/>
          </colgroup>
          <thead>
            <tr>
              <td>No</td>
              <td>
                <input 
                  type="checkbox"
                  checked={true} />
              </td>
              <td>도서정보</td>
              <td>가격</td>
              <td>수량</td>
              <td>구매가격</td>
              <td>추가일자</td>
              <td>삭 제</td>
            </tr>
          </thead>
          <tbody>
            {
              cartList.length === 0
              ?
              <tr>
                <td colSpan={8}>장바구니에서 등록된 도서가 없습니다.</td>
              </tr>
              :
              cartList.map((cart,i) => {
                return(
                  <tr key={i}>
                    <td>{cartList.length - i}</td>
                    <td>
                      <input 
                      type="checkbox"
                      checked={true}
                      />
                    </td>
                    <td>
                      <div className={styles.flex_div}>
                        <img
                       style={{width:'60px'}} 
                       src={`http://localhost:8080/upload/${cart.bookDTO.bookImgList[0].uploadFileName}`}/>
                      <p>{cart.bookDTO.bookTitle}</p>
                      </div>
                    </td>
                    <td>{cart.bookDTO.bookPrice.toLocaleString()}원</td>
                    <td className={styles.cnt_td}>
                      <Input
                        value={cart.cartCnt}/>
                    </td>
                    <td>{(cart.cartCnt * cart.bookDTO.bookPrice).toLocaleString()}원</td>
                    <td>{dayjs(cart.cartDate).format('YYYY-MM-DD HH:mm')}</td>
                    <td><Button
                          title='삭제'
                          variant='green'
                          onClick={
                            (e) => {
                              deletec(cart.cartNum);
                              console.log(cart.cartNum);
                            }
                          }
                          />
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </ListTable>
      </div>


      <div
        className={styles.total}>
        총가격 : {total().toLocaleString()}원
      </div>
      <div></div>
    </div>
  )
}

export default CartList