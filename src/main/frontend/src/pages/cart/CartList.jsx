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
  //체크한 체크박스의 value를 저자할 state 변수
  //해당 변수에넌 cartNum이 저장됨
  const [cartNumList,setCartNumList] = useState([]);
  //제목줄의 체크박스 체크여부를 저장할 state 변수
  const [isChecked, setIsChecked] = useState(true);
  //마운트되면 장바구니 목록을 조회
  const [cartCnt, setCartCnt] = useState([]); 
  useEffect(() =>{
    getList();
    setCartCnt();
    console.log(cartCnt);
  },[cartCnt])
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
//조회한 cartNum 데이터들을 cartNumList 변수에 저장
const cartNumArr = [];
for(const e of response.data){
  cartNumArr.push(e.cartNum);
   }
  setCartNumList(cartNumArr);
}
console.log(cartNumList);
//삭제 버튼 클릭 시 실행 함수
const deletec = async(cartNum) => {
if(confirm('정말 삭제할까요?')){
  const response = await deleteCart(cartNum);
  alert('삭제했습니다.');
  getList();
  }
}
// const total = () => {
//   let total = 0; 
//   for (let i = 0; i < cartList.length; i++) {
//      total += cartList[i].cartCnt *cartList[i].bookDTO.bookPrice;
//   }
//   return total; 
// }
  //체크박스 컨트롤 함수
  const handleCartNumList = (e) => {
        //체크 했을 때
      if(e.target.checked){
          setCartNumList([...cartNumList,Number(e.target.value)]);

        }
        //체크해제 됐을 때
        else{
          //input태그에 입력되는건 문자열 -> Number로 씌워줌
          setCartNumList(cartNumList.filter(each => each !== Number(e. target.value)));
        }
  }
  //장바구니 각자 수량 컨트롤 함수
  const handleCntList = (e) => {
    setCartCnt(cartList.map((each) => 
      each.cartNum === cartNumList.filter(each => each) ? {[e.target.name] : e.target.value} : cartList.filter(cartCnt)
    ));
  }
  //cartNumList state변수가 변경되면 실행할 useEffect
  //체크박스가 변경되면 총 가격을 변경
  useEffect(() => { 
        //총 가격 계산
          let sum = 0;
        for(const e of cartList){
          if(cartNumList.includes(e.cartNum)){
          
            sum = sum + e.cartCnt * e.bookDTO.bookPrice;
          }
        }
         setTotalPrice(sum);

  }, [cartNumList]);

  console.log('cartNumList',cartNumList);
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
                  checked={isChecked}
                  onChange={(e) => {
                    //제목줄의 상태 변경
                    setIsChecked(e.target.checked);
                    //체크여부에 따라 내용줄의 checkbox 체크여부도 변경
                    if(e.target.checked){
                      setCartNumList(cartList.map(each => {
                        return each.cartNum;
                      }))
                    }
                    else{
                      setCartNumList([]);
                    }
                  }}
                   />
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
                        checked={cartNumList.includes(cart.cartNum)}
                        value={cart.cartNum}
                        onChange={e => handleCartNumList(e)
                          
                        }
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
                        value={cart.cartCnt}
                        name='cartCnt'
                        onChange={e => {
                          handleCntList(e);
                        }}
                      />
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
        총가격 : {totalPrice.toLocaleString()}원
      </div>
      <div></div>
    </div>
  )
}

export default CartList