import Head from "next/head";
import { BsFillSunFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/developer.png";
import API from "../public/Api.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import js from "../public/js.png";
import css from "../public/css.png";
import html from "../public/html.png";
import react from "../public/react.png";
import nextjs from "../public/nextjs.png";
import angular from "../public/angular.png";
import figma from "../public/figma.png";
import java from "../public/java.png";
import python from "../public/python.png";
import nodejs from "../public/nodejs.png";
import django from "../public/django.png";
import git from "../public/git.png";
import mongodb from "../public/mongodb.png";
import postman from "../public/postman.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Brian Mwiruki</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">Bryan.Dev</h1>
            <ul className="flex items-center">
              <li>
                <BsFillSunFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-teal-50"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-2 px-4 rounded-md ml-8"
                  href="Brian Mwiruki Resume.pdf"
                  download="Brian resume.pdf"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Brian Mwiruki
            </h2>
            <h3
              id="title"
              className="text-2xl py-2  md:text-7xl dark:text-white"
            >
              Software Engineer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-400">
              I am a full-stack developer with extensive experience in
              team-based production environments emphasizing quality control and
              who excels at communication and problem-solving. I embrace the
              life-long pursuit of knowledge and conquering new challenges
              through a logical, data-driven approach.
            </p>
          </div>
          <div className="text-4xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
            <a href="https://github.com/brianmwiruki">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/brianmwiruki/">
              <AiFillLinkedin />
            </a>
            <a href="mailto:mwiruki@outlook.com">
              <AiFillMail />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>

          <div>
            <h3
              id="subTitle"
              className="text-4xl py-2 text-center pt-10 dark:text-teal-700"
            >
              Services I Offer
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-300">
              Throughout my career, I have honed my skills in a variety of
              programming languages, including HTML, CSS, JavaScript and Python.
              I have also worked extensively with frameworks such as React,
              Next, Angular, Node.js, and Django, and I am familiar with
              database management systems like MySQL, MongoDB, and PostgreSQL.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            <div className="text-center justify-center shadow-lg p-10 rounded-xl my-10"> 
              <div className="flex justify-center ">
                <Image src={design} width={100} height={100} />
              </div>
              <h3
                id="subTitle"
                className="text-3xl font-medium pt-8 pb-2 dark:text-gray-300"
              >
                Front-End Developer
              </h3>
              <p className="py-2 dark:text-gray-200">
                Some of my favourite development tools are Next and React JS
                mainly for the User Interface, but i also work with the tools
                highlighted below for front end application development and
                design.
              </p>
              <h4 className="py-4 text-teal-600">Tools & Technology</h4>
              <ul className="flex items-center justify-center ">
                <li className="flex justify-center px-3 py-3">
                  
                  <Image src={js} width={100} height={100} />
                </li>
                <li className="flex justify-center px-3 py-3">
                  
                  <Image src={css} width={100} height={100} />
                </li>
                <li className="flex justify-center px-3 py-3">
                  
                  <Image src={html} width={100} height={100} />
                </li>
              </ul>
              <ul className="flex items-center justify-center ">
                <li className="flex justify-center px-3 py-3">
                  
                  <Image src={react} width={100} height={100} />
                </li>
                <li className="flex justify-center px-3 py-3 dark:bg-white rounded">
                 
                  <Image src={nextjs} width={100} height={100} />
                </li>
                <li className="flex justify-center px-3 py-3">
                  
                  <Image src={angular} width={100} height={100} />
                </li>
              </ul>
              <ul className="flex items-center justify-center ">
                <li className="flex justify-center gap-3 px-3 py-3">
                  
                  <Image src={figma} width={100} height={100} />
                </li>
              </ul>
            </div>

            <div className="text-center justify-center shadow-lg p-10 rounded-xl my-10">
              <div className="flex justify-center">
                <Image src={code} width={100} height={100} />
              </div>
              <h3
                id="subTitle"
                className="text-3xl font-medium pt-8 pb-2 dark:text-gray-300"
              >
                {" "}
                Backend Developer{" "}
              </h3>
              <p className="py-2 dark:text-gray-200">
                I am proficient in java and python with the major frameworks
                being Spring boot and Django respectively. Employing the use of
                MYSQL for database features when developing software. Other
                technologies highligted below.
              </p>
              <h4 className="py-2 text-teal-600">Tools & Technology</h4>

              <ul className="flex items-center justify-center">
                <li className="flex justify-center px-3 py-3">
                  {" "}
                  <Image src={java} width={100} height={100} />{" "}
                </li>
                <li className="flex justify-center px-3 py-3">
                  {" "}
                  <Image src={python} width={100} height={100} />{" "}
                </li>
                <li className="flex justify-center px-3 py-3">
                  {" "}
                  <Image src={nodejs} width={100} height={100} />{" "}
                </li>
              </ul>
              <ul className="flex items-center justify-center">
                <li className="flex justify-center px-3 py-3">
                  {" "}
                  <Image src={django} width={100} height={100} />{" "}
                </li>
                <li className="flex justify-center px-3 py-3">
                  {" "}
                  <Image src={git} width={100} height={100} />{" "}
                </li>
                <li className="flex justify-center px-3 py-3">
                  {" "}
                  <Image src={mongodb} width={100} height={100} />{" "}
                </li>
              </ul>
            </div>

            <div className="text-center justify-center shadow-lg p-10 rounded-xl my-10">
              <div className="flex justify-center">
                <Image src={API} width={100} height={100} />
              </div>
              <h3
                id="subTitle"
                className="text-3xl font-medium pt-2 pb-2 dark:text-gray-300"
              >
                API Development & Intergretion
              </h3>
              <p className="py-2 dark:text-gray-300">
                I majorly use spring boot and javascript for API development and
                intergration, Especially when working on highly scalable
                applications.
              </p>
              <h4 className="py-4 text-teal-600">Tools & Technology</h4>
              <ul className="flex items-center justify-center">
                <li className="flex justify-center px-3 py-3">
                  {" "}
                  <Image src={java} width={100} height={100} />{" "}
                </li>
                <li className="flex justify-center px-3 py-3">
                  {" "}
                  <Image src={python} width={100} height={100} />{" "}
                </li>
                <li className="flex justify-center px-3 py-3">
                  {" "}
                  <Image src={postman} width={100} height={100} />{" "}
                </li>
              </ul>
            </div>
          </div>

        </section>

        <section>
          <div>
            <h3
              id="portfolio"
              className="text-5xl py-4 text-center dark:text-teal-700"
            >
              Portfolio
            </h3>
            <p className="flex justify-center text-md py-2 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-300">
              Here are some projects I have worked on
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
