import { Component } from "react";
//Components
import Navigation from "../components/navigation";
import getAllBlogPosts from "../api/getAllBlogPosts.js";
import HeadMetadata from "../components/headMetadata.js";
// Images
import logo from "../public/Images/Logo.png";
import Image from "next/image";
import heroImage from "../public/Images/Hero-image.png";
import front from "../public/Images/front.svg";
import back from "../public/Images/back.svg";
import ui from "../public/Images/ui.png";
import ux from "../public/Images/ux.png";
import ps from "../public/Images/photoshop.svg";
import ai from "../public/Images/illustrator.svg";
import jq from "../public/Images/jquery.svg"; 
import git from "../public/Images/github.svg";
import li from "../public/Images/link.svg";
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import script from './../script.js';
import Slide from 'react-reveal/Slide';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import effectJs from './../public/Images/effect-js.min.js';
import 'animate.css';


// import ScrollReveal, { reveal } from "scrollreveal";
// import $ from 'jquery';


library.add(fab,  fas)


export default class extends Component {

  static async getInitialProps () {
    const apiResult = await getAllBlogPosts()
    
    return {
      skills: apiResult && apiResult.skills,
      getDataError: apiResult && apiResult.getDataError
      
    }
  }
  componentDidMount() {
    
  }
  
render () {
    return (
      <>
      
    <HeadMetadata title="My Blog"  metaDescription="Sahil Sharma is a full stack software developer that also writes about modern NodeJS and JavaScript."/>
    <main className="App  text-center"  >
        
           <section  ref='cont' className="background bg-night element border-t-10 border-r-10 border-l-10 border-white" id="hero">
        {/* footer icons */}
        
          <div className="left_con">
            <ul>
              <li><a href="#"><FontAwesomeIcon icon={['fab','github']}  ></FontAwesomeIcon></a></li>
              <li><a href="#"><FontAwesomeIcon icon={['fab','instagram']}  ></FontAwesomeIcon></a></li>
              <li><a href="#"><FontAwesomeIcon icon={['fab','linkedin-in']}  ></FontAwesomeIcon></a></li>
              <li><a href="#"><FontAwesomeIcon icon={['fab','codepen']}  ></FontAwesomeIcon></a></li>
              <li><a href="#"><FontAwesomeIcon icon={['fas','mobile-alt']}  ></FontAwesomeIcon></a></li>
            </ul>
          </div>
          <div className="right_con">
             <div>
              <a href="mailto:sahil.catalan10@gmail.com">Sahil.catalan10@gmail.com </a>

            </div>
          </div>
        
         {/* footer icons */}
        <div className="content" >
           <div className="logo-part md:w-full logo-container flex flex-row" >
           {/* <img alt="logo image" src={post.basics.picture} /> */}
             <Image alt="logo image" className="mt-4  ml-4" src={logo} />
                       </div>
          
           <div className="content-part container flex-row flex md:mx-auto">
           <div className="ml-4 text-container w-full md:w-6/12">
               <p className="text-primary h-3/4 text-5xl text-left py-8 md:text-2xl">
                 Hi, It’s <span className="text-orange"></span>{" "} <br />
                 A multidisciplinary and self taught Front End {" "}
                 <span className="text-orange">Developer</span>{" "}and {" "} 
                 <span className="text-l-green">Designer</span>{" "}with
                 the passion of Creating and Developing Elegant {" "}
                 <span className="text-orange">Web</span> {" "}
                 <span className="text-l-green">Apps</span>
               </p>
           </div>
           <div className="hero-image-container w-full md:w-6/12">
            
              <Image alt="Heroimage" className="h-heroHeight Heroimage" src={heroImage}/>
           
           </div>
           </div>
           <section className="navigation-s w-full h-auto element" id="Navbar"><Navigation  /></section>
         </div>
        </section>
       
       
        <section className="background bg-night element border-r-10 border-l-10 border-white" id="Skills">
        <div className="skills content ">             
        {
        this.props.skills ?
        this.props.skills.map((skill, index) => {
          return (
                      <li key={index} className="w-full font-bold text-xl text-white z-10 px-6">{skill.name} {skill.level}</li>
            )
            
        }) :  
        <div className="blog-posts-get-data-error-msg">
            <span>An error occurred.</span>
        </div>
        }
        
         
           <h4 className="text-white">Skills</h4>
          <div id="skillcon" className="skill-container flex flex-row w-full">
            <div className="reveal justify-center w-1/2 h-skillBox skillbox flex flex-col">  
              <div className="w-full h-1/3 img-box">
                <Image alt="front image" className="mt-4 h-auto w-auto ml-4" src={front} />
              </div>
              <div className="w-full h-1/3 con-box flex justify-center flex-col">
                <div className="text">
                  <p id="text-li" className="animate__animated">I like to code things from scratch, and enjoy bringing ideas to life in the browser with the help of my favourite tools</p>
                </div>
              </div>
              <div className="w-full h-1/3 flex justify-center">
              <Slide bottom oppositeg>
                <div className="icons flex items-center">
                 {/* <FontAwesomeIcon icon={['fab', 'react']} /> */}
                 <FontAwesomeIcon icon={['fab','react']}  ></FontAwesomeIcon>
                 <FontAwesomeIcon icon={['fab','html5']}  ></FontAwesomeIcon>
                 <FontAwesomeIcon icon={['fab','css3']}  ></FontAwesomeIcon>
                 <FontAwesomeIcon icon={['fab','angular']}  ></FontAwesomeIcon>
                 <FontAwesomeIcon icon={['fab','vuejs']}  ></FontAwesomeIcon>
                 <FontAwesomeIcon icon={['fab','js-square']}  ></FontAwesomeIcon>
                 <Image alt="front image" className="mt-4 h-auto w-auto ml-4" src={jq} />
                 <FontAwesomeIcon icon={['fab','node-js']}  ></FontAwesomeIcon>
                 <FontAwesomeIcon icon={['fab','shopify']}  ></FontAwesomeIcon>
                 <FontAwesomeIcon icon={['fab','wordpress']}  ></FontAwesomeIcon>
                 <FontAwesomeIcon icon={['fab','bootstrap']}  ></FontAwesomeIcon> 
                 <FontAwesomeIcon icon={['fab','git-alt']}  ></FontAwesomeIcon> 
                 </div>
                </Slide>
               
              </div>
            </div>

            <div className="reveal w-1/2 justify-center h-skillBox skillbox flex flex-col">
              <div className="w-full h-1/3 img-box">
                <Image alt="back image" className="h-auto w-auto mt-4  ml-4" src={back} />
              </div>
              <div className="w-full h-1/3 con-box flex justify-center flex-col">
                  <div className="text">
                    <p id="text-ri" className="">A Passionate UI/UX DeveIoper with a flair for creating elegant and eye pleasing Web UI thoughtful interactions </p>
                  </div>
               
              </div>
              <div className="w/-full h-1/3 flex justify-center">
                <div className="icons flex items-center">
                  <FontAwesomeIcon icon={['fab','figma']}  ></FontAwesomeIcon>
                  <Image alt="front image" className="mt-4 h-auto w-auto ml-4" src={ps} />
                  <Image alt="front image" className="mt-4 h-auto w-auto ml-4" src={ai} />
                  <Image alt="front image" className="mt-4 h-auto w-auto ml-4" src={ui} />
                  <Image alt="front image" className="mt-4 h-auto w-auto ml-4" src={ux} />
                  </div>
              </div>
              
            </div>

          </div>


         </div>
         
        </section>
        <section className="background  bg-night elemen t border-r-10 border-l-10 border-white" id="Projects">
          <div className="content ">
          <h4 className="text-white">projects</h4>
         
         <div className="pro_box_container grid grid-cols-3 gap-8 mb-4 w-8/12	">
            {/* 1 */}
                <div className="pro_box">
                <div className="pro_box__link">
                    <a href="#">
                      <Image src={git} />
                    </a>
                    <a href="#">
                      <Image src={li} />
                    </a>
                  </div>
                  <div className="pro_box__con">
                    <h2 className="text-xl h2">Project Name</h2>
                    <h5 className="text-base h5">HTML/CSS/JS</h5>
                  </div>
                </div>
                {/* 2 */}
                <div className="pro_box">
                <div className="pro_box__link">
                    <a href="#">
                      <Image src={git} />
                    </a>
                    <a href="#">
                      <Image src={li} />
                    </a>
                  </div>
                  <div className="pro_box__con">
                  <h2 className="text-xl">Project Name</h2>
                    <h5 className="text-base">HTML/CSS/JS</h5>
                  </div>
                </div>
                {/* 3 */}
                <div className="pro_box">
                <div className="pro_box__link">
                    <a href="#">
                      <Image src={git} />
                    </a>
                    <a href="#">
                      <Image src={li} />
                    </a>
                  </div>
                  <div className="pro_box__con">
                  <h2 className="text-xl">Project Name</h2>
                    <h5 className="text-base">HTML/CSS/JS</h5>
                  </div>
                </div>
                {/* 4 */}
                <div className="pro_box">
                <div className="pro_box__link">
                    <a href="#">
                      <Image src={git} />
                    </a>
                    <a href="#">
                      <Image src={li} />
                    </a>
                  </div>
                  <div className="pro_box__con">
                  <h2 className="text-xl">Project Name</h2>
                    <h5 className="text-base">HTML/CSS/JS</h5>
                  </div>
                </div>
                {/* 5 */}
                <div className="pro_box">
                <div className="pro_box__link">
                    <a href="#">
                      <Image src={git} />
                    </a>
                    <a href="#">
                      <Image src={li} />
                    </a>
                  </div>
                  <div className="pro_box__con">
                  <h2 className="text-xl">Project Name</h2>
                    <h5 className="text-base">HTML/CSS/JS</h5>
                  </div>
                </div>
                {/* 6 */}
                <div className="pro_box">
                  <div className="pro_box__link">
                    <a href="#">
                      <Image src={git} />
                    </a>
                    <a href="#">
                      <Image src={li} />
                    </a>
                  </div>
                  <div className="pro_box__con">
                  <h2 className="text-xl">Project Name</h2>
                    <h5 className="text-base">HTML/CSS/JS</h5>
                  </div>
                </div>
          
         </div>
        

        </div>
        </section>
        <section className="background  bg-night element border-b-10 border-r-10 border-l-10 border-white" id="Experience">
        <div className="content">
         <div className="ex_box w-full">
         <h4 className="text-white mt-8 mb-12">experience</h4>
          <Tabs className="tabs flex flex-col w-4/5 mx-auto h-auto ">
            <TabList className="ex_btn w-full">
              <Tab className="text-grey hover:text-l-green hover:bg-d-blue">Company name 1</Tab>
              <Tab className="text-grey hover:text-l-green hover:bg-d-blue">Company name 2</Tab>
              <Tab className="text-grey hover:text-l-green hover:bg-d-blue">Company name 3</Tab>
            </TabList>

            <TabPanel className="h-10/12 tabPanel">
              <h2 className="text-3xl">Post <span className="text-l-green">@ Company </span></h2>
              <span className="time_p text-base text-grey">May 2019 - Present</span>
              <ul>
                <li className="text-2xl p text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</li>
                <li className="text-2xl text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</li>
                <li className="text-2xl text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</li>

              </ul>

            </TabPanel>
            <TabPanel className="h-10/12 tabPanel">
              <h2 className="text-3xl">Post <span className="text-l-green">@ Company 2</span></h2>
              <span className="time_p text-xs text-grey">June 2018 - 2019</span>
              <ul>
                <li className="text-2xl p text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</li>
                <li className="text-2xl text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</li>
                <li className="text-2xl text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</li>

              </ul>
            </TabPanel>
            <TabPanel className="h-10/12 tabPanel">
              <h2 className="text-3xl">Post <span className="text-l-green">@ Company 3</span></h2>
              <span className="time_p text-xs text-grey">January 2017 - 2018</span>
              <ul>
                <li className="text-2xl p text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</li>
                <li className="text-2xl text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</li>
                <li className="text-2xl text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</li>

              </ul>
            </TabPanel>
          </Tabs>
         </div>


        </div>
        </section>
        {/* <section className="background  bg-pink element" id="Contact Footer"><Footer  /> </section> */}
    </main>


    </>
    )
  }
}

