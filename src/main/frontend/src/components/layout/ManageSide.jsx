import React from 'react'
import styles from './Manageside.module.css'
import { IoAdd, IoBagHandleSharp,IoTicket,IoIdCardOutline} from "react-icons/io5";

const ManageSide = () => {
  return (
    <div className={styles.container}>
      <div className={styles.itemCare}>
        <h3>상품관리 <span><IoTicket /></span></h3>
        <div>카테고리관리</div>
        <div>상품등록</div>
        <div>상품재고관리</div>
        <div>상품정보수정</div>
      </div>
      <div className={styles.purchaseCare}>
        <h3>구매관리<span><IoBagHandleSharp /></span>  </h3>
        <div>구매내역조회</div>
        <div>월별매출관리</div>
        <div>주간매출관리</div>
      </div>
      <div className={styles.memCare}>
        <h3>회원관리 <span><IoIdCardOutline /></span></h3>
        <div>회원정보조회</div>
        <div>회원상태변경</div>
      </div>
    </div>
  )
}

export default ManageSide