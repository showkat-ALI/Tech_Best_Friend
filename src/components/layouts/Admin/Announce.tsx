import React from "react";
import styles from "../../../styles/GeneralStyles.module.css";
import Mike from "../../../Icon/Mike";
export default function Announce() {
  return (
    <div className={`${styles.dashboardTopBg} w-full h-32 font-nunito`}>
      <div className="container flex justify-between px-10 py-5">
        <div>
          <h1 className="text-4xl font-extrabold text-white">Welcome!</h1>
          <p className="text-white text-sm">
              The Fourth IT Academy Courses Dashboard has everything you need to succeed
          </p>
        </div>
        <div>
          <button className="p-4 flex justify-between items-center text-white bg-blue-700">
            <h1>Announcements</h1>
            <div>
              <Mike />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
