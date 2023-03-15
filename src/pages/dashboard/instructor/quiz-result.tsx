import React from "react";
import Head from "next/head";
import PrivateTemplate from "../../../templates/PrivateTemplate";
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import QuizResult from "../../../components/pages/dashboard/instructor/quiz-result/index";

export default function overview() {
  return (
    <>
      <Head>
        <title>Instructor | Fourth IT Academy</title>
      </Head>
      <DashboardLayout>
        <QuizResult />
      </DashboardLayout>
    </>
  );
}
