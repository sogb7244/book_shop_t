import React from 'react'
import Button from '../../components/common/Button'

const BookDetail = () => {
  return (
    <div>
      <div>
        <div></div>
        <div>
          <p>제목</p>
          <p>저자 :</p>
          <p>가격</p>
          <p>수량</p>
          <p>총 구매 가격</p>
          <div>
            <Button/>
            <Button/>
          </div>
        </div>
      </div>
      <div>intro</div>
      <div>imgDetail</div>
    </div>
  )
}

export default BookDetail