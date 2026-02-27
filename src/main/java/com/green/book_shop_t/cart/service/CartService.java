package com.green.book_shop_t.cart.service;

import com.green.book_shop_t.cart.dto.CartDTO;
import com.green.book_shop_t.cart.mapper.CartMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CartService {
  private final CartMapper cartMapper;


  //장바구니 등록 기능
  public void insertCart(CartDTO cartDTO) {
    String memEmail = cartMapper.isDuplicateBook(cartDTO);
    if (memEmail != null){
      cartMapper.updateCartCnt(cartDTO);
    }
    else {
      cartMapper.insertCart(cartDTO);
    }
  }
  //장바구니 목록 조회 기능
  public List<CartDTO> selectCartList(String memEmail){
    return cartMapper.selectCartList(memEmail);
  }
  //장바구니 삭제 기능
  public void deleteCart(int cartNum){
    cartMapper.deleteCart(cartNum);
  }
  //장바구니 수량 변경 기능
  public void updateCartCnt1(CartDTO cartDTO) {
    cartMapper.updateCartCnt1(cartDTO);
  }


}










