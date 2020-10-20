import React, { useState } from 'react';
import Head from 'next/head';
export default function good() {
  const [text, setText] = useState('자바스트립트');

  setTimeout(() => {
    setText('타입스크립트!!!!!');
  }, 1000);
  return <div>{text} 적용 완료</div>;
}
