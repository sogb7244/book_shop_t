import React, { useEffect, useState } from 'react'
import ListTable from '../../components/common/ListTable';
import { selectCart } from '../../api/cartApi';
import { selectBuyList } from '../../api/buyApi';

const buyList = () => {
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
    <div>
        <ListTable>
          <colgroup>
            <col/>
          </colgroup>
          <thead>
            {
              buyList.length === 0 ? <tr>구매목록이 없습니다</tr> :
              buyList.map((buys,i) => {
                return(
                  <tr>
                    <td>
                      <tr>{buys.buyNum}</tr>
                      <tr>{}</tr>
                      <table>
                        {buys.detailList.map((e, i) => {
                          return (
                            <tr>
                              <td colSpan={1}>{e.buyNum}</td>
                              <td>{e.bookDTO.bookTitle}</td>
                              <td>{e.bookDTO.bookPrice}</td>
                              <td>{e.buyCnt}</td>
                              <td>{e.buyCnt *e.bookDTO.bookPrice}</td>
                            </tr>
                          )
                        })}
                      </table>
                    </td>
                  </tr>
                )
              })
            }
          </thead>
          <tbody>
            {
              buyList.map((buys,i) => {
                return(
                  <tr>
                    
                  </tr>
                )
              })
            }
          </tbody>
        </ListTable>
    </div>
  )
}

export default buyList