package com.green.book_shop_t.book.controller;

import com.green.book_shop_t.book.dto.BookDTO;
import com.green.book_shop_t.book.service.BookService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/books")
@Slf4j
@RequiredArgsConstructor
public class BookController {
  private final BookService bookService;
  //도서등록 api
  @PostMapping
  public ResponseEntity<?> bookReg(@RequestBody BookDTO bookDTO){
    try {
      bookService.bookReg(bookDTO);
      return ResponseEntity.status(HttpStatus.CREATED).build();
    } catch (Exception e){
       log.error("도서등록중 오류발생",e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }
  //도서 목록 조회 api
  @GetMapping
  public ResponseEntity<?> getList(){
    try {
      List<BookDTO> result = bookService.selectList();
      return ResponseEntity.status(HttpStatus.OK).body(result);
    }catch (Exception e){
      log.error("도서목록조회 오류",e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }
  @GetMapping("/detail")
  public ResponseEntity<?> getDetail(BookDTO bookDTO){
    try {
      BookDTO result = bookService.selectDetail(bookDTO);
      return ResponseEntity.status(HttpStatus.OK).body(result);
    }catch (Exception e){
      log.error("도서상세조회 오류",e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }
}
