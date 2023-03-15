import React from "react";
import Main from "../../../components/pages/dashboard/admin/users/Main";
import Head from "next/head";
import DashboardLayout from "../../../../src/components/layouts/DashboardLayout";
export default function courseAnalytics() {
  return (
    <>
      {/* <PrivateTemplate> */}
      {/* <AccessTemplate accessRole={["admin", "instructor"]}> */}
      <Head>
        <title>courses-analytics | Fourth IT Academy</title>
      </Head>
      <DashboardLayout>
        <Main />
      </DashboardLayout>
      {/* </AccessTemplate> */}
      {/* </PrivateTemplate> */}
    </>
  );
}
