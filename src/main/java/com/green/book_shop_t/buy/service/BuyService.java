package com.green.book_shop_t.buy.service;

import com.green.book_shop_t.buy.dto.BuyDTO;
import com.green.book_shop_t.buy.dto.BuyDetailDTO;
import com.green.book_shop_t.buy.mapper.BuyMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class BuyService {
  private final BuyMapper buyMapper;

  //트랜잭션
  //구매 정보 등록
  @Transactional(rollbackFor = Exception.class)
  //
  public void insertBuy(BuyDTO buyDTO){
    //SHOP_BUY INSERT
    buyMapper.insertBuy(buyDTO);
    //BUY_DETAIL INSERT
    buyMapper.insertBuyDetail(buyDTO);
  }
  //구매 목록 조회
  public List<BuyDTO> selectBuyList(String memEmail){
   return buyMapper.selectBuyList(memEmail);
  }
  //<!--오늘과 이 달의 주문건수 및 매출액 조회-->
  public BuyDTO selectSales(){
    return buyMapper.selectsales();
  }
  public BuyDTO monthto(){
    return buyMapper.monthtotal();
  }

  public List<BuyDetailDTO> selectMosts(){
    return buyMapper.selectMost();
  }
  //오늘과 이달의 주문건수
  public Map<String,Integer> selectSaleInfo(){
    return buyMapper.selectSaleInfo();
  }
  //구매랭킹
  public List<Map<String,Object>> purchaseRanking(){
    return buyMapper.purchaseRanking();
  }
  //도서랭킹
  public List<Map<String,Object>> bookRank(){
    return buyMapper.bookRanking();
  }
  //차트
  public List<Map<String,Object>> selectSale10(List<Integer> dayList){
    return buyMapper.selectSale10(dayList);
  }
}
