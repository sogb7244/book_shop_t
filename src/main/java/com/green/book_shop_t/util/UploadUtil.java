package com.green.book_shop_t.util;

import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

//파일업로드 관련 메서드를 정의
@Component // 객체생성
public class UploadUtil {

  //application.properties 파일의 file.upload.dir로 선언한 데이터를 주입
  @Value("${file.upload.dir}") // framework o
  private String uploadPath;

  //단일 파일 업로드 기능
  public  void fileUpload(MultipartFile mainImgFile){
    //선택을 했을 때만 업로드 로직 시작
    if(mainImgFile != null){
      //화면에서 선택한 원본 파일명
      String originFileName = mainImgFile.getOriginalFilename();

      //첨부할 파일명 생성(첨부파일명 중복 방지를 위해)
      String uuid = UUID.randomUUID().toString(); //랜덤한 글자 만들어줌.

      //원본파일의 확장자 추출
      //String email = "ebcd@naver.com";
      //email.indexOf("@"); -> 4
      //email.lastIndexOf("@"); -> 매개변수에 입력한 문자열이 여러개일 경우 마지막으로 위치하는 위치

      //String fileName = "abcd.jpg"
      //String result = fileName.substring(fileName.lastIndexOf("."));
      String extension = originFileName.substring(originFileName.lastIndexOf("."));

      //첨부할 파일명
      String uploadFileName = uuid + extension; // awdw-awdawd-wdfgf.jpg
      //업로드
      //파일 생성 코드
      //D:/01-STUDY/dev/upload/abc.jpg
      File file = new File(uploadPath + uploadFileName); //java.io패키지

      //위 코드에서 만들어진 file에 첨부할 이미지 파일을 덮어 씌운다.
      try {
        mainImgFile.transferTo(file);
      } catch (IOException e) {
        throw new RuntimeException(e);
      }
    }
  }
  //다중 파일 업로드 기능
  public  void multipleFileUpload(MultipartFile[] subImgs){
    //매개변수로 들어온 첨부파일 수만큼 반복
    for(MultipartFile subImg : subImgs){
      fileUpload(subImg);
    }
  }
}
