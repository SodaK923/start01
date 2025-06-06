// Bookdata.ts
// Book 인터페이스 정의-> 이런 구조를 가진 객체가 Book이란 뜻
export interface Book {
    id: number;
    title: string;
    content: string;
    price: number;
    author: string;
    star: string;
  }

// bookdata: Book 객체들의 배열-> 책 3권의 정보가 담겨있는 초기 데이터
const bookdata: Book[] = [
  {
    id: 4,
    title: '모던 자바스크립트&Nodejs',
    content: '초보자를 위한 백엔드 입문서입니다.',     price: 34000,
    author: '이창현',
    star: '⭐⭐⭐⭐⭐'
  },
  {
    id: 5,
    title: '내 생애 첫 번째 코딩 앱인벤터',
    content: '코딩을 처음 시작하는 초보자를 위한 과정입니다.',     price: 22000,
    author: '이창현',
    star: '⭐⭐⭐⭐⭐'
  },
  {
    id: 6,
    title: 'C# 프로그래밍의 정석',
    content: '닷넷을 시작하는 초보자를 위한 책입니다.',     price: 26000,
    author: '이창현',     
    star: '⭐⭐⭐⭐⭐'   },
];
export default bookdata;