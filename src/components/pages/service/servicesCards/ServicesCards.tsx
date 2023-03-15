/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

import CardImage1 from "../../../../assets/bootCampImages/ImagesBootcamps/Bootcamp_banner.png";
import CardImage2 from "../../../../assets/bootCampImages/ImagesBootcamps/Staffing.jpg";
import CardImage3 from "../../../../assets/bootCampImages/ImagesBootcamps/Professional_Profile.jpg";
import CardImage4 from "../../../../assets/bootCampImages/ImagesBootcamps/Interview Prep.jpg";

const ServicesCards = () => {
  return (
    <div className="container mx-auto mt-16 mb-32 font-nunito">
      <div className="  lg:grid lg:grid-cols-2 lg:justify-items-center gap-5 lg:px-6">
        <div className=" max-w-lg bg-white rounded-lg shadow-md md:mx-auto sm:mx-auto xsm:mx-auto">
          <Image
            width="700"
            height="500"
            src={CardImage1}
            className="rounded-tr-xl rounded-tl-xl"
            alt=""
          />
          <div className="p-6">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              Bootcamps
            </h5>
            <p className="my-5 font-normal text-gray-700 ">
              Our curriculum is created and taught by Professionals with years
              of real-world industry experience. Our curriculum is a unique spin
              on what has been traditionally expected of a four-year degree but
              compressed into a few weeks on intensive studies. Our curriculum
              is designed to support career-oriented individuals and allows for
              students to begin working in tech positions. It is rigorous and
              requires dedication and consistency.
            </p>
            <Link href="/bootcamps">
              <button className="w-full p-2 text-white rounded-lg bg-blue-700">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full max-w-lg bg-white rounded-lg  shadow-md lg:mt-0 mt-3 md:mx-auto sm:mx-auto xsm:mx-auto">
          <Image
            width="700"
            height="500"
            src={CardImage2}
            alt=""
            className="rounded-tr-xl rounded-tl-xl"
          />

          <div className="p-6">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              Staffing
            </h5>
            <p className="h-[190px] mt-5 font-normal text-gray-700 dark:text-gray-400">
              Are you skilled in a specific field in Information Technology and
              interested in teaching and impacting lives with your professional
              experiences? Come join our team!
            </p>
            <Link href="/staff">
              <button className="w-full p-2 text-white rounded-lg bg-blue-700">
                Learn More
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full max-w-lg bg-white rounded-lg  shadow-md lg:mt-0 mt-3 md:mx-auto sm:mx-auto xsm:mx-auto">
          <Image
            width="700"
            height="500"
            src={CardImage4}
            alt=""
            className="rounded-tr-xl rounded-tl-xl"
          />

          <div className="p-6 font-nunito">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              Mentoring and coaching (interview prep)
            </h5>
            <p className="my-5 font-normal text-gray-700 dark:text-gray-400">
              If you have a passion for mentoring, are you looking for a mentor,
              are you searching for a unique career path, or want to give
              something back to the community, becoming a Mentor is the way to
              go. We have built a strong community of mentors, aspirants,
              coaches, and educator. Becoming a mentoring in our community help
              you learn, earn, network, and grow. Mentorship open new doors for
              you and help you refine what you know and provide you with new
              growth opportunities.
            </p>
            <Link href="/mentoringandcoaching">
              <button className="w-full p-2 text-white rounded-lg bg-blue-700">
                Learn More
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full max-w-lg bg-white rounded-lg  shadow-md lg:mt-0 mt-3 md:mx-auto sm:mx-auto xsm:mx-auto">
          <Image
            width="700"
            height="500"
            src={CardImage3}
            alt=""
            className="rounded-tr-xl rounded-tl-xl"
          />

          <div className="p-6">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Professional Profile Optimization
            </h5>
            <p className="h-[210px] mt-5 font-normal text-gray-700 dark:text-gray-400">
              Land your dream job by optimizing your professional Profile.
              Studies shows that you are 40 times more likely to get found and
              receive opportunities when you have a complete and optimized
              profile. Learn how levaraging keywords and key phrases to be found
              by your perspective employers extends to Linked profiles,job sites
              and social media.
            </p>
            <a href="professionalprofileoptimization">
              <button className="w-full  p-2 text-white rounded-lg bg-blue-700">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCards;
