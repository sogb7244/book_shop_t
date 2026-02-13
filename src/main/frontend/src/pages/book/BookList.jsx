import React, { useEffect, useState } from 'react'
import Input from '../../components/common/Input'
import styles from './BookList.module.css'
import EachBook from '../../components/book/EachBook'
import { getBookList } from '../../api/bookApi'
import { useNavigate } from 'react-router-dom'


const BookList = () => {
  const nav = useNavigate();
  //조회한 도서 목록 데이터를 저장할 state 변수
  const [bookList,setBookList] = useState([]);
  //마운트 시 도서 목록 조회
  useEffect(() =>{
    getList();
  },[]);
  //상세조회한 데이터
  const [BookDetail,setBookDetail] =useState({
    bookTitle : '',
    author : '',
    bookPrice : '',
    bookStock : '',
    bookIntro : ''
  });

  //도서 목록 조회 함수
  const getList = async() => {
    const response = await getBookList(BookDetail);
    setBookList(response.data);
  }
  //도서 목록 상세 조회 함수
  const getDetail = async() => {
    const response = await getDetail();
    console.log(response.data);
    return response;
  }
  
   
  return (
    <div className={styles.container}>
      {
        bookList.map((book,i) => {
          return(
            <EachBook 
              key={i} book={book}
              onClick={e => {
                getDetail(e);
              }}/>
          )
        }
      )
      }
      
    
     
    </div>
   
  )
}

export default BookList