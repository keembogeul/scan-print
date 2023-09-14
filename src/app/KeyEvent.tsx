"use client";
import { useEffect, useRef } from "react";

export default function KeyEvent() {
  const myElementRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (myElementRef.current) {
      console.log("aa");
      myElementRef.current.focus();
    }
    const handleKeyPress = (e: KeyboardEvent) => {
      // 여기서 키 이벤트를 처리합니다.
      if (e.key === "q" || e.key === "1") {
        console.log(e.key);
        window.parent.postMessage({ receive: "washingComplete" }, "*");
      } else if (e.key === "2") {
        console.log(e.key);
        window.parent.postMessage({ receive: "reLaundry" }, "*");
      } else if (e.key === "3") {
        console.log(e.key);
        window.parent.postMessage({ receive: "repairNeeded" }, "*");
      }
    };

    // 컴포넌트가 마운트될 때 키 이벤트 리스너를 추가합니다.
    window.addEventListener("keydown", handleKeyPress);

    // 컴포넌트가 언마운트될 때 키 이벤트 리스너를 제거합니다.
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  return (
    <>
      <input ref={myElementRef} type="hidden" />
    </>
  );
}
