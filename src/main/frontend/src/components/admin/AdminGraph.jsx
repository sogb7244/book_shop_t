import React, { useEffect, useState } from 'react'
import { charts } from '../../api/buyApi'
import * as Re from 'recharts'
import styles from './AdminGraph.module.css'

const AdminGraph = () => {
    const [graphData,setGraph] =useState([])
  
    useEffect(() =>{
      chartss()
    },[]) 
    
    const chartss = async() => {
      const response = await charts()
      setGraph(response.data);
    }
   
    
    console.log(graphData)
  return (
    <div className={styles.container}>
      <h3>월별 데이터 현황</h3>
      <Re.ResponsiveContainer>
        <Re.LineChart 
          data={graphData}
          responsive
          style={{ width: '450px',maxWidth: '600px' ,height: '135px'}}
          >
          <Re.CartesianGrid strokeDasharray="3 3"/>
          <Re.XAxis 
            dataKey="day"
            tick={{fill: '#774747',fontSize:'15px',fontWeight:'bold'}}
            tickMargin={10}
            interval={1}
          />
          <Re.YAxis 
            dataKey="sale"
            tickFormatter={(value) => `${value.toLocaleString()}원`}
            width={80}
            tick={{fill: '#774747',fontSize:'15px',fontWeight:'bold'}}
            tickMargin={10}
          />
          <Re.Tooltip 
            formatter={(value) => [`${value.toLocaleString()}원`,"매출액"]}
          />
          <Re.Line 
            dataKey="sale"
            type="bump"
            strokeWidth={3}
            dot={{ r: 3 }}
            stroke="#8884d8"
            />
        </Re.LineChart>
      </Re.ResponsiveContainer>
    </div>
  )
}

export default AdminGraph