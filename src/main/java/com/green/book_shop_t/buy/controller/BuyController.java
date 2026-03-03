package com.green.book_shop_t.buy.controller;

import com.green.book_shop_t.buy.dto.BuyDTO;
import com.green.book_shop_t.buy.service.BuyService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/buys")
public class BuyController {
  private final BuyService buyService;

  @PostMapping
  public ResponseEntity<?> addBuy(@RequestBody BuyDTO buyDTO){
    try {
      buyService.insertBuy(buyDTO);
      return ResponseEntity.status(HttpStatus.CREATED).build();
    } catch (Exception e) {
      log.error("구매정보등록중api 오류", e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }
}