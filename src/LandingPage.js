import "./LandingPage.css";
import React, { useState, useEffect } from "react";
import { ReactComponent as TechIcon } from "./imgs/tech.svg"; // Assuming 'tech.svg' is in the 'icons' directory relative to this component file
import { ReactComponent as Logo } from "./imgs/logo.svg"; // Assuming 'tech.svg' is in the 'icons' directory relative to this component file
import { ReactComponent as Idea } from "./imgs/idea.svg"; // Assuming 'tech.svg' is in the 'icons' directory relative to this component file
import { ReactComponent as Screening } from "./imgs/screening.svg"; // Assuming 'tech.svg' is in the 'icons' directory relative to this component file
import { ReactComponent as Interview } from "./imgs/interview.svg"; // Assuming 'tech.svg' is in the 'icons' directory relative to this component file
import { ReactComponent as Project } from "./imgs/project.svg"; // Assuming 'tech.svg' is in the 'icons' directory relative to this component file
import { ReactComponent as Team } from "./imgs/teamwork.svg"; // Assuming 'tech.svg' is in the 'icons' directory relative to this component file
import { ReactComponent as Scrum } from "./imgs/scrum.svg"; // Assuming 'tech.svg' is in the 'icons' directory relative to this component file
import hackathonImage from "./imgs/hackathon.jpg"; // Import the image
import hackathonImage2 from "./imgs/hackthon2.jpg"; // Import the image
import hackathonImage3 from "./imgs/hackathon3.jpg"; // Import the image

