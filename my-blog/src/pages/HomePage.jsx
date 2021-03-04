import React from 'react';
import img from '../img/facialrecognition.jpg';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

const HomePage = () => {
  return (
    <>
    <div className="grid-container">
      <div className="cell1">
        <div className="title1 fade-in">
          The Face Value project
        </div>
      </div>
      <div className="cell2">
        <img src={img} alt="cannot display" className="img-style fade-in" />
      </div>
      <div className="cell3">
        <div className="txstyle1">
          While facial recognition technology has been around for decades, its use has risen sharply in the last 5 years or so as it trickled into our personal devices to offer new security features.  
          Touted as an effective tool of protection and law enforcement by some, berated as an instrument of surveillance and racial discrimination by others, facial recognition has raised many questions and quite a few eyebrows.        
          The Face Value project is born from a desire to gather and centralize information about the technology and nurture conversations around it. 
          This blog provides a number of posts and recent tweets on the topic to stay informed of the latest developments. 
        </div>
      </div>  
      <div className="cell4">
        <h3 className="text-center">A brief history of facial recognition technology</h3>
        <Timeline lineColor={'#ddd'}>
          <TimelineItem
            key="001"
            dateText="1960s"
            dateInnerStyle={{ background: '#929292'}}
            style={{ color: '#929292' }}
            bodyContainerStyle={{
              background: 'white',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
            }}
          >
            <h3 style={{color: '#929292'}}>
              The early days of facial recognition
            </h3>
            <p>
              Woody Bledsoe, Helen Chan Wolf and Charles Bisson started to use computers to recognise the human face. 
              While their work was groundbreaking, it was seriously hampered by the technology of the era.
            </p>
          </TimelineItem>
          <TimelineItem 
            key="002" 
            dateText="1970s" 
            dateInnerStyle={{ background: '#929292'}}
            style={{ color: '#929292' }}
            bodyContainerStyle={{
              background: 'white',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
            }}
          >
            <h3 style={{color: '#929292'}}>
              Enhacing accuracy 
            </h3>
            <p>
              Harmon, Goldstein, and Lesk improved upon their predecessors' work to detect faces more accurately by identifying 21 facial markers such as lip thickness and hair color.
            </p>
          </TimelineItem>
          <TimelineItem
            key="003"
            dateText="1980s-1990s"
            dateInnerStyle={{ background: '#929292'}}
            style={{ color: '#929292' }}
            bodyContainerStyle={{
              background: 'white',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
            }}
          >
            <h3 style={{color: '#929292'}}>
              Eigenfaces 
            </h3>
            <p>
            In 1988, Sirovich and Kirby began applying linear algebra to the problem of facial recognition and showed that less than one hundred values were required in order to accurately code a normalized face image.
            In 1991, Turk and Pentland expanded upon the Eigenface approach by discovering how to detect faces within images. 
            </p>
          </TimelineItem>
          <TimelineItem
            key="004"
            dateText="2000s"
            dateInnerStyle={{ background: '#929292'}}
            style={{ color: '#929292' }}
            bodyContainerStyle={{
              background: 'white',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',      
            }}
          >
            <h3 style={{color: '#929292'}}>Taking stock</h3>
            <p>
              As commercial use of facial recognition grew, FRVTs (Face Recognition Vendor Tests) were conducted by independent government agencies to determine the best way to deploy the technology. 
              Futher assessment was conducted as part of the FRGC (Face Recognition Grand Challenge) to advance facial recognition.
            </p>
          </TimelineItem>
          <TimelineItem
            key="004"
            dateText="2010s"
            dateInnerStyle={{ background: '#929292'}}
            style={{ color: '#929292' }}
            bodyContainerStyle={{
              background: 'white',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',      
            }}
          >
            <h3 style={{color: '#929292'}}>The democratization of facial recognition</h3>
            <p>
              Airports, stadiums, concert halls, conference venues, cell phones, etc. As facial recognition trickled into our daily lives, ethical concerns about data collection, consent, and acceptable implementation began to surface.
            </p>
          </TimelineItem>
        </Timeline>
          </div> 
    </div>  
    </>  
    )
};

export default HomePage;
