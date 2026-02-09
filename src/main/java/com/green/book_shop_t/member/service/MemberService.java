package com.green.book_shop_t.member.service;

import com.green.book_shop_t.member.dto.MemberDTO;
import com.green.book_shop_t.member.mapper.MemberMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberService {
  private final MemberMapper memberMapper;

//  @Autowired  생략가능 @RequiredArgsConstructor쓰면
//  public  MemberService(MemberMapper memberMapper) {
//    this.memberMapper = memberMapper;
//  }
  public void memCreate(MemberDTO memberDTO){
     memberMapper.join(memberDTO);
  }
}
