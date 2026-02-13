package com.green.book_shop_t.member.controller;

import com.green.book_shop_t.member.dto.MemberDTO;
import com.green.book_shop_t.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/members")
@RequiredArgsConstructor
public class MemberController {
  private final MemberService memberService;

  //회원가입 api
  //(POST) localhost:8080/members
  @PostMapping("")
  public ResponseEntity<?> creteMem(@RequestBody MemberDTO memberDTO){
    try {
      memberService.memCreate(memberDTO);
      return ResponseEntity.status(HttpStatus.CREATED).build();
    }catch(Exception e){
      log.error("회원가입 작업 중 에러 발생",e); //e 오류에 대한 모든 정보
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }
  //사용 가능한 이메일인지 체크하는 api(사용가능하면 return true)
  //(GET) localhost:8080/members/checkId/abc
  @GetMapping("/checkId/{memEmail}")
  public ResponseEntity<?> checkId(@PathVariable("memEmail")String memEmail){
    try{
      boolean result = memberService.isUsableEmail(memEmail);
      return ResponseEntity.status(HttpStatus.OK).body(result);
    } catch (Exception e){
      log.error("이메일 중복 조회중 에러 발생",e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }
  // 로그인 API
  //(GET) localhost:8080/members/login
  @GetMapping("/login")
  public  ResponseEntity<?> checkLogin(MemberDTO memberDTO){
    try {
      //넘어오는 데이터의 이름과 일치하는 변수를 가진 DTO 객체로 데이터를 받는다
      //일치하면 그냥 DTO쓰면됨
      MemberDTO canLogin = memberService.isLogin(memberDTO);
      System.out.println(canLogin);
      return ResponseEntity.status(HttpStatus.OK).body(canLogin);
    }catch (Exception e){
      log.error("로그인 오류",e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

}
