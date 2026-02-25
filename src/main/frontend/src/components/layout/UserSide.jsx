import React from 'react'
import styles from './ManageSide.module.css'
import { FaChartColumn, FaSquarePlus, FaCubesStacked } from 'react-icons/fa6'

const UserSide = () => {
  return (
     <div className={styles.container}>
          <div>
            <h5>상품관리</h5>
            <ul>
              <li>
                <FaChartColumn className={styles.icon}/>
                <p>장바구니</p>
              </li>
              <li>
                <FaSquarePlus className={styles.icon}/>
                <p>회원변경</p>
              </li>
              <li>
                <FaCubesStacked className={styles.icon}/>
                <p>상품재고관리</p>
              </li>
            </ul>
          </div>
        </div>
  )
}

export default UserSide