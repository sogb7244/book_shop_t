package com.green.book_shop_t.book.service;

import com.green.book_shop_t.book.dto.BookDTO;
import com.green.book_shop_t.book.mapper.BookMapper;
import com.green.book_shop_t.member.dto.MemberDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BookService {
  private final BookMapper bookMapper;
  //도서 등록 메서드
  public void bookReg(BookDTO bookDTO){
    bookMapper.bookReg(bookDTO);
  }
}
