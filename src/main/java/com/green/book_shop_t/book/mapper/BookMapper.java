package com.green.book_shop_t.book.mapper;

import com.green.book_shop_t.book.dto.BookDTO;
import com.green.book_shop_t.member.dto.MemberDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BookMapper {
  //도서 등록 쿼리 실행 메서드
  void bookReg(BookDTO bookDTO);
  //도서 목록 조회 쿼리 실행 메서드
  List<BookDTO> selectBookList();
  //도서 상세 조회 쿼리 실행 메서드
  BookDTO selectDetail(BookDTO bookDTO);
}
