import React, { useEffect, useState } from 'react'
import { rank } from '../../api/buyApi'
import styles from './AdminRanking.module.css'

const AdminRanking = () => {
  const [rankss,setRanks] = useState([]);

  useEffect(() => {
    ranks()
  },[])

  const ranks = async() => {
    const response = await rank();
    setRanks(response.data);
  }

  console.log(rankss);
  return (
    <div className={styles.container}>
      <h3>도서 구매 순위</h3>
      <table className={styles.tables}>
        <thead>
        <tr className={styles.tr_module}>
          <td>순위</td>
          <td>이메일</td>
          <td>구매건수</td>
          <td>구매금액</td>
        </tr>
        </thead>
        <tbody>
      {
        rankss.map((e,i)=>{
          return(
              <tr 
                key={i}
                className={styles.tr_value}>
                <td>{e.RANK}</td>
                <td>{e.MEM_EMAIL}</td>
                <td>{e.CNTBUYNUM}</td>
                <td>{e.TOTALS}</td>
              </tr>
          )
        })
      }
        </tbody>
      </table>
    </div>
  )
}

export default AdminRanking