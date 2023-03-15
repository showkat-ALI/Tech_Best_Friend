import type { NextPage } from "next";
import Head from "next/head";
import HomeComponent from "../../components/pages/dashboard/admin/home/Home";
import DashboardLayout from "../../components/layouts/DashboardLayout";

const DashboardPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Fourth IT Academy</title>
      </Head>

      <DashboardLayout>
        <HomeComponent />
      </DashboardLayout>
    </>
  );
};

export default DashboardPage;
