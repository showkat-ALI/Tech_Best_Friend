import React from "react";
import Head from "next/head";
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import File from "../../../components/pages/dashboard/instructor/files/File";


const Files = () => {
  return (
    <>
      <Head>
        <title>Instructor hello | Fourth IT Academy</title>
      </Head>
      <DashboardLayout>
         <File />
      </DashboardLayout>
    </>
  );
};

export default Files;
