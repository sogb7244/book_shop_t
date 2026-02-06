package com.green.book_shop_t.member.dto;
import lombok.*;
import java.time.LocalDateTime;

@Setter
@Getter
@ToString
//@NoArgsConstructor //매개변수가없는 생성자 만들기
//@AllArgsConstructor // 모든 매개변수를 가진 생성자
public class MemberDTO {
  private String memEmail;
  private String memPw;
  private String memName;
  private String memTel;
  private String memAddr;
  private String addrDetail;
  private String isUsing;
  private String memRole;
  private LocalDateTime joinDate;
}
