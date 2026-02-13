import { Route, Routes } from 'react-router-dom'
import BasicLayout from './components/layout/BasicLayout'
import ManagerLayout from './components/layout/ManagerLayout.jsx'
import Join from './pages/member/Join.jsx'
import './reset.css'
import BookList from './pages/book/BookList.jsx'
import Login from './pages/member/Login.jsx'
import BookForm from './pages/book/BookForm.jsx'
import WebStorage from './study/WebStorage.jsx'
import { useState } from 'react'
import BookDetail from './pages/book/BookDetail.jsx'

function App() {
      //로그인 정보를 저장하는 state변수
      const [loginInfo ,setloginInfo] = useState({});
  return (
   <>
    <Routes>

      {/* Route를 아래와 같이 중복으로 사용하면 두 컴포넌트를 함께 띄울 수 있음 */}
      {/* 이때 컴포넌트에 접근하는 url은 바깥 Route와 안쪽 Route의 path로 나열로 지정 */}
      {/* 단, 안쪽 Route의 path속성값은 '/'를 붙이지 않는다 */}
      {/* 바깥 컴포넌트에 <Outlet/> 컴포넌트를 사용하여 함께 열리는 컴포넌트의 위치를 지정한다 */}

      {/* 일반회원이 접근하는 페이지들 */}
      <Route path='/' element={<BasicLayout setloginInfo={setloginInfo}/>}>
        {/* 웹스토리지 학습용 컴포넌트 */}
        <Route path='storage' element={<WebStorage/>}/>
        {/* 도서 목록 페이지, URL : localhost:5173 */}
        <Route path='' element={<BookList/>}/>
        {/* 회원가입페이지, URL : localhost:5173/join */}
        <Route path='join' element={<Join/>}/>
        {/* 로그인 페이지 URL : localhost:5173/login */}
        <Route path='login' element={<Login setloginInfo={setloginInfo}/>} />
        <Route path='BookList' element={<BookForm/>}/>
        <Route path='detail' element={<BookDetail />}/>
      </Route>

      {/* 매니저 권한의 회원이 접근하는 페이지들 */}
      <Route path='/manage' element={<ManagerLayout setloginInfo={setloginInfo}/>}>
      {/* 상품 등록 페이지, URL : localhost:5173/manage/book-form */}
        <Route path='book-form' element={<BookForm />}/>
      </Route>
    </Routes>
   </>
  )
}

export default App
