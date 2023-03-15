import React from "react";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear()
 
  return (
    <div className="px-[16px] py-[24px] bg-white flex items-center justify-between font-nunito text-black">
      <div className="flex items-center">
        <p>Privacy Policy</p>
        <p className="ml-[20px]">Terms of Use</p>
      </div>
      <div>
        <p>© {year} Fourth IT Academy</p>
      </div>
    </div>
  );
}
