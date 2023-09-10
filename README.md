# node.js 게시판
> node.js express 라이브러리를 활용한 CRUD 기능을 구현한 게시판입니다.

## 목차

- [들어가며](#들어가며)

  - [프로젝트 소개](#1-프로젝트-소개)
  
  - [프로젝트 기능](#2-프로젝트-기능)
  
  - [사용기술](#3-사용기술)
    
  - [실행화면](#4-실행화면)
  
- [구조 및 설계](#구조-및-설계)

  - [프로젝트 구조](#1-프로젝트-구조)

  - [DB 설계](#2-db-설계)
  
- [추후 업데이트](#추후-업데이트)


## 들어가며
### 1. 프로젝트 소개

이 프로젝트는 node.js의 express 라이브러리를 사용해서 CRUD 게시판을 구현한 프로젝트로

자유도가 높은 express에서 Spring의 MVC 패턴을 직접 만들어서 구현해보았습니다.

### 2. 프로젝트 기능

프로젝트의 기능은 다음과 같습니다.

- 게시판

  - 게시글 작성 및 사진첨부

  - 게시글 삭제 및 삭제 시 비밀번호 입력 필수

  - 게시글에 대한 좋아요 기능
 
  - 게시글 세부페이지에서 좋아요수, 댓글수, 조회수 보여주기
 
  - 제목 검색을 통한 게시글 조회

- 댓글

  - 댓글 작성 및 삭제
 
  - 댓글 삭제 시 비밀번호 입력 필수
 
- 페이징 처리
 
  - 게시글 조회 시 페이징 처리 후 게시글 보여주기

- 유효성 검증

  - 게시글 작성 시 필수값 (작성자, 비밀번호, 제목, 내용) 작성 여부 확인
 
  - 댓글 작성 시 필수값 (작성자, 비밀번호, 내용) 작성 여부 확인

### 3. 사용기술

- 프론트엔드
 
  - HTML
  
  - Handlebars
  
  - Javascript
  
  - Tailwind CSS
  
- 백엔드

  - 프레임워크 및 라이브러리
  
    - Javascript
    
    - Express
    
    - Express-handlebars
    
  - 데이터베이스
  
    - MySQL
  
    
### 4. 실행화면 <br/><br/><br/><br/>


## 구조 및 설계

### 1. 프로젝트 구조

### 2. DB 설계 <br/><br/><br/><br/>


## 추후 업데이트

### 1. 페이징 처리

### 2. 검색 조회에 대한 라우팅 및 뷰 하나 더 만들기

### 3. 게시글 및 댓글 삭제 기능 

### 4. 유효성 검증

### 5. 사진 첨부 기능

