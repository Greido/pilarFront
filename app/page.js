"use client";

import Page from "./landing/page";
import './global.css'
export default function Pages() {
  return (
    <>
      <style jsx global>{`
        body {
          overflow-x: hidden;
        }
      `}</style>
     
      <Page />
    </>
  );
}
