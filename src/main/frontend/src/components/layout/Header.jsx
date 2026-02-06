import React from 'react'
import styles from './Header.module.css'
//일반 사용자가 보는 페이지의 헤더 영역

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top_menu}>
        <ul>
          <li>login</li>
          <li>join</li>
        </ul>
      </div>
      <div className={styles.banner_Div}>
        <img 
          className={styles.banner_img}
          src="/book_banner.PNG" 
          />
          <h3 className={styles.banner_title}>Book Shop</h3>
      </div>
      <div>
        일반 사용자가 보는 메뉴
      </div>
    </div>
  )
}

export default Header