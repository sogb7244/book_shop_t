package com.green.book_shop_t.book_cate.controller;
import com.green.book_shop_t.book_cate.dto.CateDTO;
import com.green.book_shop_t.book_cate.service.CateService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/categories")
@Slf4j
@RequiredArgsConstructor
public class CateController {
  private final CateService cateService;

  //카테고리 목록 조회 api
  @GetMapping
  public ResponseEntity<?> getCategory(){
    try {
      List<CateDTO> result = cateService.selectCate();
      return ResponseEntity.status(HttpStatus.OK).body(result);
    }catch (Exception e){
      log.error("카테고리 조회 실패",e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }
}
