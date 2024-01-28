'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Show from "./components/show";
import Menu from "./components/menu"
import { useEffect } from "react";
export default function Home() {
  const cursor=(e)=>{
    const x = document.querySelector('#cursor')
    x.style.left=`${e.clientX}px`
    x.style.top=`${e.clientY}px`
  }
  return (
    <div id="main-id" onMouseMove={(e)=>cursor(e)}>
      <span id="name-brand">PUSLO</span>
      <div id="cursor"><div id="cool"></div></div>
    <Menu/>
    <Show/>
    </div>
  );
}
