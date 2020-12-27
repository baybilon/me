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
    title: 'Great Sky',
    desc: 'Be one with the Universe',
    full: true,
  },
  {
    src: require('../assets/images/gallery/fulls/web/DataUser.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/web/DataUser.jpg'),
    title: 'High Mountains',
    desc: 'Be one with the mountains',
    full: true,
  },
  {
    src: require('../assets/images/gallery/fulls/web/Proposal.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/web/Proposal.jpg'),
    title: 'Any time ',
    desc: 'Be one with the time',
    full: true,
  },
];
const img_set_2 = [
  {
    src: require('../assets/images/gallery/fulls/3d/front_CB.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/3d/front_CB.jpg'),
    title: 'Any Curiosity',
    desc: 'Be one with the curiosity',
  },
  {
    src: require('../assets/images/gallery/fulls/3d/1.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/3d/1.jpg'),
    title: 'Any source of enlightenment',
    desc: 'Be one with the soul',
  },
  {
    src: require('../assets/images/gallery/fulls/3d/setan.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/3d/setan.jpg'),
    title: 'Be in present',
    desc: 'Be one with the present',
    full: true,
  },
];
const img_set_3 = [
  {
    src: require('../assets/images/gallery/fulls/content/f40.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/content/f40.jpg'),
    title: 'The Crew 2 - Music Video',
    desc: 'Be one with the empathy',
    full: true,
  },
  {
    src: require('../assets/images/gallery/fulls/content/gtr.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/content/gtr.jpg'),
    title: 'The Crew 2 - Morning Ride',
    desc: 'Be one with the moment',
    full: true,
  },
];

const img_set_4 = [
  {
    src: require('../assets/images/gallery/fulls/photo/gaga.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/photo/gaga.jpg'),
    title: 'The Crew 2 - Music Video',
    desc: 'Be one with the empathy',
    full: true,
  },
  {
    src: require('../assets/images/gallery/fulls/photo/aya.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/photo/aya.jpg'),
    title: 'The Crew 2 - Music Video',
    desc: 'Be one with the empathy',
  },
  {
    src: require('../assets/images/gallery/fulls/photo/salju.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/photo/salju.jpg'),
    title: 'The Crew 2 - Morning Ride',
    desc: 'Be one with the moment',
  },
  {
    src: require('../assets/images/gallery/fulls/photo/ikiw.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/photo/ikiw.jpg'),
    title: 'The Crew 2 - Music Video',
    desc: 'Be one with the empathy',
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
            <strong>Integer mollis egestas</strong> Here is my portofolio from my last project
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
                Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
                aliquam sed facilisis ante interdum congue. Integer mollis, nisl
                amet convallis, porttitor magna ullamcorper, amet mauris. Ut
                magna finibus nisi nec lacinia ipsum maximus.
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
                Proin aliquam facilisis ante interdum. Sed nulla amet lorem
                feugiat tempus aenean ornare velit lacus, ac varius sed enim
                lorem ullamcorper dolore. ac varius enim lorem ullamcorper
                dolore. Proin aliquam facilisis.
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
