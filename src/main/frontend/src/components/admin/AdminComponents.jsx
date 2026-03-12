import React, { useEffect, useState } from 'react'
import styles from './AdminComponents.module.css'
import { sales, salesMonth } from '../../api/buyApi'

const AdminComponents = () => {
  const [getSale,setgetSale] = useState([]);
  const [getMonth,setgetMonth] = useState([]);
  useEffect(() => {
    getSales();
    monthsales();
  },[])

  const getSales = async() => {
    const response = await sales();
    setgetSale(response.data);
  }

  const monthsales = async() => {
    const response = await salesMonth();
    setgetMonth(response.data);
  }

  console.log(getSale);
  console.log(getMonth);
  return (
    <div className={styles.container}>
      <h3>매출 및 주문건수</h3>
      <div>
        <div>
          <p>오늘의 주문건수</p>
          <p style={{fontSize:'30px'}}>{getSale.totalCount}</p>
        </div>
      <div>
        <p>이 달의 주문건수</p>
        <p style={{fontSize:'30px'}}>{getMonth.totalCount}</p>
      </div>
      <div>
        <p>오늘의 매출금액</p>
        <p style={{fontSize:'30px'}}>{Number(getSale.totalPrice).toLocaleString()}원</p>
      </div>
      <div>
        <p>이 달의 매출금액</p>
        <p style={{fontSize:'30px'}}>{Number(getMonth.totalPrice).toLocaleString()}원</p>
      </div>
      </div>
    </div>
    
  )
}

export default AdminComponents