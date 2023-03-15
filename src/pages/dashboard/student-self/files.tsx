import React from "react";
import Head from "next/head";
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import AccessTemplate from "../../../templates/AccessTemplate";
import PrivateTemplate from "../../../templates/PrivateTemplate";



export default function files() {
  return (
      <PrivateTemplate>
            <AccessTemplate accessRole={['admin']}>
                   <Head>
                         <title>student-self file</title>
                   </Head>
                   <DashboardLayout>
                        <div>
                             files
                        </div>
                   </DashboardLayout>
            </AccessTemplate>
      </PrivateTemplate>
  );
}
