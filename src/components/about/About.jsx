import React from 'react'
import './about.css'
import ME from '../../assets/aarya.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know </h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="aboutME" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
               <FaAward className='about__icon'/>
              <h5>Work Experience</h5>
              <small>Interned at Wipro</small>
            </article>

            <article className='about__card'>
               <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>

            <article className='about__card'>
               <FiUsers className='about__icon'/>
              <h5>Education</h5>
              <small>Masters in Data Science</small>
            </article>
          </div>

          <p>
          Hey! I'm Aarya, a Data Science professional with a passion for solving complex problems, 
          I bring a blend of advanced technical expertise and strong interpersonal skills. 
          With an ongoing Master's in Data Science from Indiana University and a Bachelor's in Computer Science, 
          I have honed my abilities in machine learning, deep learning, data analytics, and automation, 
          notably through an impactful internship and projects. From developing a wildfire 
          detection model with 97.8% accuracy to enhancing image generation techniques, 
          my technical work is driven by a commitment to innovation. Beyond the code, 
          my leadership roles and volunteer experience reflect my dedication to collaboration, 
          empathy, and empowering others, creating a well-rounded approach to both technical and human challenges.
          </p>

          <a href="#contact" className='btn btn-primary'>Want to know more? Connect with me!</a>
        </div>
      </div>
    </section>
  )
}

export default About