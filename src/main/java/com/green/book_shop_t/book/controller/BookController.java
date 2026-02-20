package com.green.book_shop_t.book.controller;

import com.green.book_shop_t.book.dto.BookDTO;
import com.green.book_shop_t.book.dto.BookImgDTO;
import com.green.book_shop_t.book.service.BookImgService;
import com.green.book_shop_t.book.service.BookService;
import com.green.book_shop_t.util.UploadUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/books")
@Slf4j
@RequiredArgsConstructor //final 의존성주입
public class BookController {
  private final BookService bookService;
  private final UploadUtil uploadUtil;
  private final BookImgService bookImgService;


  //도서등록 api
  //파일이 포함된 데이터를 react에서 FormData 객체에 담겨 전송됨. 이때, 데이터를 전달받는 문법도 달라짐.
  //BookDTO 매개변수 : FormData로 전달되는 데이터중 key값이 BookDTO와 동일한 데이터를 전달받는 매개변수
  //전송된 파일 데이터를 전달받을 때는 MultipartFile 자료형으로 전달받음.
  // ex) @RequestParam("전송되는 파일의 key값")MultipartFile 데이터를 전달받을 변수명
  @PostMapping
  public ResponseEntity<?> bookReg(BookDTO bookDTO
                   , @RequestParam("mainImg")MultipartFile mainImgFile
                   , @RequestParam("subImgs")MultipartFile[] subImgs){
    try {
      /*----------------대표 파일 첨부 기능 시작----------------*/
      //리턴으로 원본파일명, 첨부파일명,isMain 'Y'을 BookImgDTO 자료형으로 리턴해줌
      BookImgDTO dto = uploadUtil.fileUpload(mainImgFile);

      /*----------------상세 파일들 첨부 기능 시작------------------*/
      //리턴으로 원본파일명, 첨부파일명,isMain 'N'을 List<BookImgDTO> 자료형으로 리턴해줌
      List<BookImgDTO> imgList = uploadUtil.multipleFileUpload(subImgs);

      //쿼리 실행 시 빈값을 채울 모든 데이터를 통합
      imgList.add(dto);

      //다음에 insert할 bookNum 데이터를 조회
      int nextBookNum = bookService.getNextBookNum();

      //조회한 nextBookNum을 bookDTO에 저장
      bookDTO.setBookNum(nextBookNum);

      //imgList안의 모든 BookImgDTO 객체에도 도서번호를 저장
      for(BookImgDTO e : imgList){
        e.setBookNum(nextBookNum);
      }

      //  '\' 사용하면 다음에 오는 것은 문자취급함.

       //SHOP_BOOK, BOOK_IMG 테이블에 데이터insert
       bookService.bookReg(bookDTO, imgList);

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
