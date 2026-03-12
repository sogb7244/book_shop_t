import React, { useEffect, useState } from 'react'
import { bookRank } from '../../api/buyApi';
import styles from './AdminRanking.module.css'

const AdminBookRank = () => {
  const [usebookRank,setBookRank] =useState([]);
  useEffect(() => {
    bookranks();
  },[])
  const bookranks = async() => {
    const response = await bookRank();
    setBookRank(response.data)
  }
  console.log(usebookRank)
  return (
    <div className={styles.container}>
      <h3>도서 판매 순위</h3>
      <table>
        <thead>
          <tr className={styles.tr_module}>
            <td>순위</td>
            <td>책번호</td>
            <td>저자</td>
            <td>총판매수</td>
          </tr>
        </thead>
        <tbody>
         {
          usebookRank.map((e,i)=>{
            return(
              <tr 
                key={i}
                className={styles.tr_value}>
                <td>{i+1}</td>
                <td>{e.BOOK_NUM}</td>
                <td>{e.AUTHOR}</td>
                <td>{e.TOTAL_BUY_CNT}</td>
              </tr>
            )
          })
         }
        </tbody>
      </table>
    </div>
  )
}

export default AdminBookRank