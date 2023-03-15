import Head from "next/head";
import React from "react";
import HomeLayout from "../components/layouts/HomeLayout";
import Testimonials from "../components/pages/testimonials/Testimonials";

const testimonials = () => {
  return (
    <>
      <Head>
        <title>Testimonials | Fourth IT Academy</title>
      </Head>

      <HomeLayout>
        <Testimonials></Testimonials>
      </HomeLayout>
    </>
  );
};

export default testimonials;
