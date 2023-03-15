import Head from 'next/head'
import React from 'react'
import DashboardLayout from '../../../../components/layouts/DashboardLayout'
import MyCourses from '../../../../components/pages/dashboard/stundent-self/my-courses/Student'
import dynamic from "next/dynamic";
import PrivateTemplate from "../../../../templates/PrivateTemplate";
import AccessTemplate from "../../../../templates/AccessTemplate";

const student = () => {
  return (
    <PrivateTemplate>
     <AccessTemplate accessRole={["student"]}>
        <Head>
            <title>Instructor|| student</title>
        </Head>
        <DashboardLayout>
            <MyCourses />
        </DashboardLayout>
      </AccessTemplate> 
    </PrivateTemplate>
  )
}

export default dynamic(() => Promise.resolve(student), { ssr: false });