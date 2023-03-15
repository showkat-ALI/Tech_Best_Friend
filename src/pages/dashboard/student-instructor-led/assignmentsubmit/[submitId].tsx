import Head from 'next/head'
import React from 'react'
import DashboardLayout from '../../../../components/layouts/DashboardLayout'
import AssignmentSubmitted from '../../../../components/pages/dashboard/instructor/others/student/AssignmentSubmit'
import {useRouter} from "next/router";
import PrivateTemplate from "../../../../templates/PrivateTemplate";
import AccessTemplate from "../../../../templates/AccessTemplate";

const assignmentsubmit = () => {
  const router = useRouter();
  const id = router.query as any;
  
  console.log(`this is ${id}`)
  return (
    <PrivateTemplate>
      <AccessTemplate accessRole={["student"]}>
        <Head>
            assignment
        </Head>
        <DashboardLayout>
             <AssignmentSubmitted />
        </DashboardLayout>
        </AccessTemplate> 
    </PrivateTemplate>
  )
}

export default assignmentsubmit
