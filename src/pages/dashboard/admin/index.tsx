import type { NextPage } from "next";
import Head from "next/head";
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import HomeComponent from "../../../components/pages/dashboard/admin/home/Home";

const Admin: NextPage = () => {
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

export default Admin;
