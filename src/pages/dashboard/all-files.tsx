import type { NextPage } from "next";
import Head from "next/head";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import StudentsComponent from "../../components/pages/dashboard/admin/students/Students";
import AllFiles from "../../components/pages/dashboard/instructor/files/File1";
import AccessTemplate from "../../templates/AccessTemplate";
import PrivateTemplate from "../../templates/PrivateTemplate";

const Students: NextPage = () => {
  return (
    <PrivateTemplate>
      <AccessTemplate accessRole={["student", "instructor"]}>
        <Head>
          <title>Students | Fourth IT Academy</title>
        </Head>

        <DashboardLayout>
          <AllFiles />
        </DashboardLayout>
      </AccessTemplate>
    </PrivateTemplate>
  );
};

export default Students;
