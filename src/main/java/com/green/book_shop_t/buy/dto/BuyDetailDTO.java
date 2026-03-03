package com.green.book_shop_t.buy.dto;

import com.green.book_shop_t.book.dto.BookDTO;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@ToString
public class BuyDetailDTO {

  // BUY_DETAIL_NUM (PK, AUTO_INCREMENT)
  private int buyDetailNum;

  // BOOK_NUM (FK, NOT NULL) - SHOP_BOOK 테이블 참조
  private int bookNum;

  // BUY_CNT (NOT NULL)
  private int buyCnt;

  // BUY_NUM (FK, NOT NULL) - SHOP_BUY 테이블 참조
  private int buyNum;
  private BookDTO bookDTO;
}