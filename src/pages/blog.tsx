import Head from "next/head";
import React from "react";
import HomeLayout from "../components/layouts/HomeLayout";

const blog = () => {
  return (
    <>
      <Head>
        <title>Home | Fourth IT Academy</title>
      </Head>

      <HomeLayout>{/* <BlogComponent /> */}</HomeLayout>
    </>
  );
};

export default blog;
