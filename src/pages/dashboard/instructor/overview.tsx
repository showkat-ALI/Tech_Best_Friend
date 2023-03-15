import React from "react";
import Head from "next/head";
import PrivateTemplate from "../../../templates/PrivateTemplate";
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import InstructorOverview from "../../../components/pages/dashboard/instructor/overview-instructor";

export default function overview() {
  return (
    <>
      <Head>
        <title>Instructor | Fourth IT Academy</title>
      </Head>
      <DashboardLayout>
        <InstructorOverview />
      </DashboardLayout>
    </>
  );
}
