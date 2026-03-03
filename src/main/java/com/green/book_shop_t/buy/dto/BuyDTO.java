package com.green.book_shop_t.buy.dto;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@ToString
public class BuyDTO {
  private int buyNum;          // BUY_NUM (PK, AUTO_INCREMENT)
  private int buyPrice;        // BUY_PRICE (NOT NULL)
  private String memEmail;     // MEM_EMAIL (FK, NOT NULL)
  private LocalDateTime buyDate; // BUY_DATE (DEFAULT SYSDATE())
  private List<BuyDetailDTO> detailList;
}