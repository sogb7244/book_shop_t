package com.green.book_shop_t.cart.mapper;

import com.green.book_shop_t.cart.dto.CartDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CartMapper {
  //장바구니 등록 쿼리
  void insertCart(CartDTO cartDTO);
  //장바구니 목록 조회
  List<CartDTO> selectCartList(String memEmail);
  //장바구니 업데이트 쿼리
  void updateCartCnt(CartDTO cartDTO);
  //중복 체크 쿼리
  String isDuplicateBook(CartDTO cartDTO);
  void deleteCart(int cartNum);
  void updateCartCnt1(CartDTO cartDTO);
  //장바구니 선택 삭제
  void deleteCarts(List<Integer> cartNumList);
}
