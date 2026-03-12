import React from 'react'
import AdminComponents from '../../components/admin/AdminComponents'
import AdminRanking from '../../components/admin/AdminRanking'
import AdminBookRank from '../../components/admin/AdminBookRank'
import styles from './DashBoard.module.css'
import AdminGraph from '../../components/admin/AdminGraph'


const DashBoard = () => {
//   const getAllData = async() => {
//     //한번에 다수의 api 조회
//     const [response1,response2] =
//     await Promise.all([
//       aa(),
//       bb() 
//     ]);
//     //조회한 데이터 변수에 저장
//     setDataStartEndIndexes(response1);
//     setActiveClickItemIndexw(response2);
//   }
  return (

    
    <div className={styles.container}>
      <AdminComponents/>
      <AdminGraph/>
      <AdminRanking/>
      <AdminBookRank/>
    </div>
  )
}

export default DashBoard