function LandingPage() {
  return (
    <div>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>PROJECT: Pioneer</title>
        <meta name="description" content="Simple landind page" />
        <meta name="keywords" content="" />
        <meta name="author" content="" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700"
          rel="stylesheet"
        />
      </head>
      <body
        className="gradient"
        class="leading-normal tracking-normal text-white gradient"
      >
        <nav id="header" class="custom-bg fixed w-full z-30 top-0 text-white">
          <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
            <div class="pl-4 flex items-center">
              <a
                class="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                href="#"
              >
                <div class="size-0 fill-current inline">
                  {/* <Logo /> */}
                  PROJECT: Pioneer
                </div>
              </a>
            </div>
            <div class="block lg:hidden pr-4">
              <button
                id="nav-toggle"
                class="flex items-center p-1 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              >
                <svg
                  class="fill-current h-6 w-6"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
            <div
              class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
              id="nav-content"
            >
              <ul class="list-reset lg:flex justify-end flex-1 items-center">
                <li class="mr-3">
                  <a
                    class="inline-block py-2 px-4 text-white font-bold no-underline"
                    href="#"
                  >
                    Events
                  </a>
                </li>
                <li class="mr-3">
                  <a
                    class="inline-block text-white no-underline font-bold hover:text-gray-800 hover:text-underline py-2 px-4"
                    href="#"
                  >
                    Your Profile
                  </a>
                </li>
                <li class="mr-3">
                  <a
                    class="inline-block text-white no-underline font-bold hover:text-gray-800 hover:text-underline py-2 px-4"
                    href="#"
                  >
                    Learn More
                  </a>
                </li>
              </ul>
              <button
                id="navAction"
                class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              >
                Sign In
              </button>
            </div>
          </div>
          <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
        </nav>
        <div class="pt-24">
          <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
              <p class="uppercase tracking-loose w-full">resumes reimagined</p>
              <h1 class="my-4 text-5xl font-bold leading-tight">
                Say goodbye to traditional job applications and hello to a world
                of endless possibilities!
              </h1>
              <p class="leading-normal text-2xl mb-8">
                Level up your tech career with us!
              </p>
              <button class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Sign up here
              </button>
            </div>
            <div class="w-full md:w-3/5 py-6 text-center">
              <div className=" tw-scale-85">
                <TechIcon />
              </div>

              {/* <img class="w-full md:w-4/5 z-50" src={techImage} /> */}
            </div>
          </div>
        </div>
        <div class="relative -mt-12 lg:-mt-24">
          <svg
            viewBox="0 0 1428 174"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                transform="translate(-2.000000, 44.000000)"
                fill="#FFFFFF"
                fill-rule="nonzero"
              >
                <path
                  d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                  id="Path-4"
                  opacity="0.200000003"
                ></path>
              </g>
              <g
                transform="translate(-4.000000, 76.000000)"
                fill="#FFFFFF"
                fill-rule="nonzero"
              >
                <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
              </g>
            </g>
          </svg>
        </div>
        <section class="bg-white border-b py-8">
          <div class="container max-w-5xl mx-auto m-8">
            <br />

            <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
              PROJECT: Pioneer
            </h2>

            <div class="flex flex-wrap">
              <div class="w-5/6 sm:w-1/2 p-6 tw-self-center">
                <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                  Resumes don't do enough
                </h3>
                <p class="text-gray-600 mb-8">
                  In today's competitive job market, resumes alone often fall
                  short in showcasing the full extent of your skills,
                  creativity, and potential. While they provide a glimpse into
                  your past experiences and qualifications, they lack the depth
                  and context needed to truly differentiate you from other
                  applicants.
                  <br />
                  <br />
                  That's where our platform comes in. We believe that
                  traditional resumes don't do justice to your abilities and
                  aspirations. Instead, we offer a dynamic space where you can
                  not only highlight your past achievements but also demonstrate
                  your problem-solving abilities, creativity, and collaboration
                  skills through real-world projects.
                </p>
              </div>
              <div class="w-full sm:w-1/2 p-6">
                <div class="flex items-stretch ">
                  <Screening />
                </div>
              </div>
            </div>
            <div class="flex flex-wrap flex-col-reverse sm:flex-row">
              <div class="w-full sm:w-1/2 p-6 mt-6">
                <div class="flex items-stretch py-0">
                  <Idea />
                </div>
              </div>
              <div class="w-full sm:w-1/2 p-6 mt-6 py-0">
                <div class="align-middle">
                  <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                    Empowering Entry-Level Applicants to Thrive{" "}
                  </h3>
                  <p class="text-gray-600 mb-8">
                    For many entry-level applicants, the job market can feel
                    like a Catch-22 – how can you gain experience if no one is
                    willing to give you a chance? It's a dilemma that plagues
                    countless individuals, leaving them feeling stuck and
                    discouraged in their career pursuits.
                    <br />
                    <br />
                    But our platform offers a solution to this age-old problem.
                    By providing opportunities for collaborative projects and
                    hackathons tied to real job openings, we empower entry-level
                    applicants to gain valuable experience and showcase their
                    skills in a tangible way.
                    <br />
                    <br />
                    Here's how it works: instead of passively submitting resumes
                    and cover letters and hoping for the best, applicants have
                    the chance to actively participate in projects that mirror
                    the challenges they'll face in the workforce. Whether it's
                    developing a new feature for a company's product or
                    brainstorming innovative solutions to complex problems,
                    participants gain hands-on experience and practical skills
                    that are directly relevant to the job market.
                  </p>
                  <br />
                </div>
              </div>
              <div class="flex flex-wrap">
                <div class="w-5/6 sm:w-1/2 p-6">
                  <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                    Enhancing Talent Acquisition
                  </h3>
                  <p class="text-gray-600 mb-8">
                    By hosting hackathons and projects on our platform,
                    companies can identify top talent based on real-world
                    problem-solving abilities, creativity, and teamwork. This
                    streamlined approach saves time and resources while ensuring
                    candidates align with the company's needs and culture.
                    <br />
                    <br />
                    Additionally, hosting events on our platform increases brand
                    visibility and fosters engagement within the tech community,
                    positioning companies as employers of choice. Beyond
                    immediate hiring, this model enables long-term talent
                    development by nurturing relationships with participants and
                    investing in future workforce needs.
                  </p>
                </div>
                <div class="w-full sm:w-1/2 p-6">
                  <div class="flex items-stretch py-0">
                    <Interview />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="bg-white border-b py-8">
          <div class="container mx-auto flex flex-wrap pt-4 pb-12">
            <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
              Featured Postings
            </h2>
            <div class="w-full mb-4">
              <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
              <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                <a
                  href="#"
                  class="flex flex-wrap no-underline hover:no-underline"
                >
                  <p class="w-full text-gray-600 text-xs md:text-sm px-6">
                    Arbitrary Company Name
                  </p>
                  <div class="w-full font-bold text-xl text-gray-800 px-6">
                    Arbitrary Project/Hackathon Name
                  </div>
                  <p class="text-gray-800 text-base px-6 mb-5">
                    About the project/hackathon and what it entails. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Aliquam at
                    ipsum
                  </p>
                </a>
                {/* <div class="flex tw-justify-items-center">

                <Scrum />
                </div> */}
                <div class="h-60 w-96">
                  <img
                    src={hackathonImage2}
                    class="m-8 p-6 tw-scale-150 tw-object-fill"
                    alt="hackathon2"
                  />
                </div>
              </div>
              <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div class="flex items-center justify-start">
                  <button class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Read More
                  </button>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
              <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                <a
                  href="#"
                  class="flex flex-wrap no-underline hover:no-underline"
                >
                  <p class="w-full text-gray-600 text-xs md:text-sm px-6">
                    Arbitrary Company Name
                  </p>
                  <div class="w-full font-bold text-xl text-gray-800 px-6">
                    Arbitrary Project/Hackathon Name
                  </div>
                  <p class="text-gray-800 text-base px-6 mb-5">
                    About the project/hackathon and what it entails. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Aliquam at
                    ipsum
                  </p>
                </a>
                <div class="h-60 w-96">
                  <img
                    src={hackathonImage}
                    class="m-6 p-6 tw-scale-150 tw-object-fill"
                    alt="hackathon"
                  />
                </div>
              </div>
              <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div class="flex items-center justify-center">
                  <button class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Read More
                  </button>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
              <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                <a
                  href="#"
                  class="flex flex-wrap no-underline hover:no-underline"
                >
                  <p class="w-full text-gray-600 text-xs md:text-sm px-6">
                    Arbitrary Company Name
                  </p>
                  <div class="w-full font-bold text-xl text-gray-800 px-6">
                    Arbitrary Project/Hackathon Name
                  </div>
                  <p class="text-gray-800 text-base px-6 mb-5">
                    About the project/hackathon and what it entails. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Aliquam at
                    ipsum
                  </p>
                </a>
                <div class="h-60 w-96">
                  <img
                    src={hackathonImage3}
                    class="m-8 p-6 tw-scale-150 tw-object-fill"
                    alt="hackathon3"
                  />
                </div>
                {/* <div class="flex items-center justify-end"> */}
                  {/* <Project /> */}
                {/* </div> */}
              </div>
              <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div class="flex items-center justify-end">
                  <button class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <svg
          class="wave-top"
          viewBox="0 0 1439 147"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
              <g class="wave" fill="#f8fafc">
                <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
              </g>
              <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
                <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                  <path
                    d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                    opacity="0.100000001"
                  ></path>
                  <path
                    d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                    opacity="0.100000001"
                  ></path>
                  <path
                    d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                    opacity="0.200000003"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
        <section class="container mx-auto text-center py-6 mb-12">
          <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
            Ready to pioneer your tech journey?
          </h2>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <h3 class="my-4 text-3xl leading-tight">Join us today!</h3>
          <button class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            Sign up!
          </button>
        </section>
        <footer class="bg-white">
          <div class="container mx-auto px-8">
            <div class="w-full flex flex-col md:flex-row py-6">
              <div class="flex-1 mb-6 text-black">
                <a
                  class="no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                  href="#"
                >
                  PROJECT: Pioneer
                </a>
              </div>
              <div class="flex-1">
                <p class="uppercase text-gray-500 md:mb-6">Links</p>
                <ul class="list-reset mb-6">
                  <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="#"
                      class="no-underline hover:underline text-gray-800 hover:text-pink-500"
                    >
                      FAQ
                    </a>
                  </li>
                  <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="#"
                      class="no-underline hover:underline text-gray-800 hover:text-pink-500"
                    >
                      Help
                    </a>
                  </li>
                  <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="#"
                      class="no-underline hover:underline text-gray-800 hover:text-pink-500"
                    >
                      Support
                    </a>
                  </li>
                </ul>
              </div>
              <div class="flex-1">
                <p class="uppercase text-gray-500 md:mb-6">Legal</p>
                <ul class="list-reset mb-6">
                  <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="#"
                      class="no-underline hover:underline text-gray-800 hover:text-pink-500"
                    >
                      Terms
                    </a>
                  </li>
                  <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="#"
                      class="no-underline hover:underline text-gray-800 hover:text-pink-500"
                    >
                      Privacy
                    </a>
                  </li>
                </ul>
              </div>
              <div class="flex-1">
                <p class="uppercase text-gray-500 md:mb-6">Social</p>
                <ul class="list-reset mb-6">
                  <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="#"
                      class="no-underline hover:underline text-gray-800 hover:text-pink-500"
                    >
                      Facebook
                    </a>
                  </li>
                  <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="#"
                      class="no-underline hover:underline text-gray-800 hover:text-pink-500"
                    >
                      Linkedin
                    </a>
                  </li>
                  <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="#"
                      class="no-underline hover:underline text-gray-800 hover:text-pink-500"
                    >
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
              <div class="flex-1">
                <p class="uppercase text-gray-500 md:mb-6">Company</p>
                <ul class="list-reset mb-6">
                  <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="#"
                      class="no-underline hover:underline text-gray-800 hover:text-pink-500"
                    >
                      Official Blog
                    </a>
                  </li>
                  <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="#"
                      class="no-underline hover:underline text-gray-800 hover:text-pink-500"
                    >
                      About Us
                    </a>
                  </li>
                  <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="#"
                      class="no-underline hover:underline text-gray-800 hover:text-pink-500"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <a
            href="https://www.freepik.com/free-photos-vectors/background"
            class="text-gray-500"
          >
            Background vector created by freepik - www.freepik.com
          </a>
        </footer>
      </body>
    </div>
  );
}

export default LandingPage;
