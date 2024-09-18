import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>My experience</h5>
      <h2>A little insight</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Internship</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Data Science intern at Wipro. May 2023-July 2023</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Served as Vice President of University Club (Zero Bugs) </p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX */}
        <article className='service'>
          <div className="service__head">
            <h3>Certifications</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Machine Learning A-Z™ : Python & R in Data Science (Udemy, 2023)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Deep Learning A-Z™ : HandsOn Artificial Neural Networks (Udemy, 2023)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Data Analysis Using Python (IBM, 2022)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>The Joy of Computing using Python (NPTEL, 2022)</p>
            </li>
          </ul>
        </article>
        {/* end of webdevelopment */}
        <article className='service'>
          <div className="service__head">
            <h3>Other Skills</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Communicate effectively and confidently</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Can work under pressure and stringent deadlines</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Detail oriented, methodical and organized</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Team Player</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Visionary</p>
            </li>
          </ul>
        </article>
        {/* End of Content Creation */}
      </div>
    </section>
  )
}

export default Services