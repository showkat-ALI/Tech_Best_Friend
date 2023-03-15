import React from "react";
import BottomRegisForm from "./BottomRegisForm";
import DateTimeSection from "./DateTimeSection";
import MiddlePartRegistration from "./MiddlePartRegistration";
import TopPartRegistration from "./TopPartRegistration";

const Registration = () => {
  return (
    <>
      <TopPartRegistration />
      <DateTimeSection />
      <MiddlePartRegistration />
      <BottomRegisForm />
    </>
  );
};

export default Registration;
