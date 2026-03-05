import React, { useEffect, useState } from 'react'
import ListTable from '../../components/common/ListTable';
import { selectCart } from '../../api/cartApi';
import { selectBuyList } from '../../api/buyApi';
import styles from './BuyList.module.css'
import dayjs from 'dayjs';

const BuyList = () => {
  //조회 바이리스트 목록 저장할 변수
    const [buyList,setBuyList] =useState([]);
    //마운트 시 바이리스트 목록 조회
    useEffect(() => {
      getList();
      
    },[])
    const getList = async() => {
    const memEmail = JSON.parse(sessionStorage.getItem('loginInfo')).memEmail;  
    const response = await selectBuyList(memEmail);
    setBuyList(response.data);
    }
     console.log(buyList);
     
  
  return (
    <div className={styles.container}>
    {
      buyList.length ===0
      ?
      <p className={styles.not_buy}>구매내역이 존재하지 않습니다.</p>
      :
      buyList.map((buy,i) => {
        return(
        <div className={styles.buyInfo} key={i}>
         <div className={styles.buy_content}>
          <ListTable>
            <thead>
              <tr>
             <td>{buyList.length-i}</td>
                <td>{buy.detailList[0].bookDTO.bookTitle}
                  {
                       buy.detailList.length>1 &&
                  <span>외{buy.detailList.length-1} 개</span>
                  }
                </td>
                <td>{buy.buyPrice.toLocaleString()}원</td>
                <td>{dayjs(buy.buyDate).format('YYYY-MM-DD hh:mm')}</td>
              </tr>
            </thead>
            <tbody>
              {
                buy.detailList.map((detail,j) => {
                  return(
                    <tr key={j}>
                      <td>{buy.detailList.length-j}</td>
                      <td className={styles.flex_td}>
                        <img src={`http://localhost:8080/upload/${detail.bookDTO.bookImgList[0].uploadFileName}`}/>
                      <p>{detail.bookDTO.bookTitle}</p>
                      </td>
                      <td>
                        {detail.bookDTO.bookPrice.toLocaleString()}원
                        </td>
                      <td>
                        {detail.buyCnt}
                      </td>
                      <td>
                        {(detail.bookDTO.bookPrice*detail.buyCnt).toLocaleString()}원
                        </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </ListTable>
        </div>
      </div>)
      })
    }
      
    </div>
  )
}

export default BuyList