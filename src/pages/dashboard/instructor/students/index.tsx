import type { NextPage } from "next";
import Head from "next/head";
import DashboardLayout from "../../../../components/layouts/DashboardLayout";
import StudentsComponent from "../../../../components/pages/dashboard/instructor/students/index";
import dynamic from "next/dynamic";

const students: NextPage = () => {
  return (
    <>
      <Head>
        <title>Student | Fourth IT Academy</title>
      </Head>

      <DashboardLayout>
        <div className="px-6 lg:px-8">
          <StudentsComponent />
        </div>
      </DashboardLayout>
    </>
  );
};

export default dynamic(() => Promise.resolve(students), { ssr: false });
