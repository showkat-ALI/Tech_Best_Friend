import type { NextPage } from "next";
import Head from "next/head";
import DashboardLayout from "../../../../../components/layouts/DashboardLayout";
import AssignmentSubmission from "../../../../../components/pages/dashboard/student-instructor-led/assignment-submission/index";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import PrivateTemplate from "../../../../../templates/PrivateTemplate";
import AccessTemplate from "../../../../../templates/AccessTemplate";

const Index: NextPage = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <PrivateTemplate>
      <AccessTemplate accessRole={["student"]}>
      <Head>
        <title>Students | Fourth IT Academy</title>
      </Head>

      <DashboardLayout>
        <div>
          <AssignmentSubmission />
        </div>
      </DashboardLayout>
      </AccessTemplate> 
    </PrivateTemplate>
  );
};

export default dynamic(() => Promise.resolve(Index), { ssr: false });
