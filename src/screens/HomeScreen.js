import React from 'react';
import { Tab,Tabs } from "react-bootstrap"; 
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import RecentWeb from '../components/header/Recentcomponents/RecentWeb';
import ContactComponent from '../components/header/ContactComponent/ContactComponent';
import Stab1 from './Stab1';
import Stab2 from './Stab2';
import Stab3 from './Stab3';
import RecentApp from './../components/header/Recentcomponents/RecentApp';
import AppData from '../data/AppData';
import WebsiteData from '../data/WebsiteData';

function HomeScreen(props) {
    return (
        <>
        {/* Header */}
   <Header bgColor="black"/>
    {/* HOME SCREEN */}
    <div className="Mainbackground" id="home">
      <div className="topBackground"></div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#001517"
          fillopacity="1"
          d="M0,192L40,213.3C80,235,160,277,240,293.3C320,309,400,299,480,277.3C560,256,640,224,720,186.7C800,149,880,107,960,122.7C1040,139,1120,213,1200,218.7C1280,224,1360,160,1400,128L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
      <div className="container fluids">
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <div className="screenWords">
              <h1>Hello, I'm Ameerhamza</h1>
              <p> 
              A full-stack developer. Specializing in
              building exceptional trending mobile applications
              and websites. Feel free to take a look at my latest 
              projects. Remotely available UTC−1 to UTC+8. project@Ameerhamza.com Phone:+923 055381824 
               </p>
              <div className="twoMainButton">
                <div className="buttonMain">
                  <Link to="/app">Mobile Apps</Link>
                  <div className="hrizontalLine"></div>
                </div>
                <div className="buttonMain">
                  <Link to="/website">Websites</Link>
                  <div className="hrizontalLine diff"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-6">
            <div className="screenImage">
              <img src="images/mainimg1.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* SERVICES */}
    <div className="section" id="services">
      <div className="container rows">
        <Tabs defaultActiveKey="services" className="tab">
         <Tab className="tablinks" eventKey="services" title="services">
         <Stab1/> 
         </Tab>
         <Tab className="tablinks" eventKey="technology" title="technology">
         <Stab2/>
         </Tab>
         <Tab className="tablinks" eventKey="industry" title="industry">
         <Stab3/>
         </Tab>
        </Tabs>  
        </div>  
      </div>
    {/* ABOUT */}
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-md-6">
                <div className="aboutMeImg">
                  <img src="images/about-me.jpg" alt="about me" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-me">
                  <h5>About me</h5>
                  <div className="aboutHorizontalLine"></div>
                  <p> I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences. </p>
                  <p>Familiarity with Front End High level programming such as HTML, CSS, ReactJS, XML, jQuery and JSON. Server Side coding skills Node.js and Php Frameworks( Express.js,Laravel). </p>
                  <p> Understanding of data structures algorithms including data migration, transformation and analysis. Deploying, managing, and operating scalable, highly available, and fault tolerant systems on AWS. </p>
                  <p> Excellent communication skills on both Swahili and English. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* CONTACT */}
    <div className="contactme" id="contact">
      <div className="contactOverlay">
        <div className="container">
        <div className="form">
           <ContactComponent/>
           </div>
        </div>
      </div>
    </div>
    {/* RECENT WORK */}
    <div className="container" id="blogs">
      <div className="article">
        <h2>Recent Work</h2>
        <hr />
        <div className="rows">

          {WebsiteData.websites.slice(0,2).map((website) =>(
            <RecentWeb key={website.id} website={website} />
            ))}
            
            {AppData.apps.slice(0,2).map((app) =>(
            <RecentApp key={app.id} app={app} />
            ))}

        </div>
      </div>
    </div>   
        </>
    );
}

export default HomeScreen;
