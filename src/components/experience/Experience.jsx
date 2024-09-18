import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I Have</h5>
      <h2>Technical Skills</h2>
      <div className="container experience__container margin:auto" >
        <div className="experience_frontend">
          <h3>Technical Skills and core competencies</h3>
          <div className="experience_content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Machine Learning</h4>
                  {/* <small className='text-light'>Experienced</small> */}
                </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Deep Learning</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Data Analytics</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                {/* <small className='text-light'>(limited proficiency)</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Excel</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Tableu</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>SSIS</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Data Wrangling</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
          </div>
        </div>

        {/* f/b */}
        {/* <div className="experience_backend">
          <h3>Development and Analytics related skills</h3>
          <div className="experience_content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>React JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>  
        </div> */}
        
      </div>

    </section>
  )
}

export default Experience