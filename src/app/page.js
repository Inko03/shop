'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Show from "./components/show";
import Menu from "./components/menu"
import { useEffect } from "react";
export default function Home() {
  return (
    <div id="main-id">
      <span id="name-brand">PUSLO</span>
        <Menu/>
        <Show/>
    </div>
  );
}
