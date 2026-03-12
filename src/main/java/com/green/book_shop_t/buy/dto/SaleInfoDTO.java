package com.green.book_shop_t.buy.dto;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class SaleInfoDTO {
  private int saleCntToday;   // 오늘의 주문 건수
  private int saleCntMonth;   // 이 달의 주문 건수
  private int saleToday;      // 오늘의 매출 금액
  private int saleMonth;      // 이 달의 매출 금액
}