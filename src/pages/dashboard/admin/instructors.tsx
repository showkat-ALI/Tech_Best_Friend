import type { NextPage } from "next";
import Head from "next/head";
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import InstructorsComponent from "../../../components/pages/dashboard/admin/instructors/Instructors";

const Instructors: NextPage = () => {
  return (
    <>
      <Head>
        <title>Instructor | Fourth IT Academy</title>
      </Head>

      <DashboardLayout>
        <InstructorsComponent />
      </DashboardLayout>
    </>
  );
};

export default Instructors;
