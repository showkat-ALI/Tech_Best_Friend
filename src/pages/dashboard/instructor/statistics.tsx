import React from "react";
import Head from "next/head";
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import Statistics from "../../../components/pages/dashboard/instructor/statistics/index";

export default function statistics() {
  return (
    <>
      <Head>
        <title>Instructor | Fourth IT Academy</title>
      </Head>
      <DashboardLayout>
        <Statistics />
      </DashboardLayout>
    </>
  );
}
