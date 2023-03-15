import Head from "next/head";
import React from "react";
import DashboardLayout from "../../../../components/layouts/DashboardLayout";
import Grade from "../../../../components/pages/dashboard/instructor/others/student/Grade";

const grade = () => {
  return (
    <div>
      <Head>
        <title>Student Grade</title>
      </Head>
      <DashboardLayout>
        <Grade />
      </DashboardLayout>
    </div>
  );
};

export default grade;
