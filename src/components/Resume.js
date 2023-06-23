import React, { useRef } from "react";
import { ReactComponent as MongodbIcon } from "../skillsSvgs/row1/icons8-mongodb.svg";
import { ReactComponent as ExpressIcon } from "../skillsSvgs/row1/icons8-express-js.svg";
import { ReactComponent as ReactIcon } from "../skillsSvgs/row1/icons8-react-js.svg";
import { ReactComponent as NodeIcon } from "../skillsSvgs/row1/icons8-nodejs.svg";
import { ReactComponent as Javascript } from "../skillsSvgs/row1/icons8-javascript.svg";
import { ReactComponent as Typescript } from "../skillsSvgs/row1/icons8-typescript-96.svg";
import { ReactComponent as C } from "../skillsSvgs/row2/icons8-c.svg";
import { ReactComponent as C_Plus_Plus } from "../skillsSvgs/row2/icons8-c++.svg";
import { ReactComponent as Java } from "../skillsSvgs/row2/icons8-java.svg";
import { ReactComponent as Dart } from "../skillsSvgs/row2/icons8-dart.svg";
import { ReactComponent as Python } from "../skillsSvgs/row2/icons8-python.svg";
import { ReactComponent as Git } from "../skillsSvgs/row2/icons8-git.svg";
import { ReactComponent as Github } from "../skillsSvgs/row3/icons8-github.svg";
import GraphQL from "../skillsSvgs/row3/graphQL.png";
import RestAPI from "../skillsSvgs/row3/icons8-rest-api-100.png";
import { ReactComponent as Firebase } from "../skillsSvgs/row3/icons8-firebase.svg";
import { ReactComponent as Firestore } from "../skillsSvgs/row3/icons8-firestore.svg";
import { ReactComponent as Redux } from "../skillsSvgs/row3/icons8-redux.svg";
import { ReactComponent as Redux_Toolkit } from "../skillsSvgs/row4/icons8-redux.svg";
import { ReactComponent as HTML } from "../skillsSvgs/row4/icons8-html5.svg";
import { ReactComponent as CSS } from "../skillsSvgs/row4/icons8-css3.svg";
import { ReactComponent as Bootstrap } from "../skillsSvgs/row4/icons8-bootstrap.svg";
import { ReactComponent as SCSS } from "../skillsSvgs/row4/icons8-sass-avatar.svg";
import { ReactComponent as Chakra_UI } from "../skillsSvgs/row4/icons8-chakra-ui.svg";
import { ReactComponent as Aunt_Design } from "../skillsSvgs/row5/auntDesign.svg";
import { ReactComponent as React_Native } from "../skillsSvgs/row5/icons8-react-native.svg";

// Work Experience Images Imports
import infoImage from "../Invicuts-Images/info.png";
import layerImage from "../Invicuts-Images/layer.png";
import keyImage from "../Invicuts-Images/key.png";
import profileImage from "../Invicuts-Images/profile.png";
import freelancerImage from "../Invicuts-Images/freelancer.png";
// import sevenOvn from "../Education-Images/SMIT.jpeg";
import SMIT from "../Invicuts-Images/SMIT.jpg";
import ZWTECH from "../Invicuts-Images/ZWTECH.png";
import Seeraht from "../Invicuts-Images/Seeraht.png";

// Projects Section
import { ReactComponent as GitHubIconForProjectsSection } from "../svg/githubIconForProjectsSection.svg";
import graduationImage from "../Education-Images/graduationIcon.png";
import MedalIcon from "../Achievements-Image/medalIcon.png";

// To Convert it into pdf
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

