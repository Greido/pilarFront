import React from "react";
import Home from "../ui/home.jsx";
function page() {
  const data = "Hola mundo";

  return (
    <div>
      <Home data={data} />
    </div>
  );
}

export default page;
