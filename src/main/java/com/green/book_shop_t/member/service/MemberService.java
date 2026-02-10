package com.green.book_shop_t.member.service;

import com.green.book_shop_t.member.dto.MemberDTO;
import com.green.book_shop_t.member.mapper.MemberMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

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
  //사용가능 이메일 확인 가능(사용가능하면 return true)
  public boolean isUsableEmail(String memEmail){
    //이메일이 조회됐다 -> 중복 이메일이다
    //이메일이 조회x(email == null) -> 사용가능 이메일이다
    String email = memberMapper.isUsableEmail(memEmail);
    return email == null;
  }
}
