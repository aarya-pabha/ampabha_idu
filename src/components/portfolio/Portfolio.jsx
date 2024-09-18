import React from 'react'
import './portfolio.css'
import IMG3 from '../../assets/portfolio3.jpg'

const data= [
  {
    id:1,
    image:IMG3,
    title: 'Wildfire Detection Using Vision Transformers',
    github: 'https://github.com/aarya-pabha/Wildfire-Detection-using-Vision-Transformers',
  },
  {
    id:2,
    image:IMG3,
    title: 'Aspect Based Sentiment Analysis',
    github: 'https://github.com/aarya-pabha/Aspect-Based-Sentiment-Analysis',
  },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
        data.map(({id,image,title,github,demo}) => {
          return(
            <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>  
              </div>  
            </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default Portfolio 