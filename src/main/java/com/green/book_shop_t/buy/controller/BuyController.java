package com.green.book_shop_t.buy.controller;

import com.green.book_shop_t.buy.dto.BuyDTO;
import com.green.book_shop_t.buy.dto.BuyDetailDTO;
import com.green.book_shop_t.buy.service.BuyService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

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
  //구매 목록 조회
  @GetMapping("/{memEmail}")
  public ResponseEntity<?> select(@PathVariable("memEmail")String memEmail){
    try {
      List<BuyDTO> list = buyService.selectBuyList(memEmail);
      return ResponseEntity.status(HttpStatus.CREATED).body(list);
    }catch (Exception e){
      log.error("목록조회오류",e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }
  @GetMapping("/admin")
  public ResponseEntity<?> sales(){
    try {
      BuyDTO list = buyService.selectSales();
      return ResponseEntity.status(HttpStatus.OK).body(list);
    }catch (Exception e){
      log.error("sales 조회오류",e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }
  @GetMapping("/adminMonth")
  public ResponseEntity<?> months(){
    try {
      BuyDTO list = buyService.monthto();
      return ResponseEntity.status(HttpStatus.OK).body(list);
    }catch (Exception e){
      log.error("sales 조회오류",e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }
  @GetMapping("/selectMost")
  public ResponseEntity<?> selectM(){
    try {
      List<BuyDetailDTO> list = buyService.selectMosts();
      return ResponseEntity.status(HttpStatus.OK).body(list);
    }catch (Exception e){
      log.error("selectMost 조회오류",e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }
  //오늘과 이 달의 주문건수 및 매출액 조회 api
  @GetMapping("/sale-info")
  public ResponseEntity<?> selectSaleInfo(){
    try {
      Map<String,Integer> saleInfoMap =  buyService.selectSaleInfo();
      return ResponseEntity.status(HttpStatus.OK).body(saleInfoMap);
    }catch (Exception e){
      log.error("주문건수/매출액 조회 api 오류",e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }
  @GetMapping("/purRank")
  public ResponseEntity<?> purchaseRanking(){
    try {
      List<Map<String,Object>> purran =  buyService.purchaseRanking();
      return ResponseEntity.status(HttpStatus.OK).body(purran);
    }catch (Exception e){
      log.error("구매랭킹 api 오류",e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }
  @GetMapping("/bookRank")
  public ResponseEntity<?> bookRank(){
    try {
      List<Map<String,Object>> bookRank =  buyService.bookRank();
      return ResponseEntity.status(HttpStatus.OK).body(bookRank);
    }catch (Exception e){
      log.error("도서랭킹 api 오류",e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }
  @GetMapping("/charts")
  public  ResponseEntity<?> selectSale10(){
    try {
      //9~0까지 데이터가 들어있는 리스트
      List<Integer> dayList = new ArrayList<>();
      for(int i = 9; i> -1 ; i--){
        dayList.add(i);
      }
      List<Map<String,Object>> charts =  buyService.selectSale10(dayList);
      return ResponseEntity.status(HttpStatus.OK).body(charts);
    }catch (Exception e){
      log.error("차트 api 오류",e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }
}