function Resume() {
  const pdfExportComponent = useRef(null);
  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  };

  const exportOptions = {
    paperSize: "A4",
    margin: { top: "0cm", right: "0cm", bottom: "0cm", left: "0cm" },
    scale: 0.4, // adjust to fit on page
  };

  return (
    <div>
      <button
        onClick={handleExportWithComponent}
        className="bg-blue-600 text-white"
      >
        Click to print
      </button>
      <PDFExport ref={pdfExportComponent} {...exportOptions}>
        <div className="">
          {/* Section 1  */}
          <div className="h-[17.125rem] bg-[#f8fffa]">
            <div className="text-[60px] mt-[3.438rem] ml-[2.625rem] h-[30px] inline-block w-[43rem] font-PlayfairDisplayBlackItalic">
              Ahmad Jajja
            </div>
            <div className="text-[32.6761px] leading-[46.6761px] ml-[2.625rem] w-[27rem] relative bottom-[0.5rem] font-SourceSerifProExtraLight font-semibold pt-2">
              Software Engineer
            </div>
            <div className="text-[25px] mt-[1.75rem] ml-[2.9rem]  font-MerriWeatherBlackItalic font-extrabold relative top-[25px]">
              Skills
            </div>

            {/* Logos */}
            <div className="relative">
              {/* Github */}
              <a
                href="https://github.com/Ahmadjajja"
                className="absolute right-[16.5rem] bottom-[115px] cursor-pointer px-2"
              >
                <img
                  className="w-[35px] h-[35px]"
                  src="https://img.icons8.com/ios-glyphs/30/null/github.png"
                />
              </a>
              {/* Linked in */}
              <a
                href="https://www.linkedin.com/in/ahmad-jajja-ba8b34210/"
                className="cursor-pointer "
              >
                <div className="absolute right-[13.7rem] bottom-[115px] px-1">
                  <img
                    className="w-[35px] h-[35px]"
                    src="https://img.icons8.com/fluency/48/null/linkedin.png"
                  />
                </div>
              </a>
              {/* Leet code */}
              <a
                href="https://leetcode.com/ahmadjajja86/"
                className="absolute right-[10.9rem] bottom-[115px] cursor-pointer "
              >
                <div className="w-[35px] h-[35px] ">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      fill="#B3B1B0"
                      d="M22 14.355c0-.742-.564-1.346-1.26-1.346H10.676c-.696 0-1.26.604-1.26 1.346s.563 1.346 1.26 1.346H20.74c.696.001 1.26-.603 1.26-1.346z"
                    />
                    <path
                      fill="#E7A41F"
                      d="m3.482 18.187 4.313 4.361c.973.979 2.318 1.452 3.803 1.452 1.485 0 2.83-.512 3.805-1.494l2.588-2.637c.51-.514.492-1.365-.039-1.9-.531-.535-1.375-.553-1.884-.039l-2.676 2.607c-.462.467-1.102.662-1.809.662s-1.346-.195-1.81-.662l-4.298-4.363c-.463-.467-.696-1.15-.696-1.863 0-.713.233-1.357.696-1.824l4.285-4.38c.463-.467 1.116-.645 1.822-.645s1.346.195 1.809.662l2.676 2.606c.51.515 1.354.497 1.885-.038.531-.536.549-1.387.039-1.901l-2.588-2.636a4.994 4.994 0 0 0-2.392-1.33l-.034-.007 2.447-2.503c.512-.514.494-1.366-.037-1.901-.531-.535-1.376-.552-1.887-.038l-10.018 10.1C2.509 11.458 2 12.813 2 14.311c0 1.498.509 2.896 1.482 3.876z"
                    />
                    <path
                      fill="#070706"
                      d="M8.115 22.814a2.109 2.109 0 0 1-.474-.361c-1.327-1.333-2.66-2.66-3.984-3.997-1.989-2.008-2.302-4.937-.786-7.32a6 6 0 0 1 .839-1.004L13.333.489c.625-.626 1.498-.652 2.079-.067.56.563.527 1.455-.078 2.066-.769.776-1.539 1.55-2.309 2.325-.041.122-.14.2-.225.287-.863.876-1.75 1.729-2.601 2.618-.111.116-.262.186-.372.305-1.423 1.423-2.863 2.83-4.266 4.272-1.135 1.167-1.097 2.938.068 4.127 1.308 1.336 2.639 2.65 3.961 3.974.067.067.136.132.204.198.468.303.474 1.25.183 1.671-.321.465-.74.75-1.333.728-.199-.006-.363-.086-.529-.179z"
                    />
                  </svg>
                </div>
              </a>
            </div>

            {/* Phone Number */}
            <div className="relative flex">
              <div className="absolute right-[9.25rem] bottom-[77px] flex justify-center items-center">
                <div className="inline-block">
                  <img
                    className="w-[23px] h-[23px]"
                    src="https://img.icons8.com/ios-filled/50/null/ringer-volume.png"
                  />
                </div>
                <div className="inline-block items-center justify-center ml-[7px] text-[20.7449px] leading-[20.7449px] tracking-tighter font-LatoItalic">
                  +92 &nbsp; 3419853167
                </div>
              </div>
            </div>

            {/* Gmail */}
            <div className="relative">
              <div className="absolute right-[7.3rem] bottom-[45px] flex justify-center items-center">
                <div className="inline-block">
                  <img
                    className="w-[23px] h-[23px]"
                    src="https://img.icons8.com/color/48/null/gmail--v1.png"
                  />
                </div>
                <a
                  href="mailto:ahmadjajja86@gmail.com"
                  className="inline-block items-center justify-center ml-[7px] font-MerriWeatherBlack tracking-tighter tracking-wide"
                >
                  ahmadjajja86@gmail.com
                </a>
              </div>
            </div>

            {/* Internet Web Link */}
            <div className="relative flex">
              <div className="absolute right-[8.262rem] bottom-[14px] flex justify-center items-center">
                <div className="inline-block">
                  <svg
                    fill="#000000"
                    height="23px"
                    width="23px"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 58 58"
                  >
                    <path
                      d="M50.688,48.222C55.232,43.101,58,36.369,58,29c0-7.667-2.996-14.643-7.872-19.834c0,0,0-0.001,0-0.001
	c-0.004-0.006-0.01-0.008-0.013-0.013c-5.079-5.399-12.195-8.855-20.11-9.126l-0.001-0.001L29.439,0.01C29.293,0.005,29.147,0,29,0
	s-0.293,0.005-0.439,0.01l-0.563,0.015l-0.001,0.001c-7.915,0.271-15.031,3.727-20.11,9.126c-0.004,0.005-0.01,0.007-0.013,0.013
	c0,0,0,0.001-0.001,0.002C2.996,14.357,0,21.333,0,29c0,7.369,2.768,14.101,7.312,19.222c0.006,0.009,0.006,0.019,0.013,0.028
	c0.018,0.025,0.044,0.037,0.063,0.06c5.106,5.708,12.432,9.385,20.608,9.665l0.001,0.001l0.563,0.015C28.707,57.995,28.853,58,29,58
	s0.293-0.005,0.439-0.01l0.563-0.015l0.001-0.001c8.185-0.281,15.519-3.965,20.625-9.685c0.013-0.017,0.034-0.022,0.046-0.04
	C50.682,48.241,50.682,48.231,50.688,48.222z M2.025,30h12.003c0.113,4.239,0.941,8.358,2.415,12.217
	c-2.844,1.029-5.563,2.409-8.111,4.131C4.585,41.891,2.253,36.21,2.025,30z M8.878,11.023c2.488,1.618,5.137,2.914,7.9,3.882
	C15.086,19.012,14.15,23.44,14.028,28H2.025C2.264,21.493,4.812,15.568,8.878,11.023z M55.975,28H43.972
	c-0.122-4.56-1.058-8.988-2.75-13.095c2.763-0.968,5.412-2.264,7.9-3.882C53.188,15.568,55.736,21.493,55.975,28z M28,14.963
	c-2.891-0.082-5.729-0.513-8.471-1.283C21.556,9.522,24.418,5.769,28,2.644V14.963z M28,16.963V28H16.028
	c0.123-4.348,1.035-8.565,2.666-12.475C21.7,16.396,24.821,16.878,28,16.963z M30,16.963c3.179-0.085,6.3-0.566,9.307-1.438
	c1.631,3.91,2.543,8.127,2.666,12.475H30V16.963z M30,14.963V2.644c3.582,3.125,6.444,6.878,8.471,11.036
	C35.729,14.45,32.891,14.881,30,14.963z M40.409,13.072c-1.921-4.025-4.587-7.692-7.888-10.835
	c5.856,0.766,11.125,3.414,15.183,7.318C45.4,11.017,42.956,12.193,40.409,13.072z M17.591,13.072
	c-2.547-0.879-4.991-2.055-7.294-3.517c4.057-3.904,9.327-6.552,15.183-7.318C22.178,5.38,19.512,9.047,17.591,13.072z M16.028,30
	H28v10.038c-3.307,0.088-6.547,0.604-9.661,1.541C16.932,37.924,16.141,34.019,16.028,30z M28,42.038v13.318
	c-3.834-3.345-6.84-7.409-8.884-11.917C21.983,42.594,24.961,42.124,28,42.038z M30,55.356V42.038
	c3.039,0.085,6.017,0.556,8.884,1.4C36.84,47.947,33.834,52.011,30,55.356z M30,40.038V30h11.972
	c-0.113,4.019-0.904,7.924-2.312,11.58C36.547,40.642,33.307,40.126,30,40.038z M43.972,30h12.003
	c-0.228,6.21-2.559,11.891-6.307,16.348c-2.548-1.722-5.267-3.102-8.111-4.131C43.032,38.358,43.859,34.239,43.972,30z
	 M9.691,47.846c2.366-1.572,4.885-2.836,7.517-3.781c1.945,4.36,4.737,8.333,8.271,11.698C19.328,54.958,13.823,52.078,9.691,47.846
   z M32.521,55.763c3.534-3.364,6.326-7.337,8.271-11.698c2.632,0.945,5.15,2.209,7.517,3.781
   C44.177,52.078,38.672,54.958,32.521,55.763z"
                    />
                  </svg>
                </div>
                <a href="https://ahmad-jajja.netlify.app/" className="inline-block items-center justify-center ml-[7px] font-mono tracking-tight" target="_blank">
                  ahmad-jajja.netlify.app
                </a>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-[#e8ffed] relative ">
            {/* Row 1 */}

            <div id="row1" className="flex items-stretch ... pt-3">
              <div className="col w-[16.6%] pl-9 ">
                <MongodbIcon />
                <i className="pl-3 ">MongoDB</i >

              </div>
              <div className="col w-[16.6%] pl-9">
                <ExpressIcon />
                <i className="pl-3 ">Express JS</i >
              </div>
              <div className="col w-[16.6%] pl-9">
                <ReactIcon className="mt-5 pb-2" />
                <i className="pl-3 ">React JS</i >
              </div>
              <div className="col w-[16.6%] pl-9">
                <NodeIcon className="pt-2" />
                <i className="pl-4 ">Node JS</i >
              </div>
              <div className="col w-[16.6%] pl-9">
                <Javascript />
                <i className="pl-2 ">Javascript (ES6 +)</i >
              </div>
              <div className="col w-[16.6%] pl-9">
                <Typescript />
                <i className="pl-3 ">Typescript</i >
              </div>
            </div>
            {/* Row 2 */}
            <div id="row2" className="flex items-stretch ... pt-3">
              <div className="col w-[16.6%] pl-9">
                <C />
                <i className="pl-10 ">C</i >
              </div>
              <div className="col w-[16.6%] pl-9">
                <C_Plus_Plus />
                <i className="pl-8 ">C++</i >
              </div>
              <div className="col w-[16.6%] pl-9">
                <Java />
                <i className="pl-8 ">Java</i >
              </div>
              <div className="col w-[16.6%] pl-9">
                <Dart />
                <i className="pl-8 ">Dart</i >
              </div>
              <div className="col w-[16.6%] pl-9">
                <Python />
                <i className="pl-5 ">Python</i >
              </div>
              <div className="col w-[16.6%] pl-9">
                <Git />
                <i className="pl-10 ">Git</i >
              </div>
            </div>
            {/* Row 3 */}
            <div id="row3" className="flex items-stretch ... pt-4">
              <div className="col w-[16.6%] pl-9">
                <Github />
                <i className="pl-6 ">Github</i >
              </div>
              <div className="col w-[16.6%] pl-9">
                <img src={GraphQL} alt="GraphQL" />
                <i className="pl-5 ">GraphQL</i >
              </div>
              <div className="col w-[16.6%] pl-9">
                <React_Native />
                <i className="pl-2 ">ReactNative</i >
              </div>
              <div className="col w-[16.6%] pl-9">
                <Firebase />
                <i className="pl-6 ">Firebase</i >
              </div>
              <div className="col w-[16.6%] pl-9">
                <Firestore />
                <i className="pl-6 ">Firestore</i >
              </div>
              <div className="col w-[16.6%] pl-9">
                <Redux />
                <i className="pl-8 ">Redux</i >
              </div>
            </div>
            {/* Row 4 */}
            <div id="row4" className="flex items-stretch ... py-4">
              <div className="col w-[16.6%] pl-9">
                <Redux_Toolkit />
                <i className="pl-2 ">Redux-Toolkit</i >
              </div>
              <div className="col w-[16.6%] pl-9">
                <HTML />
                <i className="pl-6 ">HTML 5</i >
              </div>
              <div className="col w-[16.6%] pl-9">
                <CSS />
                <i className="pl-7 ">CSS 3</i >
              </div>
              <div className="col w-[16.6%] pl-9">
                <Bootstrap />
                <i className="pl-3 ">Bootstrap 5</i >
              </div>
              <div className="col w-[16.6%] pl-9">
                <SCSS />
                <i className="pl-8 ">SCSS</i >
              </div>
              <div className="col w-[16.6%] pl-9">
                <Chakra_UI />
                <i className="pl-5 ">ChakraUI</i >
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="flex justify-between">
            {/* First SubSection */}
            <div className="w-[50%]">
              <div className="ml-[42px] mt-[15px] text-[41.4899px] tracking-tighter font-RighteousRegular">
                Work Experience
              </div>
              {/* Invictus Solution */}
              {/* Image and first banner */}
              <div className="h-[33px] w-[31.25rem]">
                <div className="mt-[20px] flex bg-[#e8ffed] border-t-[2px] border-b-[2px] border-r-[2px] border-l-[0] rounded-t-xl rounded-r-xl rounded-b-xl rounded-l-none ">
                  <div className="w-[100px] ml-[42px]">
                    <img src={SMIT} alt="My Image" className="mt-[3px]" />
                  </div>
                  <div className="ml-[42px] font-PlayfairDisplayBold pt-4">
                    Dec 2022 - present
                  </div>
                </div>
              </div>

              {/* First */}
              <div className="ml-[4rem] flex mt-[40px]">
                <span>
                  <img
                    className="h-[25px] w-[25px]"
                    src={infoImage}
                    alt="info"
                  />
                </span>
                <span className="ml-[30px] font-MerriWeatherBlack">
                  MERN-Stack-Trainer
                </span>
              </div>

              {/* Second */}
              <div className="ml-[3.7rem] flex mt-[10px]">
                <span>
                  <img
                    className="h-[35px] w-[35px]"
                    src={layerImage}
                    alt="info"
                  />
                </span>
                <span className="ml-[25px] pl-5">
                  HTML5, CSS3, Bootstrap5, JS, TS, ReactJS, ReactNative, Redux, ContextAPI, NodeJS, ExpressJS, MongoDb, Firebase, Firestore, Git, Github, Heroku, Netlify, Surge
                </span>
              </div>

              {/* Third */}
              <div className="ml-[4rem] flex mt-[10px]">
                <span>
                  <img
                    className="h-[20px] w-[20px] mt-[8px]"
                    src={keyImage}
                    alt="info"
                  />
                </span>
                <span className="ml-[34px] pl-1">
                  Instructed nearly {" "}
                  <span className="font-MerriWeatherBlack tracking-tighter">
                    200
                  </span>{" "}
                  students.
                </span>
              </div>

              {/* Fourth */}
              <div className="ml-[4rem] flex mt-[10px]">
                <span>
                  <img
                    className="h-[20px] w-[23px] mt-[8px]"
                    src={keyImage}
                    alt="info"
                  />
                </span>
                <span className="ml-[34px]">
                  My role involves delivering comprehensive training sessions on the
                  {" "}<span className="font-MerriWeatherBlack tracking-tighter">
                    MERN stack
                  </span>{" "}
                </span>
              </div>

              {/* Fifth */}
              <div className="ml-[4rem] flex mt-[10px]">
                <span>
                  <img
                    className="h-[20px] w-[17px] mt-[8px]"
                    src={keyImage}
                    alt="info"
                  />
                </span>
                <span className="ml-[34px] pl-1">
                  Providing instructions in various hosting and version control platforms
                </span>
              </div>

              {/* NaxTech */}
              {/* Image and first banner */}
              <div className="h-[33px] w-[31.25rem]">
                <div className="mt-[20px] flex bg-[#e8ffed] border-t-[2px] border-b-[2px] border-r-[2px] border-l-[0] rounded-t-xl rounded-r-xl rounded-b-xl rounded-l-none ">
                  <div className="w-[100px] ml-[42px]">
                    <img
                      className="bg-[#151515]"
                      src={ZWTECH}
                      alt="My Image"
                    />
                  </div>
                  <div className="ml-[42px] font-PlayfairDisplayBold">
                    Sep 2022- Mar 2023 (6 months)
                  </div>
                </div>
              </div>

              {/* First */}
              <div className="ml-[4rem] flex mt-[25px]">
                <span>
                  <img
                    className="h-[25px] w-[25px]"
                    src={infoImage}
                    alt="info"
                  />
                </span>
                <span className="ml-[30px] font-MerriWeatherBlack">
                  MERN Stack Developer
                </span>
              </div>

              {/* Second */}
              <div className="ml-[3.7rem] flex mt-[10px]">
                <span>
                  <img
                    className="h-[35px] w-[35px]"
                    src={layerImage}
                    alt="info"
                  />
                </span>
                <span className="ml-[25px] pl-2">HTML, CSS, ChakraUI, AuntDesign, JS, TS, ReactJS, ContextApi, Redux, NodeJS, ExpressJS, GraphQL </span>
              </div>

              {/* Third */}
              <div className="ml-[4rem] flex mt-[10px]">
                <span>
                  <img
                    className="h-[20px] w-[20px] mt-[8px]"
                    src={keyImage}
                    alt="info"
                  />
                </span>
                <span className="ml-[36px]">
                  Modified React JS front-end for UAE recruitment business website, resembling LinkedIn.
                </span>
              </div>

              {/* Fourth */}
              <div className="ml-[4rem] flex mt-[10px]">
                <span>
                  <img
                    className="h-[20px] w-[23px] mt-[8px]"
                    src={keyImage}
                    alt="info"
                  />
                </span>
                <span className="ml-[37px]">
                  Developed Node.js-based GraphQL APIs, enhancing data management and integration for Dashboard.
                </span>
              </div>

              {/* Fifth */}
              <div className="ml-[4rem] flex mt-[10px]">
                <span>
                  <img
                    className="h-[20px] w-[34px] mt-[8px]"
                    src={profileImage}
                    alt="info"
                  />
                </span>
                <span className="ml-[37px]">
                  Led the Desgning team and collaborated with product managers,
                  business partners, and engineers to help define{" "}
                  <span className="font-MerriWeatherBlack tracking-tighter">
                    product requirements and roadmap
                  </span>{" "}
                  .
                </span>
              </div>

              {/* Seeraht */}
              {/* Image and first banner */}
              <div className="h-[33px] w-[31.25rem]">
                <div className="mt-[20px] flex bg-[#e8ffed] border-t-[2px] border-b-[2px] border-r-[2px] border-l-[0] rounded-t-xl rounded-r-xl rounded-b-xl rounded-l-none ">
                  <div className="w-[100px] ml-[42px]">
                    <img
                      className="bg-[#151515]"
                      src={Seeraht}
                      alt="My Image"
                    />
                  </div>
                  <div className="ml-[42px] font-PlayfairDisplayBold">
                    May 2022- Aug 2022 (4 months)
                  </div>
                </div>
              </div>

              {/* First */}
              <div className="ml-[4rem] flex mt-[25px]">
                <span>
                  <img
                    className="h-[25px] w-[25px]"
                    src={infoImage}
                    alt="info"
                  />
                </span>
                <span className="ml-[30px] font-MerriWeatherBlack">
                  MERN Stack Developer
                </span>
              </div>

              {/* Second */}
              <div className="ml-[3.7rem] flex mt-[10px]">
                <span>
                  <img
                    className="h-[35px] w-[35px]"
                    src={layerImage}
                    alt="info"
                  />
                </span>
                <span className="ml-[25px] pl-3">HTML, CSS, Bootstrap 5, JS, TS, ReactJS, ContextApi, Redux, NodeJS, ExpressJS, GraphQL, Firebase, Firestore </span>
              </div>

              {/* Third */}
              <div className="ml-[4rem] flex mt-[10px]">
                <span>
                  <img
                    className="h-[20px] w-[20px] mt-[8px]"
                    src={keyImage}
                    alt="info"
                  />
                </span>
                <span className="ml-[36px] pl-1">
                  Developed & maintained MERN web apps at Seeraht, prioritizing quality, scalability, and efficiency.
                </span>
              </div>

              {/* Fourth */}
              <div className="ml-[4rem] flex mt-[10px]">
                <span>
                  <img
                    className="h-[20px] w-[23px] mt-[8px]"
                    src={keyImage}
                    alt="info"
                  />
                </span>
                <span className="ml-[37px] pl-1">
                  Collaborated with cross-functional teams, implementing complex software features using modern development techniques.
                </span>
              </div>

              {/* Seventh */}
              <div className="ml-[4rem] flex mt-[10px]">
                <span>
                  <img
                    className="h-[20px] w-[19px] mt-[8px]"
                    src={keyImage}
                    alt="info"
                  />
                </span>
                <span className="ml-[37px]">
                  Experience in integrating web applications with{" "}
                  <span className="font-MerriWeatherBlack tracking-tighter">
                    third-party APIs
                  </span>{" "}
                  and services.
                </span>
              </div>
              {/* Fifth */}
              <div className="ml-[4rem] flex mt-[10px]">
                <span>
                  <img
                    className="h-[20px] w-[34px] mt-[8px]"
                    src={profileImage}
                    alt="info"
                  />
                </span>
                <span className="ml-[37px] pl-2">
                  Performed code reviews, troubleshooted code issues, and actively participated in the software development lifecycle. Utilized MERN stack, Agile practices, and effective communication for transformative web applications.
                </span>
              </div>

            </div>
            {/* Second SubSection */}
            <div className="w-[43%]">
              <div className="ml-[42px] mt-[15px] text-[41.4899px] tracking-tighter font-RighteousRegular">
                Personal Projects
              </div>

              {/* First Project */}
              <div className="h-[33px] w-[100%]">
                <div className="mt-[30px] flex bg-[#e8ffed] border-t-[2px] border-b-[2px] border-r-[0px] border-l-[2px] rounded-t-xl rounded-r-none rounded-b-xl rounded-l-xl ">
                  <a
                    href="https://github.com/Ahmadjajja/React_Bank"
                    className="w-auto ml-[42px]"
                    target="_blank"
                  >
                    <GitHubIconForProjectsSection />
                  </a>
                  <div className="ml-[20px] font-PlayfairDisplayBold">
                    Full Stack Bank WEB APP
                  </div>
                </div>
              </div>

              {/* First Project Description */}
              <p className="ml-[89px] mt-[15px]">
                Bank-App is a web application allowing users to manage accounts, perform transactions, and view transaction history conveniently.
              </p>
              <div className="ml-[5.5rem] flex mt-[10px]">
                <span>
                  <img
                    className="h-[35px] w-[35px]"
                    src={layerImage}
                    alt="info"
                  />
                </span>
                <span className="ml-[20px]">
                  HTML, CSS, Bootstrap5, JS, React, Context API, Firebase, Firestore
                </span>
              </div>

              {/* Second Project */}
              <div className="h-[33px] w-[100%]">
                <div className="mt-[30px] flex bg-[#e8ffed] border-t-[2px] border-b-[2px] border-r-[0px] border-l-[2px] rounded-t-xl rounded-r-none rounded-b-xl rounded-l-xl ">
                  <a
                    href="https://github.com/Ahmadjajja/Hackathon_Frontend_2022_Batch_04"
                    className="w-auto ml-[42px]"
                  >
                    <GitHubIconForProjectsSection />
                  </a>
                  <div className="ml-[20px] font-PlayfairDisplayBold">
                    Full Stack Real Estate Mobile App
                  </div>
                </div>
              </div>

              {/* Second Project Description */}
              <p className="ml-[89px] mt-[15px]">
                Real-Estate Mobile App with authentication, dashboard, property management, searching, browsing and call-to-action feature for property tansactions, powered by REST APIs using Node JS.
              </p>
              <div className="ml-[5.5rem] flex mt-[10px]">
                <span>
                  <img
                    className="h-[35px] w-[35px]"
                    src={layerImage}
                    alt="info"
                  />
                </span>
                <span className="ml-[20px]">
                  Javascript, ReactNative, NativeBase, Redux, ContextAPI, NodeJS, ExpressJS, MongoDB
                </span>
              </div>

              {/* Third Project */}
              <div className="h-[33px] w-[100%]">
                <div className="mt-[30px] flex bg-[#e8ffed] border-t-[2px] border-b-[2px] border-r-[0px] border-l-[2px] rounded-t-xl rounded-r-none rounded-b-xl rounded-l-xl ">
                  <a
                    href="https://github.com/Ahmadjajja/Frontend_Eshop.git"
                    className="w-auto ml-[42px]"
                  >
                    <GitHubIconForProjectsSection />
                  </a>
                  <div className="ml-[20px] font-PlayfairDisplayBold">
                    Full Stack E-Commerce Mobile App
                  </div>
                </div>
              </div>

              {/* Third Project Description */}
              <p className="ml-[89px] mt-[15px]">
                E-commerce mobile app with user registration, product catalog, cart, wishlist, checkout, payment, order tracking, and admin dashboard.
              </p>
              <div className="ml-[5.5rem] flex mt-[10px]">
                <span>
                  <img
                    className="h-[35px] w-[35px]"
                    src={layerImage}
                    alt="info"
                  />
                </span>
                <span className="ml-[20px]">
                  JavaScript, React-Native, Redux, Context-API, Native-Base, Node-JS, Express JS, Mongodb
                </span>
              </div>

              {/* Achievements */}
              <div className="ml-[42px] mt-[10px] text-[41.4899px] tracking-tighter font-RighteousRegular">
                Achievements
              </div>

              {/* First Achievement */}
              <div className="ml-[62px] mt-[5px] flex">
                <div className="w-[10%]">
                  <img className="mt-[8px]" src={MedalIcon} alt="medalIcon" />
                </div>
                <div className="w-[90%] pl-3 pt-4">
                  Solved 200+ {" "}
                  <span className="font-MerriWeatherBlack tracking-tighter">
                    Data Structures and Algorithms
                  </span>{" "} problems on different plateforms
                </div>
              </div>

              {/* Second Achievement */}

              <div className="ml-[62px] mt-[5px] flex">
                <div className="w-[10%]">
                  <img className="mt-[8px]" src={MedalIcon} alt="medalIcon" />
                </div>
                <div className="w-[90%] pl-3 pt-4">
                  Proficient in JavaScript, TypeScript, Java, C, C++, and Python languages.
                </div>
              </div>

              {/* Third Achievement */}

              <div className="ml-[62px] mt-[5px] flex">
                <div className="w-[10%]">
                  <img className="mt-[8px]" src={MedalIcon} alt="medalIcon" />
                </div>
                <div className="w-[90%] pl-3 pt-4">
                  Completed{" "}
                  <span className="font-MerriWeatherBlack tracking-tighter">
                    JavaScript
                  </span>{" "}
                  course from <a href="https://codeliber.com/">Codeliber</a>
                </div>
              </div>

              {/* Fourth Achievement */}

              <div className="ml-[62px] mt-[5px] flex">
                <div className="w-[10%]">
                  <img className="mt-[8px]" src={MedalIcon} alt="medalIcon" />
                </div>
                <div className="w-[90%] pl-3 pt-4">
                  Completed one year{" "}
                  <span className="font-MerriWeatherBlack tracking-tighter">
                    Web and Mobile App Development
                  </span>{" "}
                  Course from {" "}
                  <span className="font-MerriWeatherBlack tracking-tighter">
                    Saylani Mass IT Training Programs(SMIT).
                  </span>{" "}
                </div>
              </div>

              {/* Education  */}
              <div className="ml-[42px] mt-[15px] text-[41.4899px] tracking-tighter font-RighteousRegular">
                Education
              </div>

              {/* Description */}
              <div className="flex">
                <div className="w-[40px] ml-[46px] mt-[30px]">
                  <img src={graduationImage} alt="graduation logo" />
                </div>
                <div className="ml-[20px] mt-[30px] font-MerriWeatherBlack">
                  Bachelor in Computer Science
                </div>
              </div>
              <div>
                <div className="mt-[-4px] ml-[106px] font-MerriweatherLight">
                  University of Agriculture, Faisalabad
                </div>
                <div className="flex ml-[106px] font-LatoItalic ">
                  <p>2020-2024</p>
                  <p className="ml-[60px]">CGPA 3.35/4</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PDFExport>
    </div>
  );
}

export default Resume;
