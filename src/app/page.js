'use client'
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
