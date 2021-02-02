import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SideFooter from '../components/SideFooter';

import heroImage from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';
import { Link } from 'gatsby';

import {SiAdobelightroom, SiAdobeprenmiere, SiAdobeaftereffects,  SiAdobeillustrator} from 'react-icons';

const img_set_1 = [
  {
    src: require('../assets/images/gallery/fulls/web/Dashboard.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/web/Dashboard.jpg'),
    title: 'System Information Academic',
    desc: 'Dashboard',
    full: true,
  },
  {
    src: require('../assets/images/gallery/fulls/web/DataUser.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/web/DataUser.jpg'),
    title: 'High System Information Academic',
    desc: 'Data User',
    full: true,
  },
  {
    src: require('../assets/images/gallery/fulls/web/Proposal.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/web/Proposal.jpg'),
    title: 'System Information Academic',
    desc: 'Create Proposal',
    full: true,
  },
];
const img_set_2 = [
  {
    src: require('../assets/images/gallery/fulls/3d/front_CB.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/3d/front_CB.jpg'),
    title: 'Cyberpunk Concept',
    desc: '3d of myself',
  },
  {
    src: require('../assets/images/gallery/fulls/3d/1.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/3d/1.jpg'),
    title: 'Concept art',
    desc: 'Mask awareness',
  },
  {
    src: require('../assets/images/gallery/fulls/3d/setan.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/3d/setan.jpg'),
    title: 'Concept art',
    desc: 'Wendigo',
    full: true,
  },
];
const img_set_3 = [
  {
    src: require('../assets/images/gallery/fulls/content/f40.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/content/f40.jpg'),
    title: 'The Crew 2 - Music Video',
    desc: 'https://youtu.be/2w9ImeU2L_0',
    full: true,
  },
  {
    src: require('../assets/images/gallery/fulls/content/gtr.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/content/gtr.jpg'),
    title: 'The Crew 2 - Morning Ride',
    desc: 'https://youtu.be/pgiWKeemcAM',
    full: true,
  },
];

const img_set_4 = [
  {
    src: require('../assets/images/gallery/fulls/photo/gaga.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/photo/gaga.jpg'),
    title: 'Freelance',
    desc: 'Street photograpy',
    full: true,
  },
  {
    src: require('../assets/images/gallery/fulls/photo/aya.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/photo/aya.jpg'),
    title: 'Freelance',
    desc: 'Engagement event',
  },
  {
    src: require('../assets/images/gallery/fulls/photo/salju.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/photo/salju.jpg'),
    title: 'Holiday',
    desc: 'People of interest',
  },
  {
    src: require('../assets/images/gallery/fulls/photo/ikiw.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/photo/ikiw.jpg'),
    title: 'Freelance',
    desc: 'Wedding event',
    full: true,
  },
];

const IndexPage = () => (
  <Layout>
    <div id="wrapper">
      <section className="intro">
        <Header />
        <div className="content">
          <span className="image fill" data-position="center">
            <img src={heroImage} alt="" />
          </span>
        </div>
      </section>

      <section id="first">
        <header>
          <h2>About Me</h2>
        </header>
        <div className="content">
          <p>
            My name is Iqbal Pratama Yuda Putra this is my portofolio i
            was graduated on last year i took <strong>Information System</strong> major
            in Widaytama University.
            I am very passionate and always curious to try something interesting
            about programming and content creation, and I
            have programming experiences such as develop a website
            for acedemic services in Widyatama University as my minithesis
            and creating content about video games, videography,
            photography.
          </p>
          <span className="image main">
            <img src={pic2} alt="" />
          </span>
        </div>
      </section>

      <section>
        <header>
          <h2>What Can I Do</h2>
        </header>
        <div className="content">
          <p>
            <strong>This is the basic</strong> things i can currently work with it.
          </p>
          <ul className="feature-icons">
            <li className="icon fa-camera">Photography</li>
            <li className="icon fa-video-camera">Videography</li>
            <li className="icon fa-code">Web Programming</li>
            <li className="icon fa-cube">Blender (3D Scene)</li>
            <li className="icon fa-pencil">Graphic Design</li>
          </ul>
          <p>
            My current skill that i had with freelance work and learning it 
            by myself while i learning in college.
          </p>
        </div>
      </section>

      <section>
        <header>
          <h2>My Portofolio</h2>
        </header>
        <div className="content">
          <p>
            Here is my <strong>portofolio</strong> from my last project
          </p>

          <section>
            <header>
              <h3>Web Programming</h3>
              <p>
              The academic services of Widyatama University Information System Study Program are still conducted conventionally,
               especially in the process of registration of practical work and submission of theses which are still done by manually registering the files submitted to the administration. 
               It really requires a relatively long processing time. Therefore i need to find solutions to solve problems that occur in academic services by creating an Academic Information System website. 
              Web-based academic information systems in Widyatama University Information System covering several factors, 
              namely data management systems ranging from lecturer, student data,
               intenrnship registration, thesis submission and there is also making reports using a codeigniter framework. 
              </p>
            </header>
            <div className="content">
              <Gallery images={img_set_1} />
            </div>
          </section>

          <section>
            <header>
              <h3>3D Scene</h3>
              <p>
               Some scene that i made from blender, with some other work flow
               to design and simulate the clothes in marvelous design.
               
              </p>
            </header>
            <div className="content">
              <div className="gallery">
                <Gallery images={img_set_2} />
              </div>
            </div>
          </section>

          <section>
            <header>
              <h3>Content Creation</h3>
              <p>
               This is my last content creation from my last project
               , the most content that i made is about virtual photography and cinematic
               that i took from games. Visit my youtube or instagram for more.
              </p>
            </header>
            <div className="content">
              <div className="gallery">
                <Gallery images={img_set_3} />
              </div>
            </div>
          </section>

          <section>
            <header>
              <h3>Photography</h3>
              <p>
              i’m very passioante about photograpy i take a picture of people sometime pets.
              My goals is to capture a moment that people rarely show in the real word.
               My recent focus has been on photographing In - game capture and people of interest.
              </p>
            </header>
            <div className="content">
              <div className="gallery">
                <Gallery images={img_set_4} />
              </div>
            </div>
          </section>
        </div>
      </section>
    
      <section>
      <Footer />
        <SideFooter />
        <ContactForm />
      </section>

    </div>
  </Layout>
);

export default IndexPage;
