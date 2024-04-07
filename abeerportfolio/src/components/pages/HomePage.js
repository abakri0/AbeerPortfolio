import React from 'react'
import MyNavbar from '../inc/MyNavbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderSection from '../inc/HeaderSection';
import AboutMe from '../inc/AboutMe';
import ServicesSection from '../inc/ServicesSection';
import ProjectSection from '../inc/ProjectSection';
import ContactSection from '../inc/ContactSection';
import Footer from '../inc/Footer';

export default function HomePage() {
  return (
    <div className='container '>
      <MyNavbar/>
      <HeaderSection/>
      <AboutMe/>
      <ServicesSection/>
      <ProjectSection/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}
