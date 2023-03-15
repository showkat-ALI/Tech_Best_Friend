import React from 'react'

//componentff
import Assignment from '../../../../components/pages/dashboard/instructor/Assignment/Assignment';
import DashboardLayout from '../../../../components/layouts/DashboardLayout';

const index = () => {
  return (
    <>
      <DashboardLayout>
          <Assignment/>
      </DashboardLayout>
    </>
  )
}

export default index