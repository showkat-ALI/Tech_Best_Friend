import ServicesCards from "./servicesCards/ServicesCards";
import testimonialBG from "../../../styles/GeneralStyles.module.css";

const Services = () => {
  return (
    <>
      <div
        className={` w-full   bg-blend-darken h-[500px]   ${testimonialBG.testimonialBG}`}
      ></div>
      <div className="container mx-auto font-nunito">
        <h1 className="text-center text-4xl font-bold   my-5">
          Fourth IT Academy
        </h1>
        <p className="text-center text-xl font-bold">
          How can we make you happy?
        </p>
      </div>
      <ServicesCards />
    </>
  );
};

export default Services;
