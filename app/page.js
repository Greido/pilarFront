"use client";
import CustomToolbar from "@/src/components/Toolbar";
import HomeCard from "@/src/components/HomeCard";
import Carrousel from "@/src/components/Carrousel";

export default function Page() {
  return (
    <>
      <style jsx global>{`
        body {
          overflow-x: hidden;
        }
      `}</style>
      <CustomToolbar />
      <HomeCard />
      <Carrousel />
    </>
  );
}
