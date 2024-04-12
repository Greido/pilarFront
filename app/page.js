"use client";
import CustomToolbar from "@/src/components/Toolbar";
import HomeCard from "@/src/components/HomeCard";

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
    </>
  );
}
